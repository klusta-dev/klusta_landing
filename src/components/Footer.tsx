"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!footerRef.current) return;
      gsap.fromTo(
        contentRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full py-16 md:py-20 bg-gray-50 overflow-hidden border-t border-gray-200"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-200">
          <div className="lg:col-span-5">
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Find and list short-term rentals across Nigeria. Book with confidence, host with ease.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors shrink-0"
            >
              Get started
            </Link>
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="font-sans font-semibold text-text-dark text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-dark text-sm hover:text-accent transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-1 lg:col-span-3">
            <h3 className="font-sans font-semibold text-text-dark text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-dark text-sm hover:text-accent transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-text-muted text-sm">
            © {new Date().getFullYear()} Klusta. All rights reserved.
          </span>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-text-dark hover:text-accent transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-dark hover:text-accent transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
