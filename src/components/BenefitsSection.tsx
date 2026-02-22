"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Nationwide coverage",
    description: "Browse shortlets in Lagos, Abuja, Port Harcourt, Ibadan, Calabar and more. One platform for all of Nigeria.",
    bg: "bg-accent",
    textClass: "text-white",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3-6m0 0l3 6m-6-6v12" />
      </svg>
    ),
  },
  {
    title: "No hidden fees",
    description: "Transparent pricing. See total cost before you book. Hosts set clear rates; guests pay what they see.",
    bg: "bg-amber-50",
    textClass: "text-text-dark",
    icon: (
      <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Earn as a host",
    description: "List your property in minutes. Set your rates and availability. Get paid securely and manage bookings in one place.",
    bg: "bg-white",
    textClass: "text-text-dark",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 011.414-1.414L11.25 9l6.75-6.75" />
      </svg>
    ),
  },
  {
    title: "Lightning-fast setup",
    description: "Sign up with email or phone. Verify once and start browsing or listing. No lengthy forms.",
    bg: "bg-sky-50",
    textClass: "text-text-dark",
    icon: (
      <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Secure & reliable",
    description: "Safe payments and verified listings. Chat with hosts, agree on terms, and book with confidence.",
    bg: "bg-emerald-50",
    textClass: "text-text-dark",
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Negotiate with hosts",
    description: "Message hosts directly. Discuss rates, check-in times, and house rules before you book.",
    bg: "bg-white",
    textClass: "text-text-dark",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      gsap.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(
        titleRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.05, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", toggleActions: "play none none none" } }
      );
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        gsap.fromTo(
          cards,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out", scrollTrigger: { trigger, start: "top 78%", toggleActions: "play none none none" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden bg-section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p ref={labelRef} className="text-accent font-semibold text-sm uppercase tracking-wider">
            Benefits
          </p>
          <h2 ref={titleRef} className="font-sans text-3xl sm:text-4xl md:text-5xl text-text-dark font-bold tracking-tight mt-2">
            Smarter shortlets start here.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((item, i) => (
            <article
              key={i}
              className={`rounded-2xl p-6 md:p-8 ${item.bg} ${item.textClass} border border-gray-100 shadow-sm`}
            >
              <div className="mb-4" aria-hidden>
                {item.icon}
              </div>
              <h3 className="font-sans font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
