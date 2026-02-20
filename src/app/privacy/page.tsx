import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Klusta",
  description: "Klusta privacy policy for shortlet bookings and property listings in Nigeria.",
};

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10 text-text-muted leading-relaxed">
        <p className="text-lg">
          Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">1. Introduction</h2>
          <p>
            Klusta (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates a platform that connects guests with short-term rental properties (shortlets) across Nigeria. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, or services. By using Klusta, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">2. Information We Collect</h2>
          <p className="mb-3">We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text-dark">Account information:</strong> name, email address, phone number, and profile details when you register as a guest or host.</li>
            <li><strong className="text-text-dark">Property and booking information:</strong> listing details, check-in/check-out dates, payment information, and messages between guests and hosts.</li>
            <li><strong className="text-text-dark">Usage data:</strong> how you use our platform, including searches, views, and device information.</li>
            <li><strong className="text-text-dark">Location data:</strong> with your permission, we may collect location data to show relevant shortlets and improve your experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">3. How We Use Your Information</h2>
          <p>
            We use your information to operate the Klusta platform, process bookings and payments, communicate with you, improve our services, prevent fraud, and comply with applicable laws. We may also use aggregated, non-personal data for analytics and to improve the shortlet experience across Nigeria.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">4. Sharing of Information</h2>
          <p>
            We may share your information with hosts or guests as needed to complete a booking, with payment and identity verification partners, and with law enforcement when required by law. We do not sell your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">5. Data Security and Retention</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data. We retain your information for as long as your account is active or as needed to provide services, resolve disputes, and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or port your personal data, or to object to or restrict certain processing. You can manage your account and preferences in your Klusta profile or contact us at the details provided below.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-3">7. Contact Us</h2>
          <p>
            For privacy-related questions or requests, contact us at{" "}
            <a href="/contact" className="text-accent hover:underline">Klusta Contact</a> or via the contact details on our website.
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
