import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "About — Klusta",
  description: "Learn about Klusta — Nigeria's trusted shortlet marketplace focused on safety, transparency, and fairness.",
};

const team = [
  {
    name: "Team Member One",
    role: "Co‑founder / Product",
    bio: "Focused on product and user experience for guests and hosts.",
  },
  {
    name: "Team Member Two",
    role: "Co‑founder / Engineering",
    bio: "Builds the platform that powers shortlet discovery and bookings.",
  },
  {
    name: "Team Member Three",
    role: "Growth & Operations",
    bio: "Drives growth and day-to-day operations across Nigeria.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout title="About Klusta">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-14">
        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">Brand essence</h2>
          <p className="text-text-muted leading-relaxed mb-3">
            Klusta exists to create a safe, trustworthy, and seamless digital marketplace where guests enjoy premium, verified shortlet stays and hosts earn confidently.
          </p>
          <div className="p-4 rounded-2xl border border-gray-100 bg-beige-light/50">
            <p className="text-text-dark font-medium">Brand promise</p>
            <p className="text-text-muted">Reliable stays. Secure payments. Zero stories.</p>
          </div>
          <div className="mt-4">
            <p className="text-text-dark font-medium mb-2">Personality</p>
            <ul className="text-text-muted leading-relaxed space-y-1 list-disc pl-6">
              <li>Trustworthy</li>
              <li>Smart &amp; modern</li>
              <li>Community‑focused</li>
              <li>Efficient</li>
              <li>Transparent</li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-text-dark font-medium mb-2">Values</p>
            <ul className="text-text-muted leading-relaxed space-y-1 list-disc pl-6">
              <li>Safety</li>
              <li>Transparency</li>
              <li>Fairness</li>
              <li>Convenience</li>
              <li>Innovation</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">What we do</h2>
          <p className="text-text-muted leading-relaxed mb-3">
            We connect guests to verified shortlets and give hosts a fair, modern way to list, message, negotiate, and get paid safely.
          </p>
          <ul className="text-text-muted leading-relaxed space-y-2 list-disc pl-6">
            <li>Discover and book verified shortlets by city, dates, and budget.</li>
            <li>List properties, set rates, negotiate, and manage bookings in one place.</li>
            <li>Protect both sides with secure payments and clear, in‑app communication.</li>
            <li>Keep fees competitive — 5–10% only, with no hidden charges.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">Who we serve</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100 bg-beige-light/50">
              <p className="text-text-dark font-medium mb-2">Primary</p>
              <ul className="text-text-muted leading-relaxed space-y-1 list-disc pl-6">
                <li>Young professionals needing weekend or short stays</li>
                <li>Travellers within Nigeria</li>
                <li>Remote workers</li>
                <li>People seeking verified and safe apartments</li>
                <li>Apartment owners/hosts with quality shortlets</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-beige-light/50">
              <p className="text-text-dark font-medium mb-2">Secondary</p>
              <ul className="text-text-muted leading-relaxed space-y-1 list-disc pl-6">
                <li>Real estate companies</li>
                <li>Corporate clients</li>
                <li>Event attendees needing short stays</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">Why Klusta</h2>
          <ul className="text-text-muted leading-relaxed space-y-2 list-disc pl-6">
            <li>Reputable payment system — no apartment scams, no payment risks.</li>
            <li>Verified apartments only — physical inspection before listing.</li>
            <li>Chat‑to‑negotiate — guests and hosts can negotiate in‑app.</li>
            <li>Fairness for both sides — hosts get guaranteed payout; guests get peace of mind.</li>
            <li>Competitive commission — 5–10% only. No hidden charges.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">Messaging</h2>
          <div className="p-6 rounded-2xl border border-gray-100 bg-white">
            <p className="text-text-dark font-medium mb-2">Primary message</p>
            <p className="text-text-muted">Book with confidence. Pay with security. Stay with peace of mind.</p>
          </div>
          <div className="mt-4">
            <p className="text-text-dark font-medium mb-2">Supporting messages</p>
            <ul className="text-text-muted leading-relaxed space-y-2 list-disc pl-6">
              <li>Every apartment is verified before you see it.</li>
              <li>Pay once, stress never.</li>
              <li>You stay, we protect.</li>
              <li>Hosts get paid safely. Guests get value.</li>
              <li>No overcharging. No last‑minute cancellations.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">Taglines</h2>
          <ul className="text-text-muted leading-relaxed space-y-2 list-disc pl-6">
            <li>Book Smart. Book Klusta.</li>
            <li>Your Stay, Guaranteed.</li>
            <li>Pay Safe. Stay Safe.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-6">The team</h2>
          <p className="text-text-muted leading-relaxed mb-8">
            We&apos;re a small team focused on making shortlet stays and hosting in Nigeria straightforward and reliable. Meet the people building Klusta:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl border border-gray-100 bg-beige-light/50"
              >
                <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center text-accent font-sans font-bold text-lg mb-3">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-sans font-semibold text-text-dark">{member.name}</h3>
                <p className="text-accent text-sm font-medium mt-0.5">{member.role}</p>
                <p className="text-text-muted text-sm mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-4">
            Replace the names and roles above with your actual team details.
          </p>
        </section>

        <div>
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
