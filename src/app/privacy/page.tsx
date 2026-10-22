import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy of Standard Test Equipment - how we collect, use, disclose and protect your personal data.",
};

const rights = [
  {
    heading: "Access",
    body: "You have the right to receive a copy of your personal data that we hold about you and information about how we use it, subject to certain exemptions.",
  },
  {
    heading: "Rectification",
    body: "You have the right to ask us to correct your personal data that we hold where it is incorrect or incomplete.",
  },
  {
    heading: "Erasure",
    body: "You have the right to ask that your personal data be deleted in certain circumstances - for example, where your personal data is no longer necessary in relation to the purposes for which it was collected, if you withdraw your consent, if we have used your personal data unlawfully, or if your personal data needs to be erased to comply with a legal obligation.",
  },
  {
    heading: "Processing restrictions",
    body: "You have the right to suspend our use of your personal data in certain circumstances - for example, where you think your personal data is inaccurate, where the use of your personal data is unlawful and you oppose the erasure and request suspension instead, or where we no longer need your personal data but it is required by you for legal claims.",
  },
  {
    heading: "Data portability",
    body: "You have the right to obtain your personal data in a structured, commonly used and machine-readable format and for it to be transferred to another organization, where it is technically feasible.",
  },
  {
    heading: "Right to object",
    body: "You have the right to object to the use of your personal data (including to object to direct marketing, automated decision making and profiling) where you have grounds relating to your particular situation and we use your personal data for legitimate interests.",
  },
  {
    heading: "Right to Withdraw Consent",
    body: "You have the right to withdraw your consent, to one or more forms of processing, at any time where we rely on consent to use your personal data. This will not affect the lawfulness of any processing carried out before you withdraw your consent.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" crumb="Privacy Policy">
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs">
        <article className="space-y-8 text-slate-700 text-sm sm:text-base">
        <section>
          <h2 className="text-lg font-bold text-brand-800">General</h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            <p>
              In this Privacy Policy references to “Standard Test Equipment”,
              “our” and “we” mean Standard Test Equipment, a company
              incorporated and registered in India, whose registered office is
              in Panchkula. We are part of a group of companies (the “Standard
              Test Equipment group”) and we operate globally from our
              registered office address. We are the controller of your
              personal data.
            </p>
            <p>
              References to “you” or “your” means any individual whose personal
              data we process in connection with the users of this website and
              provision of the Standard Test Equipment Platform and includes
              individuals employed by our members and affiliate audit companies
              and individuals whose personal data is processed in connection
              with the provision of information to members.
            </p>
            <p>
              This Privacy Policy (together with any other documents referred
              to on it) sets out the basis on which we collect and use
              personal data about you. It describes in detail who is
              responsible for the personal data that we collect about you, the
              nature of the personal data we collect and how we will use it.
              We will also set out who we disclose it to and your rights and
              choices in relation to your personal data.
            </p>
            <p>
              In this Privacy Policy where we use the words personal data we
              use these words to describe information that is about you and
              which identifies you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            1. The personal data that we process tends to consist of:
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>Name and E-mail details of individuals who use our website</li>
            <li>Sales data of the clients</li>
            <li>Product data and their initial raw material details</li>
            <li>Product quantity data and their packaging weight data</li>
          </ul>
          <div className="mt-4 space-y-4 leading-relaxed">
            <p>
              You may submit your personal data to us directly, or indirectly
              via Standard Test Equipment platform that you are employed or
              engaged by or otherwise in connection with our services.
            </p>
            <p>
              Standard Test Equipment is committed to protecting your privacy.
              Standard Test Equipment uses any personal data of yours or your
              organization submit to us in accordance with this policy.
            </p>
            <p>
              This Privacy Policy is intended to satisfy our obligations to
              tell you about how we use your personal data in accordance with
              data protection legislation.
            </p>
            <p>
              You have the right to object to our use of your personal
              information in certain circumstances. Please see the “What are
              your data protection rights?” section below for a summary of
              your right to object and the details of who to contact if you
              want to exercise them.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            2. Who can you contact for privacy questions or concerns?
          </h2>
          <p className="mt-3 leading-relaxed">
            We have appointed a Data Protection Officer whose role in relation
            to data protection includes informing and advising us and those of
            our employees who are involved in processing personal data of
            their obligations under data protection legislation.
          </p>
          <p className="mt-3 leading-relaxed">
            If you have questions, comments or complaints about this Privacy
            Policy or how we handle personal data, please direct your
            correspondence to the Data Protection Officer at: sust.future01@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            3. How do we collect personal data?
          </h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            <p>
              <strong className="text-slate-800">Directly:</strong> We obtain
              personal data directly from individuals in a variety of ways,
              including obtaining personal data from individuals who provide us
              their information on Standard Test Equipment portal, complete our
              online forms, subscribe to our newsletters and preference center,
              register for webinars, attend meetings or events we host, visit
              our offices or apply for open roles. We may also obtain personal
              data directly when, for example, we are establishing a business
              relationship, or through our hosted software applications.
            </p>
            <p>
              <strong className="text-slate-800">Indirectly:</strong> We obtain
              personal data indirectly about individuals from a variety of
              sources, including recruitment services and our Members. We may
              attach personal data to our customer relationship management
              records to better understand and serve our Members, subscribers
              and individuals, satisfy a legal obligation, or pursue our
              legitimate interests. This personal data includes names and email
              details of those individuals.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            4. What categories of personal data do we collect?
          </h2>
          <p className="mt-3 leading-relaxed">
            We may obtain, and then use, personal data about individuals through
            their direct interactions with us, or from information provided
            through Standard Test Equipment portal, from applicants, our
            suppliers and through other situations including those described in
            this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            5. How do we process your personal data?
          </h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            <p>
              Under data protection legislation we can only use your personal
              data if we have a proper reason to do so (this is also known as a
              legal basis). You have the right to object to our use of your
              personal information at any time.
            </p>
            <p>We may rely on the following lawful reasons:</p>
            <p>
              <strong className="text-slate-800">Contract:</strong> We may
              process personal data in order to perform our contractual
              obligations where we have a contract with an individual.
            </p>
            <p>
              <strong className="text-slate-800">Consent:</strong> We may rely
              on your freely given consent at the time you provided your
              personal data to us.
            </p>
            <p>
              <strong className="text-slate-800">
                Legitimate interests:
              </strong>{" "}
              We may rely on legitimate interests based on our evaluation that
              the processing is fair, reasonable and balanced. These include
              delivering services to our Members, direct marketing, compliance
              with applicable legal and regulatory obligations, improvement and
              development of our business operations, protection of our
              business, shareholders, employees and customers, and analyzing
              competition in the market for our services.
            </p>
            <p>
              <strong className="text-slate-800">
                Legal obligations and public interests:
              </strong>{" "}
              We may process personal data in order to meet regulatory and
              public interest obligations or mandates.
            </p>
            <p>
              Where we process your personal data on the legal basis of our
              legitimate interests, we have carefully considered and assessed
              your rights and freedoms which require protection of your
              personal data in respect of each specific purpose.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            6. Why do we need personal data?
          </h2>
          <p className="mt-3 leading-relaxed">
            It&apos;s important to us that we are transparent when we collect
            and use personal data, and that we tell you why we need it and more
            specifically the purposes for which we process it. These typically
            include:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>
              Providing professional advice and delivering reports related to
              our professional services
            </li>
            <li>
              Providing the accurate recycled data after taking the quantity
              and the net amount of information from the customers
            </li>
            <li>
              Promoting our professional services, products and capabilities to
              existing and prospective Members
            </li>
            <li>
              Sending invitations and providing access to guests attending our
              events and webinars or our sponsored events
            </li>
            <li>
              Administering, maintaining and ensuring the security of our
              information systems, applications and websites
            </li>
            <li>Authenticating registered users to certain areas of our sites</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            7. Do we share personal data with third parties?
          </h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            <p>
              We may occasionally share personal data with trusted third
              parties for the purposes set out above. These recipients are
              contractually bound to safeguard the data we entrust to them. We
              may engage with several or all of the following categories of
              recipients:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Parties that support us as we provide our services (e.g.
                providers of telecommunication systems, mailroom support, IT
                system support, archiving services, document production
                services and cloud-based software services)
              </li>
              <li>Payment services providers</li>
              <li>Marketing services provider</li>
            </ul>
            <p>
              We may share your personal data with other third parties, for
              example in the event that we sell or buy any business or assets,
              if we or substantially all of our assets are acquired by a third
              party, or if we are under a duty to disclose or share your
              personal data in order to comply with any legal obligation, or in
              order to enforce or apply our legal rights under any contract we
              have with you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            8. Do we use cookies?
          </h2>
          <p className="mt-3 leading-relaxed">
            Our website does use cookies. Where cookies are used, a statement
            will be sent to your browser explaining the use of cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            9. What are your data protection rights?
          </h2>
          <p className="mt-3 leading-relaxed">
            You have certain rights with respect to your personal data. The
            rights will only apply in certain circumstances and are subject to
            certain exemptions.
          </p>
          <div className="mt-4 space-y-4">
            {rights.map((right) => (
              <div key={right.heading}>
                <h3 className="font-semibold text-slate-800">
                  {right.heading}:
                </h3>
                <p className="mt-1 leading-relaxed">{right.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 leading-relaxed">
            We may need to request specific information from you to help us
            confirm your identity and ensure your right to access the
            information or to exercise any of your other rights. No fee is
            required to make a request unless your request is clearly unfounded
            or excessive.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            10. What about personal data security?
          </h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            <p>
              We have put appropriate technical and organizational security
              policies and procedures in place to protect personal data
              (including sensitive personal data) from loss, misuse, alteration
              or destruction. We aim to ensure that access to your personal
              data is limited only to those who need to access it.
            </p>
            <p>
              If you have access to parts of our website or use our services,
              you remain responsible for keeping your user ID and password
              confidential. Please be aware that the transmission of data via
              the internet is not completely secure, and any transmission is at
              your own risk.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            11. How long do we retain personal data?
          </h2>
          <p className="mt-3 leading-relaxed">
            We retain personal data to provide our services, stay in contact
            with you and to comply with applicable laws, regulations and
            professional obligations that we are subject to. Unless a different
            time frame applies as a result of business need or specific legal,
            regulatory or contractual requirements, we retain personal data for
            two years. We will dispose of personal data in a secure manner when
            we no longer need it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-800">
            12. Do we change this privacy policy?
          </h2>
          <p className="mt-3 leading-relaxed">
            We regularly review this Privacy Policy and will post any updates
            to it on this webpage. Where appropriate, we will give you
            reasonable advanced notice of any changes.
          </p>
          <p className="mt-4 font-medium text-slate-800">
            This Privacy Policy was last updated March 2023
          </p>
        </section>
      </article>
      </div>
    </PageShell>
  );
}
