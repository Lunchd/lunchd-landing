import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Lunchd",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20">
      <div className="max-w-3xl mx-auto text-espresso">
        <h1 className="text-4xl md:text-5xl font-semibold mb-3">Privacy Policy</h1>
        <p className="text-sm text-espresso/60 mb-10">Last Updated: 30th September 2025</p>

        <div className="space-y-8 text-base leading-relaxed">
          <p>
            This Privacy Policy explains how APT53 Ltd., the owner of the Lunchd platform
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), collects, uses, and protects
            your personal information when you use our website, app, or participate in testing.
          </p>
          <p>By using Lunchd, you agree to the practices described below.</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Who We Are</h2>
            <p>
              Lunchd is a lunch-based social meetup platform owned and operated by APT53 Ltd., a
              company registered in the United Kingdom.
            </p>
            <p>Questions? Contact:</p>
            <p>
              Email:{" "}
              <a href="mailto:Lorenzo@lunchd.uk" className="text-brand hover:underline">
                Lorenzo@lunchd.uk
              </a>
            </p>
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
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. What Data We Collect</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">a. Waitlist Signups</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email address</li>
                <li>Submission timestamp</li>
              </ul>
              <p>
                These are stored in a PostgreSQL database managed by Supabase, not in Google
                Sheets. Row Level Security (RLS) ensures that only authorized operations are
                allowed. Data is encrypted at rest and transmitted over secure channels.
                Confirmation emails are sent via Resend.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">b. App Usage (when accounts launch)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email address and login credentials (passwords securely hashed)</li>
                <li>Name, gender, occupation, and interests (optional)</li>
                <li>Lunch availability and time preferences</li>
                <li>
                  Approximate location data (used for group matching and verifying attendance at
                  partner restaurants - never shared publicly)
                </li>
                <li>Profile views, group joins, and lunch confirmations</li>
                <li>Optional feedback and ratings</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">c. If You Contact Us</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email address</li>
                <li>Message content</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Why We Collect Your Data</h2>
            <p>We process your data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Operate the waitlist and Lunchd platform</li>
              <li>Provide confirmation emails and your waitlist position</li>
              <li>Match you with nearby users and restaurants</li>
              <li>Facilitate group creation, reminders, and rewards</li>
              <li>Track participation during beta testing</li>
              <li>Analyze engagement and improve our services</li>
              <li>Ensure in-person safety (e.g., location verification at partner restaurants)</li>
              <li>Respond to support requests</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Legal Basis (UK GDPR)</h2>
            <p>We process your personal data using the following lawful bases:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Consent (e.g. for waitlist signup or receiving updates)</li>
              <li>Legitimate interest (e.g. improving product, ensuring group reliability)</li>
              <li>Performance of a contract (e.g. providing the service you requested)</li>
              <li>Legal obligation, where applicable</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Who We Share Data With</h2>
            <p>We do not sell your data.</p>
            <p>We may share data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Service providers (e.g., Supabase for database hosting, Resend for transactional
                email) who process data on our behalf under strict confidentiality terms
              </li>
              <li>Authorities or regulators, if legally required</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. How We Store and Protect Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Waitlist data is stored in Supabase (PostgreSQL) with Row Level Security (RLS)
                enabled
              </li>
              <li>App data is stored in secure cloud infrastructure managed by Supabase</li>
              <li>Passwords are hashed (never stored in plain text)</li>
              <li>Emails are sent securely through Resend</li>
              <li>
                We use access controls, encryption in transit, and industry best practices for
                account security
              </li>
              <li>
                No system is 100% secure; users are responsible for safeguarding their own devices
                and credentials
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. How Long We Keep Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Waitlist data is retained until you request removal or until Lunchd exits beta</li>
              <li>
                App data is retained for the duration of your account, or as long as required for
                legal, operational, or security purposes
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Your Rights Under UK GDPR</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to your data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Object to or restrict processing</li>
              <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO)</li>
            </ul>
            <p>
              To make a request, email:{" "}
              <a href="mailto:Lorenzo@lunchd.uk" className="text-brand hover:underline">
                Lorenzo@lunchd.uk
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Cookies and Analytics</h2>
            <p>
              We do not currently use cookies or web tracking on the public site. If this changes,
              we will update this section and ask for your consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Children</h2>
            <p>
              Lunchd is not intended for use by individuals under 18. We do not knowingly collect
              data from children.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Updates</h2>
            <p>
              We may revise this policy to reflect new legal or operational needs. We will update
              the &quot;Last Updated&quot; date and notify users where required.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">12. Contact</h2>
            <p>
              <strong>APT53 Ltd.</strong>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:Lorenzo@lunchd.uk" className="text-brand hover:underline">
                Lorenzo@lunchd.uk
              </a>
            </p>
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
          </section>
        </div>
      </div>
    </main>
  );
}
