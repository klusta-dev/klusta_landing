"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "1", label: "Create your host account", short: "Sign up" },
  { number: "2", label: "Add property details & photos", short: "Add listing" },
  { number: "3", label: "Set rates, dates & house rules", short: "Set rules" },
  { number: "4", label: "Go live & start earning", short: "Publish" },
];

export function EaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      gsap.fromTo(
        textRef.current,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 82%", toggleActions: "play none none none" },
        }
      );
      if (stepsRef.current) {
        const items = Array.from(stepsRef.current.children);
        gsap.fromTo(
          items,
          { x: 32, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger, start: "top 75%", toggleActions: "play none none none" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={textRef}>
            <h2 className="font-sans text-3xl sm:text-4xl text-text-dark tracking-tight">
              List your property with ease.
            </h2>
            <p className="mt-4 text-text-muted text-lg leading-relaxed">
              Become a host in minutes. Set your rates, availability, and house rules.
              Get paid securely and manage bookings from one dashboard.
            </p>
            <Link
              href="/host"
              className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div ref={stepsRef} className="max-w-md mx-auto lg:max-w-none lg:mx-0">
            <div className="relative rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 md:p-8">
              <div className="relative pl-1">
                <span
                  className="absolute left-5 top-6 bottom-6 w-0.5 bg-accent/40 rounded-full"
                  style={{ transform: "translateX(-50%)" }}
                  aria-hidden
                />
                <div className="relative flex flex-col gap-0">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="relative flex items-start gap-4 group py-3 first:pt-0"
                    >
                      <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full border-2 border-accent bg-white text-accent font-sans font-bold text-sm shadow-sm group-hover:bg-accent group-hover:text-white group-hover:shadow-md transition-all duration-200">
                        {step.number}
                      </div>
                      <div className="pt-1.5 min-w-0">
                        <p className="font-sans font-semibold text-text-dark text-base">
                          {step.label}
                        </p>
                        <p className="mt-0.5 text-sm text-text-muted">
                          {step.short}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
