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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block w-5 h-4" aria-hidden>
      <span
        className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-200 ${
          open ? "top-1.5 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-200 ${
          open ? "top-1.5 -rotate-45" : "top-3"
        }`}
      />
    </span>
  );
}

export function Header() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

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

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
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
            className="flex-1 hidden lg:flex justify-center items-center gap-2 px-4"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  if (el) linksRef.current[i] = el;
                }}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm text-text-muted bg-gray-100/80 hover:bg-gray-200/80 hover:text-text-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex-1 lg:flex-none flex items-center justify-end gap-3 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-text-dark hover:bg-gray-100 transition-colors"
            >
              Learn More+
            </a>
            {/* <Link
              href="/login"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2 rounded-lg bg-accent text-black text-sm font-medium hover:bg-accent-dark transition-colors min-w-[80px]"
            >
              Login
            </Link> */}
            <button
              type="button"
              onClick={() => setDrawerOpen((o) => !o)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-dark hover:bg-gray-100 transition-colors"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
            >
              <MenuIcon open={drawerOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={closeDrawer}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[280px] bg-section-light shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="font-sans font-semibold text-text-dark">Menu</span>
            <button
              type="button"
              onClick={closeDrawer}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-text-dark hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <MenuIcon open={true} />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className="px-4 py-3 rounded-xl text-text-dark font-medium hover:bg-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4 border-t border-gray-200 flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeDrawer}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium text-text-dark bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Learn More+
            </a>
            {/* <Link
              href="/login"
              onClick={closeDrawer}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-accent text-black text-sm font-medium hover:bg-accent-dark transition-colors"
            >
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
