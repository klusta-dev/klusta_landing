import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Contact Us — Klusta",
  description: "Get in touch with Klusta for shortlet bookings and host support in Nigeria.",
};

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12">
        <p className="text-text-muted text-lg leading-relaxed mb-10">
          Have a question about shortlets, your listing, or your booking? We&apos;d love to hear from you. Reach out using the options below.
        </p>

        <div className="space-y-8">
          <section className="p-6 rounded-2xl border border-gray-100 bg-beige-light/50">
            <h2 className="font-sans font-semibold text-text-dark text-lg mb-2">General inquiries</h2>
            <p className="text-text-muted mb-2">
              For general questions about Klusta, how to list your property, or how to book a shortlet.
            </p>
            <a
              href="mailto:hello@klusta.ng"
              className="text-accent font-medium hover:underline"
            >
              hello@klusta.ng
            </a>
          </section>

          <section className="p-6 rounded-2xl border border-gray-100 bg-beige-light/50">
            <h2 className="font-sans font-semibold text-text-dark text-lg mb-2">Support</h2>
            <p className="text-text-muted mb-2">
              For help with an active booking, payment issues, or account problems.
            </p>
            <a
              href="mailto:support@klusta.ng"
              className="text-accent font-medium hover:underline"
            >
              support@klusta.ng
            </a>
          </section>

          <section className="p-6 rounded-2xl border border-gray-100 bg-beige-light/50">
            <h2 className="font-sans font-semibold text-text-dark text-lg mb-2">Partnerships &amp; business</h2>
            <p className="text-text-muted mb-2">
              For partnership opportunities, bulk listings, or business enquiries.
            </p>
            <a
              href="mailto:partners@klusta.ng"
              className="text-accent font-medium hover:underline"
            >
              partners@klusta.ng
            </a>
          </section>
        </div>

        <p className="mt-12 text-text-muted text-sm">
          We aim to respond within 24–48 hours. For urgent matters related to an ongoing stay, please mention your booking reference in the subject line.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
