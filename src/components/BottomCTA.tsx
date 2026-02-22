"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function BottomCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      gsap.fromTo(headlineRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" } });
      gsap.fromTo(visualRef.current, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 82%", toggleActions: "play none none none" } });
      gsap.fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 82%", toggleActions: "play none none none" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden bg-section-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h2 ref={headlineRef} className="font-sans text-3xl sm:text-4xl md:text-5xl text-text-dark font-bold tracking-tight">
          Go further with the platform that does more.
        </h2>
        <p ref={visualRef} className="mt-10 text-lg sm:text-xl text-text-muted font-medium">
          Coming soon on Android and iOS
        </p>
        <div ref={buttonsRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors w-full sm:w-auto"
          >
            Get started
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white border-2 border-gray-200 text-text-dark font-semibold hover:border-accent hover:text-accent transition-colors w-full sm:w-auto"
          >
            Explore features
          </Link>
        </div>
      </div>
    </section>
  );
}
