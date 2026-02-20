import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Klusta",
  description: "Terms of service for using Klusta shortlet platform in Nigeria.",
};

export default function TermsPage() {
  return (
    <PageLayout title="Terms of Service">
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10 text-text-muted leading-relaxed">
        <p className="text-lg">
          Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using Klusta&apos;s platform, website, or services (the &quot;Services&quot;), you agree to be bound by these Terms of Service. Klusta provides a marketplace that connects guests seeking short-term rentals (shortlets) with hosts who list properties in Nigeria. If you do not agree to these terms, you may not use our Services.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">2. Eligibility</h2>
          <p>
            You must be at least 18 years old and able to enter into binding contracts to use Klusta. By using the platform, you represent that you meet these requirements and that all information you provide is accurate and current.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">3. Account and Listings</h2>
          <p className="mb-3">
            You may register as a guest, a host, or both. As a host, you are responsible for the accuracy of your property listings, compliance with local laws (including shortlet and rental regulations in your area), and the condition and safety of your property. As a guest, you are responsible for treating listed properties with care and following the host&apos;s rules and check-in/check-out instructions.
          </p>
          <p>
            Klusta reserves the right to remove listings or suspend accounts that violate our policies or applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">4. Bookings, Payments, and Cancellations</h2>
          <p>
            Bookings are subject to the terms agreed between you and the host, including price, dates, and cancellation policy. Payments may be processed through Klusta or designated payment partners. Cancellation and refund terms are set by the host and displayed at the time of booking. Disputes regarding payments or cancellations should be reported to us; we may facilitate resolution but are not responsible for host or guest conduct.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">5. Prohibited Conduct</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Services for any illegal or fraudulent purpose.</li>
            <li>Misrepresent your identity, property, or booking details.</li>
            <li>Harass, discriminate against, or harm other users or Klusta staff.</li>
            <li>Circumvent Klusta&apos;s booking or payment systems.</li>
            <li>Scrape, copy, or misuse Klusta&apos;s content or data without permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">6. Disclaimers</h2>
          <p>
            Klusta acts as an intermediary between guests and hosts. We do not own, manage, or control listed properties. We are not liable for the conduct of users, the condition of properties, or any loss or damage arising from your use of the platform or stays at shortlets, except where required by law.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Klusta and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services. Our total liability for any claim related to the Services shall not exceed the amount you paid to Klusta in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">8. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Continued use of the Services after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">9. Contact</h2>
          <p>
            For questions about these Terms, please contact us via our <a href="/contact" className="text-accent hover:underline">Contact</a> page.
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
