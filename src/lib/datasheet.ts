import {
  formatPrice,
  getCategory,
  getProductCode,
  siteInfo,
  type Product,
} from "@/lib/data";
import { sharedProbeNote } from "@/lib/probeSpecs";

type PdfLine = { text: string; size: number; bold: boolean; gap: number };

const asciiReplacements: Record<string, string> = {
  "×": "x",
  "µ": "um",
  "±": "+/-",
  "≤": "<=",
  "≥": ">=",
  "°": " deg",
  "–": "-",
  "—": "-",
  "’": "'",
  "“": '"',
  "”": '"',
};

function toAscii(value: string): string {
  return value
    .split("")
    .map((char) => asciiReplacements[char] ?? char)
    .join("")
    .replace(/[^\x20-\x7e]/g, "?");
}

function escapePdfText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapText(value: string, maxLength: number): string[] {
  const words = value.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [""];

  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (line.length === 0) {
      if (word.length <= maxLength) {
        line = word;
      } else {
        for (let i = 0; i < word.length; i += maxLength) {
          lines.push(word.slice(i, i + maxLength));
        }
      }
      continue;
    }
    if (line.length + 1 + word.length <= maxLength) {
      line += ` ${word}`;
    } else {
      lines.push(line);
      if (word.length <= maxLength) {
        line = word;
      } else {
        for (let i = 0; i < word.length; i += maxLength) {
          lines.push(word.slice(i, i + maxLength));
        }
        line = "";
      }
    }
  }
  if (line) lines.push(line);
  return lines;
}

function byteLength(value: string): number {
  return new TextEncoder().encode(value).length;
}

function buildPdf(lines: PdfLine[]): Uint8Array {
  const pageContents: string[][] = [];
  let current: string[] = [];
  let y = 790;

  const newPage = () => {
    if (current.length > 0) pageContents.push(current);
    current = [];
    y = 790;
  };

  for (const line of lines) {
    const maxLength = Math.max(28, Math.floor(94 * 10 / line.size));
    for (const chunk of wrapText(toAscii(line.text), maxLength)) {
      if (y < 70) newPage();
      const font = line.bold ? "F2" : "F1";
      current.push(
        `BT /${font} ${line.size} Tf 48 ${y} Td (${escapePdfText(chunk)}) Tj ET`,
      );
      y -= line.size + 4 + line.gap;
    }
  }
  newPage();

  const pageObjectNumbers: number[] = [];
  const contentObjectNumbers: number[] = [];
  let nextObject = 5;
  for (let i = 0; i < pageContents.length; i += 1) {
    pageObjectNumbers.push(nextObject);
    contentObjectNumbers.push(nextObject + 1);
    nextObject += 2;
  }

  const objects: string[] = [];
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = `<< /Type /Pages /Kids [${pageObjectNumbers
    .map((num) => `${num} 0 R`)
    .join(" ")}] /Count ${pageContents.length} >>`;
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

  pageContents.forEach((contentLines, index) => {
    const pageObject = pageObjectNumbers[index];
    const contentObject = contentObjectNumbers[index];
    const content = contentLines.join("\n");
    objects[pageObject] =
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] ` +
      `/Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObject} 0 R >>`;
    objects[contentObject] =
      `<< /Length ${byteLength(content)} >>\nstream\n${content}\nendstream`;
  });

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  for (let i = 1; i < objects.length; i += 1) {
    offsets[i] = byteLength(pdf);
    pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefOffset = byteLength(pdf);
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new TextEncoder().encode(pdf);
}

export function buildProductDatasheetPdf(
  product: Product,
  imageUrl?: string,
): Uint8Array {
  const lines: PdfLine[] = [];
  const add = (text: string, size = 10, bold = false, gap = 0) =>
    lines.push({ text, size, bold, gap });
  const section = (title: string) => {
    add("", 8, false, 4);
    add(title, 12, true, 2);
  };
  const row = (label: string, value: string) =>
    add(`${label}: ${value}`, 10, false, 1);

  add(siteInfo.name, 18, true, 2);
  add("Product datasheet generated from the website catalogue", 10, false, 6);
  add(product.name, 16, true, 3);
  row("Code", getProductCode(product));
  row("Category", getCategory(product.categorySlug)?.name ?? product.categorySlug);
  if (product.standard) row("Standard", product.standard);
  row("Price", product.priceOnRequest ? "On request" : formatPrice(product.price));

  section("Overview");
  add(product.description, 10, false, 2);

  if (product.definition) {
    section("Standard and figure");
    row("Standard", product.standard ?? "Not stated");
    row("Figure", product.figure ?? "Not stated");
    row("Probe code", product.probeCode ?? "Not stated");
    add(product.definition, 10, false, 2);
  }

  const summarySpecs = (product.specs ?? []).filter(
    (spec) => !["Brand", "Packaging Type", "Pack Type", "I Deal In"].includes(spec.label),
  );
  if (summarySpecs.length > 0) {
    section("Specifications");
    summarySpecs.forEach((spec) => row(spec.label, spec.value));
  }

  if (product.dimensions?.length) {
    section("Key dimensions");
    product.dimensions.forEach((dimension) =>
      row(
        dimension.parameter,
        `${dimension.value} (tolerance: ${dimension.tolerance})`,
      ),
    );
  }

  if (product.materials?.length) {
    section("Materials and finish");
    product.materials.forEach((material) => row(material.part, material.material));
    add(sharedProbeNote, 9, false, 2);
  }

  if (product.testForce || product.usedIn?.length || product.supplied) {
    section("Test conditions and supply");
    if (product.testForce) row("Test force", product.testForce);
    product.usedIn?.forEach((use) =>
      row(`${use.standard} ${use.clause}`, use.test),
    );
    if (product.supplied) row("Supplied with", product.supplied);
  }

  if (product.keyFeatures?.length) {
    section("Key features");
    product.keyFeatures.forEach((feature) => add(`${feature.title}: ${feature.text}`, 9, false, 1));
  }

  if (product.whatItDoes?.length) {
    section("Typical use");
    product.whatItDoes.forEach((item) => add(`${item.title}: ${item.text}`, 9, false, 1));
  }

  if (imageUrl) {
    section("Product photograph");
    add(imageUrl, 8, false, 2);
  }

  section("Contact and document note");
  add(`Email: ${siteInfo.email}`, 10, false, 1);
  add(`Telephone: ${siteInfo.phone}`, 10, false, 1);
  add(siteInfo.address.line1, 10, false, 0);
  add(siteInfo.address.line2, 10, false, 0);
  add(siteInfo.address.line3, 10, false, 2);
  add(
    "Confirm the applicable edition, clause and acceptance criteria in the current standard before testing.",
    9,
    false,
    2,
  );

  return buildPdf(lines);
}
