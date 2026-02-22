"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01.",
    title: "Create Account",
    description:
      "Sign up in minutes with your email or phone. Verify once and start browsing shortlets across Nigeria.",
    href: "/signup",
  },
  {
    number: "02.",
    title: "Search & Compare",
    description:
      "Filter by location, price, and amenities. Compare listings and message hosts to negotiate rates before you book.",
    href: "/listings",
  },
];

export function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      gsap.fromTo(
        headingRef.current,
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
        subRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 82%", toggleActions: "play none none none" },
        }
      );
      if (stepsRef.current) {
        const items = Array.from(stepsRef.current.children);
        gsap.fromTo(
          items,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger, start: "top 78%", toggleActions: "play none none none" },
          }
        );
      }
      gsap.fromTo(
        imageRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 75%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              ref={headingRef}
              className="font-sans text-3xl sm:text-4xl text-text-dark tracking-tight"
            >
              Discover Nigeria&apos;s finest shortlets.
            </h2>
            <p ref={subRef} className="mt-3 text-text-muted text-lg">
              A simple guide on how to get started.
            </p>
            <div ref={stepsRef} className="mt-10 space-y-10">
              {steps.map((step) => (
                <div key={step.number}>
                  <span className="font-sans font-bold text-text-dark text-lg">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-sans font-semibold text-text-dark text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                  <Link
                    href={step.href}
                    className="inline-block mt-3 text-accent font-medium hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={imageRef}
            className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gray-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
              alt="Scenic Nigerian landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
