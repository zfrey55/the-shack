import Link from "next/link";
import {
  STATS,
  HOW_IT_WORKS_STEPS,
  BRAND_ENTITIES,
  ALL_BRAND_NAMES,
  PLATFORM_LINKS,
} from "@/lib/data";
import StatTile from "@/components/StatTile";
import HowItWorksStep from "@/components/HowItWorksStep";
import BrandCard from "@/components/BrandCard";
import GoldDivider from "@/components/GoldDivider";

export default function HomePage() {
  // Show only the 3 brand entity groups on the home preview
  const previewBrands = BRAND_ENTITIES;

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-bg-primary">
        {/* Radial glow background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% -10%, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 35%, transparent 65%)",
          }}
        />

        {/* Decorative particle-like blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none opacity-[0.03]"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-[0.04]"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, #4A9CC7 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
          <p
            className="text-xs uppercase tracking-[0.3em] text-text-muted mb-6 font-medium"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Live Commerce · Coins · Cards · Collectibles
          </p>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold-primary leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Where Collecting
            <br />
            <span className="text-white">Meets Community</span>
          </h1>

          <p
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Live coin auctions, trading card breaks, and rare currency —
            streamed live daily on Whatnot and eBay Live.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLATFORM_LINKS.whatnot}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200 whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Watch Live Now
            </a>
            <Link
              href="/about"
              className="px-8 py-4 border border-gold-primary text-gold-primary font-semibold text-sm rounded-md hover:bg-gold-primary/10 transition-colors duration-200 whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Brand strip */}
        <div className="relative w-full border-t border-gold-border bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex flex-wrap justify-center items-center gap-0">
              {ALL_BRAND_NAMES.map((name, i) => (
                <div key={name} className="flex items-center">
                  <span
                    className="text-xs lg:text-sm font-medium text-text-muted hover:text-gold-primary transition-colors duration-200 cursor-default px-4 py-1 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {name}
                  </span>
                  {i < ALL_BRAND_NAMES.length - 1 && (
                    <span className="text-gold-primary/30 select-none" aria-hidden="true">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─────────────────────────────────────────────────── */}
      <section className="bg-bg-secondary py-4">
        <GoldDivider />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-border">
            {STATS.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* ─── How It Works ───────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Getting Started
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              How Live Commerce Works
            </h2>
            <GoldDivider className="max-w-[100px] mx-auto" />
            <p
              className="mt-5 text-text-muted text-base max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              New to live streaming? Here&apos;s what to expect when you join one of
              our streams.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <HowItWorksStep
                key={step.step}
                {...step}
                isLast={i === HOW_IT_WORKS_STEPS.length - 1}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p
              className="text-text-muted text-sm mb-4"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Ready to join?
            </p>
            <a
              href={PLATFORM_LINKS.whatnot}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Watch Live Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── Brand Preview ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-secondary">
        <GoldDivider />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              The Portfolio
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Our Brands
            </h2>
            <GoldDivider className="max-w-[100px] mx-auto" />
            <p
              className="mt-5 text-text-muted text-base max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Three distinct entities built around a single mission: bringing
              the collector experience live.
            </p>
          </div>

          {/* Brand Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} href="/brands" />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 border border-gold-primary text-gold-primary px-7 py-3 rounded-md text-sm font-semibold hover:bg-gold-primary/10 transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Explore All Brands →
            </Link>
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* ─── Why Live Commerce (Investor Section) ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
        {/* Gold gradient background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              For Partners & Investors
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              The Live Commerce Opportunity
            </h2>
            <GoldDivider className="max-w-[100px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Pull stat */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-bg-secondary border border-gold-border rounded-2xl p-10 text-center">
                <p
                  className="text-xs uppercase tracking-[0.2em] text-text-muted mb-4 font-medium"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Market Projection
                </p>
                <p
                  className="text-5xl lg:text-6xl font-bold text-gold-primary leading-none mb-4"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  $35B
                </p>
                <p
                  className="text-white text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  {/* TODO: verify and source this stat */}
                  Live commerce is projected to reach{" "}
                  <strong className="text-gold-primary">$35 billion</strong> in
                  the US market by 2027.
                </p>
                <p
                  className="text-text-muted text-xs mt-3"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  {/* TODO: Add citation/source */}
                  Source: [TODO: Verify and cite source]
                </p>
              </div>
            </div>

            {/* Right — paragraphs */}
            <div className="flex flex-col gap-8">
              <div>
                <h3
                  className="text-xl font-semibold text-gold-primary mb-3"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  The Fastest-Growing Segment of E-Commerce
                </h3>
                <p
                  className="text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Live commerce is reshaping how people discover and buy
                  products online. Driven by authentic real-time interaction,
                  immediate purchase decisions, and a sense of shared
                  community, live shopping is growing faster than any other
                  segment of e-commerce — and it&apos;s still early.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold text-gold-primary mb-3"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  Why Collectibles Are the Perfect Category
                </h3>
                <p
                  className="text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Coins, trading cards, and rare currency are uniquely suited
                  to live commerce. Price transparency on camera builds
                  immediate trust. The live reveal creates genuine excitement
                  and a sense of discovery you simply can&apos;t replicate in
                  a static listing. Collectors want to see what they&apos;re
                  buying — and we show them everything.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold text-gold-primary mb-3"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  An Early-Mover Portfolio Across Multiple Verticals
                </h3>
                <p
                  className="text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  The Shack has positioned itself ahead of the curve with seven
                  active live commerce accounts spanning coins, currency, and
                  trading cards — plus a proprietary manufactured product line
                  through G&J Packaging. Cross-brand community leverage and
                  platform diversification across Whatnot and eBay Live give
                  the portfolio resilience and compounding growth potential.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3.5 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Interested in Partnering or Investing? Get In Touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Livestream CTA ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
        <GoldDivider />

        {/* Blue accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,156,199,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 py-12 text-center">
          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <p
              className="text-xs uppercase tracking-[0.25em] text-blue-accent font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Streaming Now
            </p>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            We&apos;re Live Right Now
          </h2>
          <p
            className="text-text-muted text-lg mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Join thousands of collectors watching live on Whatnot and eBay Live
          </p>

          {/* Platform Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLATFORM_LINKS.whatnot}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              <span className="text-lg">🎙️</span>
              Watch on Whatnot
            </a>
            <a
              href={PLATFORM_LINKS.ebayLive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-blue-accent text-blue-accent font-semibold text-sm rounded-md hover:bg-blue-accent/10 transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              <span className="text-lg">🔴</span>
              Watch on eBay Live
            </a>
          </div>

          <p
            className="mt-8 text-text-muted text-sm"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Can&apos;t watch now?{" "}
            <Link
              href="/live"
              className="text-gold-primary hover:text-gold-dark transition-colors duration-200"
            >
              See our full stream schedule →
            </Link>
          </p>
        </div>

        <GoldDivider />
      </section>
    </>
  );
}
