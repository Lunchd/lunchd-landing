import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Lunchd",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20">
      <div className="max-w-3xl mx-auto text-espresso">
        <h1 className="text-4xl md:text-5xl font-semibold mb-3">Terms of Service</h1>
        <p className="text-sm text-espresso/60 mb-10">Last Updated: 30th September 2025</p>

        <div className="space-y-8 text-base leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Lunchd website,
            mobile application, and related services (&quot;Lunchd&quot;), operated by APT53 Ltd.,
            a company registered in the United Kingdom and the legal owner of the Lunchd brand.
          </p>
          <p>
            By accessing or using Lunchd, you agree to be bound by these Terms and our Privacy
            Policy. If you do not agree, do not use Lunchd.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. About Lunchd and APT53 Ltd.</h2>
            <p>
              Lunchd is a mobile-first platform that helps users discover lunch meetups with
              others nearby, often hosted at participating restaurants. The platform is developed
              and operated by APT53 Ltd., which owns all Lunchd branding, trademarks, and user
              data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use Lunchd. By using the platform, you confirm
              that you meet this age requirement and are legally permitted to agree to these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Beta Disclaimer</h2>
            <p>
              Lunchd is currently in beta. Features and functionality may change, be interrupted,
              or removed at any time without notice. As a beta user, you understand that the
              platform may not be fully stable or feature-complete and that your usage helps us
              improve the product. Your feedback is appreciated but not contractually required.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Keeping your login credentials secure.</li>
              <li>All activity under your account.</li>
              <li>Using Lunchd respectfully, legally, and in line with these Terms.</li>
            </ul>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use Lunchd for unlawful, harassing, discriminatory, or inappropriate behavior.</li>
              <li>Submit false, misleading, or impersonated information.</li>
              <li>
                Interfere with the operation of Lunchd or attempt to access restricted areas of
                the platform.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Safety &amp; Community Conduct</h2>
            <p>
              Lunchd is built to foster respectful, inclusive, and safe in-person social
              experiences.
            </p>
            <p>You agree not to engage in:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Harassment, intimidation, or unsafe conduct during meetups.</li>
              <li>
                Hate speech or discrimination based on race, gender, orientation, religion, or
                background.
              </li>
              <li>Any behavior that could reasonably cause discomfort or harm to other users.</li>
            </ul>
            <p>
              APT53 Ltd. reserves the right to suspend or terminate your access to Lunchd if you
              violate these standards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Restaurant Partners</h2>
            <p>
              Lunchd facilitates connections between users and participating restaurants. However,
              APT53 Ltd. is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Food quality or availability.</li>
              <li>Service provided by third-party venues.</li>
              <li>
                Any loss, injury, or incident that occurs at or in connection with a restaurant.
              </li>
            </ul>
            <p>Offers and discounts are subject to availability and may change without notice.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Premium Membership &amp; Promotions</h2>
            <p>
              Lunchd may offer optional paid memberships that unlock benefits such as restaurant
              discounts or loyalty rewards. These features may evolve during the beta period. We
              reserve the right to modify or discontinue any promotional feature at our discretion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Data and Privacy</h2>
            <p>
              Data collected: At this stage we only collect your email address when you join the
              waitlist. Once accounts launch, we may also collect limited profile details (e.g.,
              name, interests, lunch availability) needed to deliver the service.
            </p>
            <p>
              Storage: All data is stored in a PostgreSQL database managed by Supabase, with Row
              Level Security (RLS) enabled to prevent unauthorized access.
            </p>
            <p>
              Security: Emails and personal data are encrypted at rest and transmitted over secure
              channels.
            </p>
            <p>Access control:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Anyone can insert their email to join the waitlist.</li>
              <li>There is no public read access to waitlist data.</li>
              <li>No update or delete actions are permitted by external users.</li>
            </ul>
            <p>
              Email delivery: Confirmation and waitlist emails are sent through Resend, using our
              branded templates.
            </p>
            <p>
              Use of data: Your data is used only to manage your waitlist position, send
              confirmation/welcome emails, and keep you updated about Lunchd&apos;s progress.
            </p>
            <p>No resale: We do not sell, rent, or publicly share your personal data.</p>
            <p>
              Compliance: Lunchd complies with UK GDPR, the Data Protection Act 2018, and Apple
              App Store data handling requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Intellectual Property</h2>
            <p>
              All content, logos, software, and trademarks associated with Lunchd are owned by
              APT53 Ltd. or its licensors.
            </p>
            <p>
              You may not copy, reproduce, modify, distribute, or reverse-engineer any part of
              Lunchd without prior written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Feedback and Submissions</h2>
            <p>
              Any feedback, suggestions, or ideas you submit to Lunchd may be used by APT53 Ltd.
              for any purpose without compensation.
            </p>
            <p>
              You grant APT53 Ltd. a perpetual, worldwide, royalty-free license to use, modify,
              and distribute such content for product development, marketing, or other business
              purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Disclaimers and Limitation of Liability</h2>
            <p>
              Lunchd is provided &quot;as is,&quot; without warranties of any kind, express or
              implied.
            </p>
            <p>
              To the fullest extent permitted by law, APT53 Ltd. disclaims any liability for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Damages resulting from your use of or inability to use the service.</li>
              <li>Personal outcomes of any in-person interactions arranged via Lunchd.</li>
              <li>Conduct of other users or third-party venues.</li>
            </ul>
            <p>
              APT53 Ltd.&apos;s total liability, if any, shall be limited to the amount you paid
              (if any) to use the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">12. Modifications to These Terms</h2>
            <p>We may update these Terms at any time.</p>
            <p>
              When we do, we will revise the &quot;Last Updated&quot; date above and, if
              appropriate, notify users. Continued use of Lunchd after such updates means you
              accept the revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">13. Governing Law</h2>
            <p>
              These Terms are governed by and interpreted in accordance with the laws of England
              and Wales.
            </p>
            <p>
              Any disputes shall be subject to the exclusive jurisdiction of the courts of London,
              UK.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">14. Contact</h2>
            <p>For any questions or concerns, please contact:</p>
            <p>
              <strong>APT53 Ltd.</strong>
            </p>
            <p>Owner of the Lunchd platform</p>
            <p>
              Website:{" "}
              <a
                href="https://lunchd.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                https://lunchd.uk
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:Lorenzo@lunchd.uk" className="text-brand hover:underline">
                Lorenzo@lunchd.uk
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
