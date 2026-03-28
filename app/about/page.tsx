import type { Metadata } from "next";
import { MISSION_VALUES, MILESTONES } from "@/lib/data";
import PageHero from "@/components/PageHero";
import GoldDivider from "@/components/GoldDivider";

export const metadata: Metadata = {
  title: "About — The Shack",
  description:
    "Learn about The Shack's mission, founding story, and values in the live commerce and collectibles space.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About The Shack"
        subtitle="Building the most trusted live commerce community for collectors."
      />

      {/* ─── Company Story ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Pull quote / mission */}
            <div className="lg:sticky lg:top-32">
              <div className="border-l-2 border-gold-primary pl-8 py-4">
                <p
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold-primary leading-snug"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  &ldquo;We believe the best way to buy collectibles is to watch
                  them being pulled, graded, and revealed — live on camera.&rdquo;
                </p>
                <p
                  className="mt-6 text-text-muted text-sm uppercase tracking-[0.15em] font-medium"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  {/* TODO: Replace with real attribution */}
                  The Shack Founding Team
                </p>
              </div>
            </div>

            {/* Right — Narrative */}
            <div className="flex flex-col gap-6">
              {/* TODO: Replace all placeholder paragraphs with real company story */}
              <p
                className="text-white/80 leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {/* TODO: Replace with real founding story */}
                The Shack was founded by a group of lifelong collectors who
                recognized that the traditional way of buying coins and trading
                cards — through static online listings and local shows — was
                being transformed. The future was live.
              </p>
              <p
                className="text-white/80 leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {/* TODO: Replace with real growth story */}
                What started as a single account on Whatnot quickly grew into a
                multi-brand portfolio spanning coins, currency, and trading
                cards. Each brand was built from the ground up, focused on
                providing collectors with transparency, fair pricing, and an
                experience they couldn&apos;t find anywhere else.
              </p>
              <p
                className="text-white/80 leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {/* TODO: Replace with real manufacturing story */}
                As the brands grew, so did the vision. G&J Packaging was
                established to bring a proprietary manufactured product to
                market — the Shack Pack — giving the portfolio a physical
                product dimension that complements the live commerce model and
                creates new distribution channels.
              </p>
              <p
                className="text-white/80 leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {/* TODO: Replace with real mission statement paragraph */}
                Today, The Shack portfolio reaches collectors across the
                country every single day. Our mission is simple: be the most
                trusted, most entertaining, and most community-driven live
                commerce destination for collectors everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Values ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-secondary">
        <GoldDivider />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              What Drives Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Mission &amp; Values
            </h2>
            <GoldDivider className="max-w-[80px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSION_VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-bg-primary border border-gold-border rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] hover:border-gold-primary/50 transition-all duration-300"
              >
                <span className="text-4xl" aria-hidden="true">
                  {value.icon}
                </span>
                <h3
                  className="text-xl font-semibold text-gold-primary"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-text-muted text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* ─── Timeline ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Our Journey
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Key Milestones
            </h2>
            <GoldDivider className="max-w-[80px] mx-auto" />
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-primary/60 via-gold-primary/30 to-transparent"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10">
              {MILESTONES.map((milestone, i) => (
                <div key={i} className="relative pl-16 flex flex-col gap-1">
                  {/* Gold dot */}
                  <div
                    className="absolute left-[18px] top-1.5 w-4 h-4 rounded-full bg-gold-primary border-2 border-bg-primary shadow-[0_0_10px_rgba(201,168,76,0.5)]"
                    aria-hidden="true"
                  />

                  {/* Year label */}
                  <span
                    className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {milestone.year}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-text-muted text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter-body)" }}
                  >
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
