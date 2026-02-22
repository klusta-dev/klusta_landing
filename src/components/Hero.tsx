"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CITIES = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Calabar"];

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(
        subRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.25 }
      );
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 }
      );
      gsap.fromTo(
        visualRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.35 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center min-h-0 lg:min-h-0">
          {/* First on mobile, left on desktop: copy + CTA */}
          <div className="order-1 text-center lg:text-left">
            <h1
              ref={headlineRef}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl text-text-dark font-bold tracking-tight leading-[1.15]"
            >
              The shortlet platform Nigeria deserves.
            </h1>
            <p
              ref={subRef}
              className="mt-4 sm:mt-6 text-text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Find and book short-term rentals across Nigeria—or list your property and start earning. Payments held in escrow until your stay is complete; negotiate with hosts, resolve issues easily, transparent pricing.
            </p>
            <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[140px] px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors whitespace-nowrap shrink-0"
              >
                Get started
              </Link>
              <span className="text-sm text-text-muted">Available in</span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {CITIES.map((city) => (
                  <span
                    key={city}
                    className="text-text-dark font-medium text-sm px-3 py-1.5 rounded-full bg-gray-100"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Second on mobile, right on desktop: hero visual */}
          <div
            ref={visualRef}
            className="order-2 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-full lg:max-w-none rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/assets/Frame%201523.png"
                alt="Klusta — find your shortlet across Nigeria"
                width={1200}
                height={800}
                className="w-full h-auto object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
