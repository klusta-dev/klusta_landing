"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const WHATSAPP_NUMBER = "2348125652946";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Header() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        navRef.current,
        { y: -16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.15,
          ease: "power3.out",
        }
      );
      if (linksRef.current.length) {
        gsap.fromTo(
          linksRef.current,
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            delay: 0.25,
            ease: "power2.out",
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 overflow-hidden transition-all duration-300 ${
        scrolled
          ? "bg-section-light/90 backdrop-blur-md shadow-lg shadow-black/5 border-b border-black/5"
          : "bg-section-light"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center h-14 lg:h-16">
        <Link
          ref={logoRef}
          href="/"
          className="flex items-center shrink-0"
          aria-label="Klusta home"
        >
          <Image
            src="/assets/klusta.png"
            alt="Klusta"
            width={50}
            height={28}
            className="h-6 w-auto md:h-7"
            priority
          />
        </Link>
        <nav
          ref={navRef}
          className="flex-1 flex justify-center items-center gap-2 px-4"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm text-text-muted bg-gray-100/80 hover:bg-gray-200/80 hover:text-text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-text-dark hover:bg-gray-100 transition-colors"
          >
            Learn More+
          </a>
          <Link
            href="/login"
            className="inline-flex items-center bg-[var(--accent)] justify-center px-5 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors min-w-[80px]"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
