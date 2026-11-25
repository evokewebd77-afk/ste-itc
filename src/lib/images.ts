const CLOUDINARY_UPLOAD = "/image/upload/";

export function optimizedImageUrl(src: string): string {
  if (!src.startsWith("http") || !src.includes(CLOUDINARY_UPLOAD)) return src;
  return src.replace(
    CLOUDINARY_UPLOAD,
    `${CLOUDINARY_UPLOAD}w_1200,h_1200,c_fill,g_center,q_auto:good,f_webp/`,
  );
}

export function optimizedBannerUrl(src: string): string {
  if (!src.startsWith("http") || !src.includes(CLOUDINARY_UPLOAD)) return src;
  return src.replace(
    CLOUDINARY_UPLOAD,
    `${CLOUDINARY_UPLOAD}w_1400,q_auto:good,f_webp/`,
  );
}

export const categoryImages: Record<string, { src: string; alt: string }> = {
  "test-probes-and-test-pins": {
    src: "https://res.cloudinary.com/didtfhfme/image/upload/v1791786934/iec-60529-and-61032-ip-2x-test-finger-test-probe-500x500-330x409_qnykvj.jpg",
    alt: "Stainless steel IP2X articulated test finger with insulated handle",
  },
  "emi-shielding-material": {
    src: "https://res.cloudinary.com/didtfhfme/image/upload/v1791782545/aluminium-tape-330x409_yzi5xx.jpg",
    alt: "Roll of aluminium shielding tape supplied by Standard Test Equipment",
  },
  "testing-apparatus-luminary-test": {
    src: "https://res.cloudinary.com/didtfhfme/image/upload/v1791785205/32-330x409_jgdh2a.jpg",
    alt: "GL Spectis photometric measurement system for luminaire testing",
  },
  "spring-hammer-test-apparatus": {
    src: "https://res.cloudinary.com/didtfhfme/image/upload/v1791784480/0-2-j-1-j-spring-hammer-test-apparatus-500x500-330x409_yi7olu.jpg",
    alt: "Spring impact hammer apparatus with interchangeable energy springs",
  },
  "ip-test-apparatus": {
    src: "https://res.cloudinary.com/didtfhfme/image/upload/v1791783863/rain-test-chamber-330x409_u2dpxq.jpg",
    alt: "IPX1 and IPX2 rain test chamber with drip tray and sample platform",
  },
  "laboratory-test-apparatus": {
    src: "https://res.cloudinary.com/didtfhfme/image/upload/v1794547250/ball-pressure-test-apparatus-500x500-330x409_n1ikxa.png",
    alt: "Ball pressure test apparatus with loading weight and specimen holder",
  },
};

const imageAltOverrides: Record<string, string> = {
  "ip1x-test-probe-a-50-mm-sphere-as-per-iec-60529-and-61032":
    "IP1X Test Probe A: stainless steel 50 mm sphere mounted on an insulating handle",
  "white-ip-2x-test-finger-test-probe-b-as-per-iec-60529-and-61032":
    "IP2X Test Probe B: white jointed test finger with two 90 degree joints and a round stop face",
  "white-stainless-steel-ip3x-test-probe-c-as-per-iec-60529-and-61032":
    "IP3X Test Probe C: stainless steel 2.5 mm rod with a 35 mm stop sphere and insulated handle",
  "ip4x-test-probe-d-as-per-iec-60529-and-61032":
    "IP4X Test Probe D: 1 mm stainless steel test wire with a 35 mm stop sphere",
  "test-probe-11-as-per-iec-61032":
    "Test Probe 11: rigid 12 mm steel test finger with a 50 mm circular stop",
  "test-probe-12-as-per-iec-61032":
    "Test Probe 12: long 4 mm steel pin on a brown insulating handle with a 25 mm guard",
  "test-probe-13-short-test-pin-as-per-iec-61032":
    "Test Probe 13: short conical steel pin on a brown insulating handle with a 25 mm guard",
  "test-probe-14-as-per-iec-61032":
    "Test Probe 14: flat 3 mm by 1 mm steel test bar with an insulated handle",
  "test-probe-17-as-per-iec-61032":
    "Test Probe 17: 0.5 mm test wire mounted in an insulating handle",
  "test-probe-31-as-per-iec-61032":
    "Test Probe 31: steel test cone with a 25 mm shaft and a 110 mm rear baffle",
  "test-probe-32-as-per-iec-61032":
    "Test Probe 32: 25 mm steel rod with a stop baffle for fan guard testing",
  "test-probe-41-as-per-iec-61032":
    "Test Probe 41: white cylindrical body with a steel conical tip for hot part testing",
  "test-probe-43-as-per-iec-61032":
    "Test Probe 43: flat steel test bar with a white insulated handle",
  "test-probe-with-round-end-as-per-iec-60529":
    "Round-end stainless steel access probe with a smooth polished tip",
  "ball-pressure-test-apparatus":
    "Ball pressure test apparatus with steel ball, loading weight and specimen holder",
  "spring-hammer-test-apparatus-as-per-iec-60068-2-75":
    "Spring impact hammer apparatus with interchangeable energy springs",
  "universal-spring-hammer-0-14-1-joule-as-per-iec-60068-2-75":
    "Universal spring hammer in its case with adjustable 0.14 to 1 joule impact setting",
  "rain-test-chamber-ip-x1-x2-as-per-iec-60529":
    "IPX1/IPX2 rain test chamber with drip tray and tiltable specimen platform",
  "sand-and-dust-chamber-as-per-iec-60529":
    "Sand and dust ingress test chamber with viewing window and specimen chamber",
  "stainless-steel-ipx7-ipx8-immersion-water-tank-as-per-iec-60529":
    "Stainless steel IPX7/IPX8 immersion tank filled with water for enclosure testing",
  "turn-table-for-ip-testing-for-laboratory":
    "Stainless steel IP test turntable with rotating specimen platform",
  "dielectric-strength-tester-as-per-iec-62368":
    "Dielectric strength test fixture with metal electrode and adjustable specimen gap",
  "salt-spray-test-chamber":
    "Salt spray corrosion test chamber with inner specimen rack and solution reservoir",
};

export function productImageAlt(
  slug: string,
  name: string,
  categorySlug?: string,
): string {
  const override = imageAltOverrides[slug];
  if (override) return override;
  if (categorySlug === "emi-shielding-material") {
    return `${name}: close view of the supplied shielding material and its packaging`;
  }
  return `Photograph of the Standard Test Equipment ${name}`;
}
