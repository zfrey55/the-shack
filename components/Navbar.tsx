"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, PLATFORM_LINKS } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
          : "bg-black/80"
      } backdrop-blur-md`}
    >
      {/* Gold top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="The Shack Home"
          >
            <div className="flex flex-col leading-none">
              <span
                className="font-playfair text-xl lg:text-2xl font-bold text-gold-primary tracking-wider group-hover:text-gold-dark transition-colors duration-200"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                THE SHACK
              </span>
              <span
                className="text-[10px] font-medium text-text-muted uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Live Commerce
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? "text-gold-primary" : "text-white hover:text-gold-primary"
                  }`}
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold-primary transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PLATFORM_LINKS.whatnot}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200 whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Watch Live
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />
        <nav
          className="flex flex-col bg-black/98 px-6 py-4 gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-sm font-medium border-b border-white/5 transition-colors duration-200 ${
                  isActive ? "text-gold-primary" : "text-white hover:text-gold-primary"
                }`}
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4">
            <a
              href={PLATFORM_LINKS.whatnot}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Watch Live Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
