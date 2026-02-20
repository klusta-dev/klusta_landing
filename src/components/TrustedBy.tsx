"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
];

export function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        labelRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const validLogos = logoRefs.current.filter(Boolean);
      if (validLogos.length) {
        gsap.fromTo(
          validLogos,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p
          ref={labelRef}
          className="text-sm text-text-muted mb-8 text-center"
        >
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {logos.map((logo, i) => (
            <div
              key={logo.id}
              ref={(el) => {
                logoRefs.current[i] = el;
              }}
              className="h-8 md:h-10 flex items-center justify-center text-text-muted/60 font-medium text-sm border border-gray-200 rounded px-6 py-2 min-w-[100px]"
            >
              Logolpsum
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
