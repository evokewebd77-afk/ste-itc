import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { siteInfo } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy of Standard Test Equipment, Mohali - what personal data our enquiry forms collect, why we use it and how to contact us about it.",
  path: "/privacy",
});

const sections: { heading: string; body: ReactNode }[] = [
  {
    heading: "1. Who we are",
    body: (
      <p>
        This website is run by {siteInfo.name} (“we”, “us”), a manufacturer and
        supplier of testing instruments based at {siteInfo.address.line1}{" "}
        {siteInfo.address.line2} {siteInfo.address.line3}. This policy explains
        what personal data we collect through this website and how we use it.
      </p>
    ),
  },
  {
    heading: "2. What we collect",
    body: (
      <>
        <p>We only collect the details you choose to send us:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Through our contact and product enquiry forms: your name, email
            address, phone number, the product or category you are asking about,
            quantity, and your message.
          </li>
          <li>
            When you call, email or message us on WhatsApp: your phone number or
            email address and what you tell us.
          </li>
        </ul>
        <p className="mt-3">
          We do not ask for payment details on this website, and you do not need
          an account to use it.
        </p>
      </>
    ),
  },
  {
    heading: "3. Why we use it",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>To reply to your enquiry and send you a quotation.</li>
        <li>To process, deliver and support orders you place with us.</li>
        <li>To keep records required by Indian tax and accounting law.</li>
      </ul>
    ),
  },
  {
    heading: "4. Who we share it with",
    body: (
      <>
        <p>
          We do not sell or rent your personal data. We share it only where
          needed to deal with your enquiry or order:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Service providers that run this website and our email and form
            tools, which store the data on our behalf.
          </li>
          <li>Courier and logistics partners, to deliver your order.</li>
          <li>Authorities, where the law requires us to.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Cookies",
    body: (
      <p>
        This website does not use advertising or tracking cookies. Our hosting
        provider may keep standard technical logs (such as IP address and
        browser type) to keep the site secure and working.
      </p>
    ),
  },
  {
    heading: "6. How long we keep it",
    body: (
      <p>
        We keep enquiry details for as long as needed to answer your enquiry
        and follow up on it, and order records for as long as Indian law
        requires. After that we delete them securely.
      </p>
    ),
  },
  {
    heading: "7. Your choices",
    body: (
      <p>
        You can ask us to show you, correct or delete the personal data we hold
        about you, or to stop contacting you, by writing to us at the email
        address below. We will reply within a reasonable time, in line with the
        Digital Personal Data Protection Act, 2023 and other applicable Indian
        law.
      </p>
    ),
  },
  {
    heading: "8. Security",
    body: (
      <p>
        We take reasonable steps to protect your data and limit access to the
        people who need it. No method of sending data over the internet is
        completely secure.
      </p>
    ),
  },
  {
    heading: "9. Contact us",
    body: (
      <p>
        For any question about this policy or your personal data, email{" "}
        <a href={`mailto:${siteInfo.email}`} className="font-semibold text-brand-700 underline">
          {siteInfo.email}
        </a>{" "}
        or call{" "}
        <a href={`tel:${siteInfo.phoneHref}`} className="font-semibold text-brand-700 underline">
          {siteInfo.phone}
        </a>
        .
      </p>
    ),
  },
  {
    heading: "10. Changes to this policy",
    body: (
      <p>
        If we change this policy we will post the new version on this page.
        This policy was last updated in November 2026.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" crumb="Privacy Policy">
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs">
        <article className="space-y-8 text-slate-700 text-sm sm:text-base">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-brand-800">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed">{section.body}</div>
            </section>
          ))}
        </article>
      </div>
    </PageShell>
  );
}
