"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<(time: number) => void>(() => {});

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add("lenis");

    // Sync Lenis with GSAP ScrollTrigger for correct scroll-driven animations
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis via GSAP ticker (single RAF loop = performant)
    const onRaf = (time: number) => lenis.raf(time * 1000);
    rafRef.current = onRaf;
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return <>{children}</>;
}
