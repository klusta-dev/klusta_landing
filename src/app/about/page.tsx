import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "About — Klusta",
  description: "Learn about Klusta and the team building Nigeria's shortlet platform.",
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
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">Our mission</h2>
          <p className="text-text-muted leading-relaxed">
            Klusta is building Nigeria&apos;s trusted marketplace for short-term rentals. We connect people who need a place to stay with hosts who have space to share—whether for a few nights in Lagos, a project stay in Abuja, or a longer shortlet across the country. We believe finding and listing shortlets should be simple, transparent, and secure.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-semibold text-text-dark text-xl mb-4">What we do</h2>
          <ul className="text-text-muted leading-relaxed space-y-2 list-disc pl-6">
            <li>Help guests discover and book shortlets by city, dates, and budget.</li>
            <li>Enable hosts to list properties, set rates, and manage bookings.</li>
            <li>Support negotiation and clear communication between guests and hosts.</li>
            <li>Provide a secure, easy-to-use platform so both sides can transact with confidence.</li>
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
