import type { Metadata } from "next";
import Link from "next/link";
import { PLATFORM_LINKS } from "@/lib/data";
import PageHero from "@/components/PageHero";
import GoldDivider from "@/components/GoldDivider";

export const metadata: Metadata = {
  title: "Products & Services — The Shack",
  description:
    "Discover The Shack's live commerce services, the Shack Pack product, and partnership opportunities.",
};

const LIVE_SERVICES = [
  {
    icon: "🪙",
    title: "Coin Auctions",
    description:
      "Live competitive bidding on individual coins and coin lots — everything from Morgan dollars to world coins, all graded and authenticated on camera.",
  },
  {
    icon: "💵",
    title: "Currency Lots",
    description:
      "Live auctions and fixed-price lots of domestic and world currency, banknotes, and numismatic paper money — presented in detail for every buyer.",
  },
  {
    icon: "🃏",
    title: "Trading Card Breaks",
    description:
      "Team-based and random-slot pack breaks for sports cards and collectible card games. Watch every pack opened live and know exactly what you&apos;re getting.",
  },
  {
    icon: "💬",
    title: "Live Q&A with Collectors",
    description:
      "Every stream is interactive. Ask questions, request close-ups, and engage directly with our hosts — who are collectors themselves.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="What We Offer"
        subtitle="Live commerce services, a proprietary packaged product, and opportunities for partners and investors."
      />

      {/* ─── Section 1 — Live Commerce Services ───────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Core Services
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Live Commerce Services
            </h2>
            <GoldDivider className="max-w-[80px] mx-auto" />
            <p
              className="mt-5 text-text-muted max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              The Shack operates seven live streaming accounts across Whatnot and
              eBay Live, delivering a premium collector experience every day of
              the week. Here&apos;s what you&apos;ll find when you tune in.
            </p>
          </div>

          {/* Service grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {LIVE_SERVICES.map((service) => (
              <div
                key={service.title}
                className="group bg-bg-secondary border border-gold-border rounded-xl p-8 flex gap-5 hover:shadow-[0_0_20px_rgba(201,168,76,0.12)] hover:border-gold-primary/50 transition-all duration-300"
              >
                <span className="text-3xl shrink-0 mt-0.5" aria-hidden="true">
                  {service.icon}
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold text-gold-primary mb-2"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-text-muted text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p
              className="text-text-muted text-sm mb-4"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Ready to watch?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PLATFORM_LINKS.whatnot}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold-primary text-black font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-gold-dark transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                🎙️ Watch on Whatnot
              </a>
              <a
                href={PLATFORM_LINKS.ebayLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-accent text-blue-accent font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-blue-accent/10 transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                🔴 Watch on eBay Live
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2 — Shack Pack ───────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
        <GoldDivider />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image / visual */}
            <div className="order-2 lg:order-1">
              <div
                className="relative rounded-2xl border border-gold-border overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, #111108 0%, #0d0d0d 50%, #060606 100%)",
                }}
              >
                {/* Glow accent */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.12) 0%, transparent 60%)",
                  }}
                />

                {/* TODO: Replace with actual Shack Pack product image using next/image */}
                <div className="relative aspect-square flex flex-col items-center justify-center p-12 text-center gap-4">
                  <span className="text-8xl" aria-hidden="true">🪙</span>
                  <div className="mt-4 border border-gold-primary/30 rounded-lg px-6 py-3">
                    <p
                      className="text-xs uppercase tracking-[0.3em] text-gold-primary font-bold"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      Shack Pack
                    </p>
                    <p
                      className="text-[10px] text-text-muted uppercase tracking-[0.15em] mt-1"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      {/* TODO: Replace placeholder with actual product image */}
                      G&amp;J Packaging
                    </p>
                  </div>
                  <p
                    className="text-text-muted text-xs mt-2"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {/* TODO: Replace this placeholder with actual product image via next/image */}
                    [Product image placeholder — replace with real Shack Pack image]
                  </p>
                </div>
              </div>
            </div>

            {/* Right: description */}
            <div className="order-1 lg:order-2">
              <p
                className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                G&amp;J Packaging · Manufactured Product
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gold-primary mb-5"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                The Shack Pack
              </h2>

              <div className="flex flex-col gap-5">
                <p
                  className="text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  The Shack Pack is a proprietary packaged coin product
                  manufactured and distributed by G&J Packaging — the
                  manufacturing arm of The Shack portfolio. Each pack is
                  carefully sourced, curated, and assembled to deliver a
                  compelling collector experience.
                </p>
                <p
                  className="text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Designed to complement the live commerce model, Shack Packs
                  are featured on stream, sold through live auctions, and
                  available through direct distribution — creating a physical
                  product that extends the brand beyond the screen.
                </p>

                {/* Feature points */}
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    "Manufactured and packed by G&J Packaging",
                    "Curated coin contents sourced for quality and collectibility",
                    "Featured live on Whatnot and eBay Live streams",
                    "Available at shackpck.com for direct purchase",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="text-gold-primary shrink-0 mt-0.5" aria-hidden="true">
                        ✦
                      </span>
                      <p
                        className="text-text-muted text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-inter-body)" }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a
                    href={PLATFORM_LINKS.shackPack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold-primary text-black font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-gold-dark transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    Learn More at shackpck.com ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* ─── Section 3 — Investor / Partner Callout ───────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-primary relative overflow-hidden">
        {/* Gold gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Partnerships &amp; Investment
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Interested in Partnering or Investing?
          </h2>

          <GoldDivider className="max-w-[80px] mx-auto mb-8" />

          <p
            className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-4"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            The Shack portfolio is positioned at the intersection of live
            commerce and the growing collectibles market. We&apos;re open to
            conversations with investors, distribution partners, brand
            collaborators, and platform partners who share our vision.
          </p>
          <p
            className="text-text-muted leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Whether you&apos;re interested in equity investment, co-marketing, product
            distribution, or technology partnership — we&apos;d love to talk.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-gold-primary text-black font-semibold text-sm px-8 py-4 rounded-md hover:bg-gold-dark transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
