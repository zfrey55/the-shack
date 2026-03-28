import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_ENTITIES, PLATFORM_LINKS } from "@/lib/data";
import PageHero from "@/components/PageHero";
import PlatformBadge from "@/components/PlatformBadge";
import GoldDivider from "@/components/GoldDivider";

export const metadata: Metadata = {
  title: "Our Brands — The Shack",
  description:
    "Explore all seven live commerce brands and the G&J Packaging manufacturing entity in The Shack portfolio.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="Our Brands & Entities"
        subtitle="Seven live commerce accounts across coins, currency, and trading cards — plus a manufacturing arm."
      />

      <div className="bg-bg-primary">
        {BRAND_ENTITIES.map((entity, entityIndex) => {
          const isLast = entityIndex === BRAND_ENTITIES.length - 1;
          const isGJ = entity.id === "gj-packaging";
          const isEven = entityIndex % 2 === 1;

          return (
            <section
              key={entity.id}
              id={entity.id}
              className={`py-20 lg:py-28 ${isEven ? "bg-bg-secondary" : "bg-bg-primary"} relative overflow-hidden`}
            >
              {isEven && (
                <>
                  <GoldDivider />
                  <div className="mt-20 lg:mt-28" />
                </>
              )}

              {/* Subtle background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  background: isGJ
                    ? "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)"
                    : "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(201,168,76,0.03) 0%, transparent 60%)",
                }}
              />

              <div className="relative max-w-7xl mx-auto px-6">
                {/* Entity Header */}
                <div className="mb-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {entity.platforms.map((platform) => (
                      <PlatformBadge key={platform} platform={platform} />
                    ))}
                    {entity.badge && (
                      <span
                        className="text-xs px-3 py-1 rounded-full border border-gold-primary/40 text-gold-primary bg-gold-primary/5 font-medium"
                        style={{ fontFamily: "var(--font-inter-body)" }}
                      >
                        {entity.badge}
                      </span>
                    )}
                  </div>

                  <h2
                    className="text-3xl md:text-4xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    {entity.groupName}
                  </h2>

                  <p
                    className="text-gold-primary font-medium text-lg mb-4"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {entity.tagline}
                  </p>

                  <p
                    className="text-text-muted leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {entity.description}
                  </p>
                </div>

                <GoldDivider className="mb-12" opacity={0.4} />

                {/* G&J Packaging — special layout */}
                {isGJ ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: info */}
                    <div>
                      <div className="bg-bg-secondary border border-gold-border rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-3xl" aria-hidden="true">🏭</span>
                          <div>
                            <h3
                              className="text-xl font-semibold text-white"
                              style={{ fontFamily: "var(--font-playfair-display)" }}
                            >
                              G&amp;J Packaging
                            </h3>
                            <p
                              className="text-xs text-text-muted uppercase tracking-[0.1em] mt-0.5"
                              style={{ fontFamily: "var(--font-inter-body)" }}
                            >
                              Manufacturing &amp; Product Distribution
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="flex items-start gap-3">
                            <span className="text-gold-primary mt-1" aria-hidden="true">✦</span>
                            <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter-body)" }}>
                              Specializes in coin procurement and sourcing for The Shack&apos;s live commerce brands
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-gold-primary mt-1" aria-hidden="true">✦</span>
                            <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter-body)" }}>
                              Manufactures and distributes the Shack Pack — a proprietary packaged coin product
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-gold-primary mt-1" aria-hidden="true">✦</span>
                            <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter-body)" }}>
                              Supports packaging, fulfillment, and supply chain for portfolio brands
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gold-border">
                          <a
                            href={entity.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gold-primary text-black font-semibold text-sm px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-200"
                            style={{ fontFamily: "var(--font-inter-body)" }}
                          >
                            Visit shackpck.com ↗
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right: shack pack callout */}
                    <div
                      className="relative rounded-2xl border border-gold-border overflow-hidden p-10 text-center"
                      style={{
                        background: "linear-gradient(135deg, #0D0D0D 0%, #111108 50%, #0D0D0D 100%)",
                      }}
                    >
                      <div
                        className="absolute inset-0 pointer-events-none"
                        aria-hidden="true"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%)",
                        }}
                      />
                      <div className="relative">
                        <span className="text-6xl mb-6 block" aria-hidden="true">🪙</span>
                        <h3
                          className="text-2xl font-bold text-gold-primary mb-3"
                          style={{ fontFamily: "var(--font-playfair-display)" }}
                        >
                          The Shack Pack
                        </h3>
                        <p
                          className="text-text-muted text-sm leading-relaxed max-w-sm mx-auto mb-6"
                          style={{ fontFamily: "var(--font-inter-body)" }}
                        >
                          A proprietary packaged coin product manufactured and distributed by
                          G&J Packaging. Available now at shackpck.com.
                        </p>
                        <a
                          href={PLATFORM_LINKS.shackPack}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-gold-primary text-gold-primary px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gold-primary/10 transition-colors duration-200"
                          style={{ fontFamily: "var(--font-inter-body)" }}
                        >
                          Shop Shack Pack ↗
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Live Commerce Brands — account card grid */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {entity.accounts.map((account) => (
                      <div
                        key={account.name}
                        className="group bg-bg-primary border border-gold-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-[0_0_20px_rgba(201,168,76,0.12)] hover:border-gold-primary/50 transition-all duration-300"
                      >
                        {/* Category badge */}
                        <span
                          className="self-start text-[10px] uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full border border-gold-primary/30 text-gold-primary bg-gold-primary/5 font-medium"
                          style={{ fontFamily: "var(--font-inter-body)" }}
                        >
                          {account.category}
                        </span>

                        {/* Account name */}
                        <h3
                          className="text-lg font-semibold text-white leading-snug"
                          style={{ fontFamily: "var(--font-playfair-display)" }}
                        >
                          {account.name}
                        </h3>

                        {/* Stats */}
                        <div className="flex gap-6">
                          <div>
                            <p
                              className="text-lg font-bold text-gold-primary"
                              style={{ fontFamily: "var(--font-playfair-display)" }}
                            >
                              {/* TODO: Replace with real follower count */}
                              {account.followers}
                            </p>
                            <p
                              className="text-[11px] text-text-muted uppercase tracking-[0.1em] mt-0.5"
                              style={{ fontFamily: "var(--font-inter-body)" }}
                            >
                              Followers
                            </p>
                          </div>
                          <div>
                            <p
                              className="text-lg font-bold text-gold-primary"
                              style={{ fontFamily: "var(--font-playfair-display)" }}
                            >
                              {/* TODO: Replace with real stream count */}
                              {account.streams}
                            </p>
                            <p
                              className="text-[11px] text-text-muted uppercase tracking-[0.1em] mt-0.5"
                              style={{ fontFamily: "var(--font-inter-body)" }}
                            >
                              Streams
                            </p>
                          </div>
                        </div>

                        {/* Platform links */}
                        <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-gold-border">
                          <a
                            href={account.whatnotUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs text-white/70 hover:text-gold-primary transition-colors duration-200 font-medium"
                            style={{ fontFamily: "var(--font-inter-body)" }}
                          >
                            {/* TODO: Replace with real Whatnot profile URL */}
                            <span aria-hidden="true">🎙️</span> Follow on Whatnot ↗
                          </a>
                          <a
                            href={account.ebayLiveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs text-white/70 hover:text-blue-accent transition-colors duration-200 font-medium"
                            style={{ fontFamily: "var(--font-inter-body)" }}
                          >
                            {/* TODO: Replace with real eBay Live profile URL */}
                            <span aria-hidden="true">🔴</span> Follow on eBay Live ↗
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {isEven && !isLast && (
                <div className="mt-20 lg:mt-28">
                  <GoldDivider />
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ─── Contact CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-bg-secondary">
        <GoldDivider />
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Interested in Partnering?
          </h2>
          <p
            className="text-text-muted mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            We&apos;re always open to conversations about investment, partnership, or
            collaboration opportunities across the portfolio.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-primary text-black font-semibold text-sm px-8 py-4 rounded-md hover:bg-gold-dark transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Get In Touch →
          </Link>
        </div>
        <GoldDivider />
      </section>
    </>
  );
}
