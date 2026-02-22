"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Found a great shortlet in Lekki within hours. The host was flexible with check-in and the place was exactly as listed. Will use Klusta again.",
    name: "Chioma O.",
    role: "Lagos",
  },
  {
    quote:
      "Listing my apartment was straightforward. I get bookings every month and payments are always on time. Klusta made it easy to earn from my space.",
    name: "Emeka N.",
    role: "Abuja",
  },
  {
    quote:
      "Needed a place in Port Harcourt for a two-week project. Messaged a few hosts, negotiated the rate, and moved in the same week. Smooth experience.",
    name: "Amara K.",
    role: "Port Harcourt",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const trigger = sectionRef.current;

      gsap.fromTo(
        headingRef.current,
        { y: 28, opacity: 0 },
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
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 82%", toggleActions: "play none none none" },
        }
      );
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        gsap.fromTo(
          cards,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
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
    <section
      ref={sectionRef}
      className="py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={headingRef}
            className="font-sans text-3xl sm:text-4xl text-text-dark tracking-tight"
          >
            What people say about Klusta
          </h2>
          <p
            ref={subRef}
            className="mt-3 text-text-muted text-lg max-w-xl mx-auto"
          >
            Real stays, real hosts, across Nigeria.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100/80 hover:shadow-md hover:border-accent-muted/40 transition-all duration-300"
            >
              <span className="absolute top-6 right-6 text-accent-muted/60 text-4xl font-sans leading-none select-none">
                &ldquo;
              </span>
              <p className="text-text-dark leading-relaxed pr-8 relative z-10">
                {t.quote}
              </p>
              <footer className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-text-dark">{t.name}</p>
                <p className="text-sm text-text-muted">{t.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
