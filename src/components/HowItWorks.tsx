"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Search by location",
    description:
      "Filter by city, area, and amenities. Find shortlets in Lagos, Abuja, Port Harcourt, and across Nigeria.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <path
          d="M8 16q8-10 16 0q-8 10-16 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Manage your listings",
    description:
      "One dashboard for all your properties. Update availability, rates, and house rules anytime.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M7 16h18" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path
          d="M22 10c2 2 3 5 3 6s-1 4-3 6M10 22c-2-2-3-5-3-6s1-4 3-6"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Message and negotiate",
    description:
      "Chat with hosts or guests directly. Agree on rates, check-in times, and special requests before booking.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <path
          d="M8 11h16c0 5.5-2.5 9-8 11-5.5-2-8-5.5-8-11z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M12 17h8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <circle cx="14" cy="16" r="1.25" fill="currentColor" />
        <circle cx="18" cy="16" r="1.25" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Secure payments",
    description:
      "Pay or get paid with confidence. Transparent pricing and secure transactions for every booking.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <path
          d="M6 22l5-9 5 4 6-10 4 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M5 22h22"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 82%", toggleActions: "play none none none" },
        }
      );
      if (blocksRef.current) {
        const items = Array.from(blocksRef.current.children);
        gsap.fromTo(
          items,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger, start: "top 72%", toggleActions: "play none none none" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 overflow-hidden bg-section-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="mb-14 md:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[2.75rem] text-heading-dark font-bold tracking-tight">
            Built for how you travel and host.
          </h2>
          <p className="mt-3 text-body-muted text-base md:text-lg font-normal max-w-xl">
            Klusta gives you the tools to find or list shortlets—without the hassle.
          </p>
        </div>

        <div
          ref={blocksRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div
                className="text-heading-dark mb-4"
                aria-hidden
              >
                {feature.icon}
              </div>
              <h3 className="font-sans font-bold text-heading-dark text-base md:text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-body-muted text-sm md:text-[15px] leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
