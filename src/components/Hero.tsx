"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["Find your", "shortlet", "fast."];

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const visualRef = useRef<HTMLDivElement>(null);
  const sageRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (wordRefs.current.length) {
        gsap.fromTo(
          wordRefs.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }
      if (sageRef.current) {
        gsap.fromTo(
          sageRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.5,
          }
        );
      }
      if (deviceRef.current) {
        gsap.fromTo(
          deviceRef.current,
          { scale: 0.98 },
          {
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.7,
          }
        );
        gsap.to(deviceRef.current, {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-4 sm:mt-8 md:mt-10 md:pt-14 pb-8 sm:pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 min-[480px]:px-5 sm:px-6 lg:px-10 text-center overflow-x-hidden">
        <h1
          ref={titleRef}
          className="font-serif text-[1.75rem] leading-[1.2] min-[375px]:text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-dark tracking-tight pt-1 pb-3 min-[480px]:pb-2 min-[480px]:leading-tight max-w-4xl mx-auto"
        >
          {words.map((word, i) => (
            <span
              key={word}
              ref={(el) => {
                if (el) wordRefs.current[i] = el;
              }}
              className={`inline-block mr-1.5 min-[375px]:mr-2 sm:mr-3 ${word.startsWith("fast") ? "text-accent" : ""}`}
            >
              {word}
            </span>
          ))}
        </h1>

        <div
          ref={visualRef}
          className="relative mt-6 sm:mt-10 md:mt-12 lg:mt-16 w-full min-h-[220px] min-[375px]:min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[520px] pb-6 sm:pb-6 md:pb-8 flex flex-col items-center overflow-x-hidden"
        >
          {/* Accent shape behind device - bottom and sides */}
          <div
            ref={sageRef}
            className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 w-[100%] min-[400px]:w-[calc(100%+1rem)] sm:w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] max-w-5xl h-[50%] sm:h-[55%] min-h-[140px] min-[375px]:min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[280px] rounded-t-2xl sm:rounded-t-[1.75rem] md:rounded-t-[2rem] lg:rounded-t-[2.5rem] z-[1]"
            style={{ backgroundColor: "var(--accent-muted)" }}
          />
          {/* Device (sits over accent shape) */}
          <div
            ref={deviceRef}
            className="relative z-[2] w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden bg-black shadow-xl ring-2 ring-black sm:px-3 md:px-4 min-w-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85"
              alt="Shortlets across Nigeria"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-6">
              <div className="flex justify-between items-start" aria-hidden />
              <div className="flex gap-1 justify-between items-end text-white/70 text-[10px] sm:text-xs">
                {["Lagos", "Abuja", "PH", "Ibadan", "Calabar"].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
