import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Random ID Generator, covering cookies, analytics, and advertising data practices.",
  alternates: {
    canonical: "https://randomid.app/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto prose prose-invert prose-orange">
          <h1 className="text-3xl font-light tracking-wide text-gray-100 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: September 20, 2026</p>

          <div className="space-y-8 text-gray-300 font-light leading-relaxed">
            <section>
              <h2 className="text-xl text-gray-100 font-normal mb-3">Overview</h2>
              <p>
                Random ID Generator (&quot;we&quot;, &quot;our&quot;, &quot;the site&quot;) provides free
                online tools for generating identifiers such as UUID, CUID, NanoID, ULID, and
                related formats. All identifier generation happens in your browser; we do not
                collect or store the values you generate.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-gray-100 font-normal mb-3">Information We Collect</h2>
              <p>
                We use third-party services that may collect limited technical information
                automatically when you visit the site:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Standard server logs (IP address, browser type, pages visited, referrer)</li>
                <li>Analytics data via Vercel Analytics and Google Tag Manager</li>
                <li>Cookies and similar technologies used for advertising via Google AdSense</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-gray-100 font-normal mb-3">Cookies and Advertising</h2>
              <p>
                This site displays ads served by Google AdSense. Google and its partners use
                cookies to serve ads based on your prior visits to this and other websites. You
                may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-orange-400 hover:text-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>{" "}
                or{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  className="text-orange-400 hover:text-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.aboutads.info/choices
                </a>
                .
              </p>
              <p className="mt-2">
                Third-party vendors, including Google, use cookies to serve ads based on your
                past visits to this website or other websites. You can learn more about how
                Google uses data at{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  className="text-orange-400 hover:text-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/technologies/partner-sites
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl text-gray-100 font-normal mb-3">Your Rights (GDPR / CCPA)</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or
                delete personal data collected about you, and to opt out of the sale or
                sharing of your data for advertising purposes. Contact us using the details
                below to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-gray-100 font-normal mb-3">Children&apos;s Privacy</h2>
              <p>
                This site is not directed at children under 13, and we do not knowingly
                collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-gray-100 font-normal mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Changes will be posted
                on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-gray-100 font-normal mb-3">Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:dev.pranitpatil@gmail.com"
                  className="text-orange-400 hover:text-orange-300"
                >
                  dev.pranitpatil@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
