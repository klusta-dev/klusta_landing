"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GetStartedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      gsap.fromTo(
        titleRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(
        leftCardRef.current,
        { x: -24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.65, ease: "power2.out", scrollTrigger: { trigger, start: "top 78%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(
        rightCardRef.current,
        { x: 24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.65, ease: "power2.out", scrollTrigger: { trigger, start: "top 78%", toggleActions: "play none none none" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2
          ref={titleRef}
          className="font-sans text-3xl sm:text-4xl md:text-5xl text-text-dark font-bold tracking-tight text-center mb-14 md:mb-16"
        >
          Get to know how to get started.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* List your property — phone mockup */}
          <div
            ref={leftCardRef}
            className="rounded-2xl bg-amber-50/80 border border-amber-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1">
              <h3 className="font-sans font-bold text-xl text-text-dark mb-2">List your property</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Add your property in minutes. Upload photos, set rates and availability, and go live. Start earning from your space.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
              >
                Become a host
              </Link>
            </div>
            <div className="relative w-[200px] md:w-[220px] shrink-0">
              <div className="aspect-[9/19] rounded-[2rem] bg-gray-900 p-2 shadow-xl">
                <div className="h-full rounded-[1.5rem] overflow-hidden bg-white flex flex-col">
                  <div className="p-3 border-b border-gray-100">
                    <p className="text-xs font-semibold text-text-dark">Add listing</p>
                    <div className="flex gap-1.5 mt-2">
                      <span className="w-6 h-1 rounded-full bg-accent" />
                      <span className="w-6 h-1 rounded-full bg-gray-200" />
                      <span className="w-6 h-1 rounded-full bg-gray-200" />
                    </div>
                  </div>
                  <div className="flex-1 relative min-h-[120px]">
                    <Image
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80"
                      alt="Property"
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book in minutes — Klusta vs others */}
          <div
            ref={rightCardRef}
            className="rounded-2xl bg-emerald-50/80 border border-emerald-100 p-6 md:p-8"
          >
            <h3 className="font-sans font-bold text-xl text-text-dark mb-2">Book in minutes</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              No lengthy signup or waiting. Search, message hosts, negotiate, and book—all from one app.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50/80 border border-red-100">
                <span className="text-red-500 shrink-0 mt-0.5" aria-hidden>✕</span>
                <div>
                  <p className="font-medium text-text-dark text-sm">Other options</p>
                  <p className="text-xs text-text-muted">Lengthy forms, delayed replies, unclear pricing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border-2 border-accent shadow-sm">
                <span className="text-accent shrink-0 mt-0.5 font-bold" aria-hidden>✓</span>
                <div>
                  <p className="font-medium text-text-dark text-sm">Klusta</p>
                  <p className="text-xs text-text-muted">Sign up fast. Message hosts. Book when you’re ready.</p>
                </div>
              </div>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center justify-center mt-6 w-full md:w-auto px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
