"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisonRows = [
  {
    feature: "Negotiate with hosts",
    klusta: { hasCheck: true, text: "Built-in messaging" },
    others: { hasCheck: false, text: "Often not supported" },
  },
  {
    feature: "List your property in minutes",
    klusta: { hasCheck: true, text: "Simple listing flow" },
    others: { hasCheck: false, text: "Lengthy signup" },
  },
  {
    feature: "Short stays (nights to months)",
    klusta: { hasCheck: true, text: "Flexible durations" },
    others: { hasCheck: false, text: "Usually long-term only" },
  },
  {
    feature: "Nigeria-focused (Lagos, Abuja, PH…)",
    klusta: { hasCheck: true, text: "Built for Nigeria" },
    others: { hasCheck: false, text: "Generic or overseas" },
  },
  {
    feature: "Transparent pricing",
    klusta: { hasCheck: true, text: "Clear rates, no surprises" },
    others: { hasCheck: false, text: "Hidden fees common" },
  },
  {
    feature: "Secure payments",
    klusta: { hasCheck: true, text: "Safe & tracked" },
    others: { hasCheck: false, text: "Cash / informal" },
  },
  {
    feature: "Payment in escrow",
    klusta: { hasCheck: true, text: "Held until stay complete; easy to resolve issues" },
    others: { hasCheck: false, text: "Paid upfront; disputes harder" },
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M15 4.5L6.75 12.75L3 9"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4.5 4.5l9 9M13.5 4.5l-9 9"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhyKlusta() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      gsap.fromTo(
        headerRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 82%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        tableRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 75%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 md:py-24 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mb-6 sm:mb-10">
          <h2 className="font-sans text-2xl min-[375px]:text-3xl sm:text-4xl text-text-dark tracking-tight">
            Why Choose Klusta?
          </h2>
          <p className="mt-1.5 sm:mt-2 text-text-muted text-sm sm:text-base">
            See how Klusta compares to other ways to find or list shortlets.
          </p>
        </div>

        <div
          ref={tableRef}
          className="overflow-x-auto overflow-y-visible rounded-xl bg-white border border-gray-200/90 shadow-sm -mx-4 sm:mx-0 px-4 sm:px-0 touch-pan-x"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <table className="w-full min-w-[520px] sm:min-w-0 border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pl-4 sm:pl-6 pr-3 sm:pr-4 py-3 sm:py-4 font-bold text-sm sm:text-base text-text-dark w-[38%] min-w-[140px]">
                  Feature
                </th>
                <th className="px-3 sm:px-4 py-3 sm:py-4 font-bold text-sm sm:text-base text-text-dark text-center">
                  Klusta
                </th>
                <th className="px-3 sm:px-4 pr-4 sm:pr-6 py-3 sm:py-4 font-bold text-sm sm:text-base text-gray-500 text-center">
                  Other options
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="pl-4 sm:pl-6 pr-3 sm:pr-4 py-3 sm:py-4 text-text-dark text-[13px] sm:text-[15px] leading-snug">
                    {row.feature}
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4">
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 text-text-dark text-[13px] sm:text-[15px] leading-snug">
                      {row.klusta.hasCheck ? (
                        <CheckIcon className="shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px] text-emerald-600" />
                      ) : (
                        <XIcon className="shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px] text-red-500" />
                      )}
                      <span className="whitespace-nowrap">{row.klusta.text}</span>
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 pr-4 sm:pr-6 py-3 sm:py-4">
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 text-text-dark text-[13px] sm:text-[15px] leading-snug">
                      {row.others.hasCheck ? (
                        <CheckIcon className="shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px] text-emerald-600" />
                      ) : (
                        <XIcon className="shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px] text-red-500" />
                      )}
                      <span className="whitespace-nowrap">{row.others.text}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-text-muted text-xs sm:hidden" aria-hidden>
          Swipe to compare →
        </p>
      </div>
    </section>
  );
}
