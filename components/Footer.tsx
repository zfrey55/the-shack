import Link from "next/link";
import { NAV_LINKS, PLATFORM_LINKS, BRAND_ENTITIES } from "@/lib/data";

export default function Footer() {
  const brands = BRAND_ENTITIES.flatMap((e) =>
    e.accounts.map((a) => a.name)
  );

  return (
    <footer className="bg-bg-secondary border-t border-gold-border">
      {/* Gold divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-bold text-2xl text-gold-primary tracking-wider"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                THE SHACK
              </span>
              <p
                className="text-[11px] uppercase tracking-[0.2em] text-text-muted mt-1"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Live Commerce Portfolio
              </p>
            </div>
            <p
              className="text-text-muted text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              A portfolio of live commerce brands streaming coins, currency, and
              trading cards daily on Whatnot and eBay Live.
            </p>

            {/* Platform icons */}
            <div className="flex gap-3 mt-6">
              <a
                href={PLATFORM_LINKS.whatnot}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-gold-border text-text-muted hover:text-gold-primary hover:border-gold-primary/60 transition-colors duration-200 text-xs"
                style={{ fontFamily: "var(--font-inter-body)" }}
                aria-label="Whatnot"
              >
                <span className="text-base">🎙️</span>
                <span>Whatnot</span>
              </a>
              <a
                href={PLATFORM_LINKS.ebayLive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-gold-border text-text-muted hover:text-gold-primary hover:border-gold-primary/60 transition-colors duration-200 text-xs"
                style={{ fontFamily: "var(--font-inter-body)" }}
                aria-label="eBay Live"
              >
                <span className="text-base">🔴</span>
                <span>eBay Live</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Brands & Navigation */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.15em] text-text-muted mb-4 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Our Brands
            </h3>
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link
                    href="/brands"
                    className="text-sm text-white/70 hover:text-gold-primary transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {brand}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PLATFORM_LINKS.shackPack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-gold-primary transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  G&J Packaging ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Navigation & Contact */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3
                className="text-xs uppercase tracking-[0.15em] text-text-muted mb-4 font-medium"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Navigation
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-gold-primary transition-colors duration-200"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="text-xs uppercase tracking-[0.15em] text-text-muted mb-4 font-medium"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${PLATFORM_LINKS.emailCoin}`}
                    className="text-sm text-white/70 hover:text-gold-primary transition-colors duration-200 block"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {PLATFORM_LINKS.emailCoin}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PLATFORM_LINKS.emailCard}`}
                    className="text-sm text-white/70 hover:text-gold-primary transition-colors duration-200 block"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {PLATFORM_LINKS.emailCard}
                  </a>
                </li>
                <li className="pt-1">
                  <Link
                    href="/contact"
                    className="text-sm text-gold-primary hover:text-gold-dark transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    Contact Us →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-text-muted text-xs"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            © 2025 The Shack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={PLATFORM_LINKS.shackPack}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-gold-primary transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              shackpck.com ↗
            </a>
            <Link
              href="/contact"
              className="text-text-muted text-xs hover:text-gold-primary transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Investor Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
