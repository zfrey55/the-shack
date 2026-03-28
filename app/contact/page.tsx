import type { Metadata } from "next";
import { PLATFORM_LINKS } from "@/lib/data";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import GoldDivider from "@/components/GoldDivider";

export const metadata: Metadata = {
  title: "Contact — The Shack",
  description:
    "Get in touch with The Shack for general inquiries, investor or partnership interest, or press inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Whether you're a collector, investor, press, or potential partner — we'd love to hear from you."
      />

      {/* ─── Investor Callout Box ──────────────────────────────────────── */}
      <section className="py-12 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="relative overflow-hidden rounded-2xl border border-gold-border p-8 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, #0D0D0D 0%, #0a0a06 50%, #0D0D0D 100%)",
            }}
          >
            {/* Glow accent */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
              }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <p
                  className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold mb-3"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Investor &amp; Partnership Inquiries
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  Building Something Special in Live Commerce
                </h2>
                <p
                  className="text-text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  We&apos;re growing fast across multiple live commerce verticals.
                  If you&apos;re interested in partnering or investing, we&apos;d
                  love to connect and share what we&apos;re building.
                </p>
              </div>

              <a
                href="#contact-form"
                className="shrink-0 inline-block bg-gold-primary text-black font-semibold text-sm px-7 py-4 rounded-md hover:bg-gold-dark transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Send Us a Message ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Two-column layout ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* ── Left Column — Contact Info ─────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Email contacts */}
              <div>
                <h3
                  className="text-xs uppercase tracking-[0.2em] text-text-muted mb-5 font-medium"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Email Us Directly
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="p-5 bg-bg-secondary border border-gold-border rounded-xl">
                    <p
                      className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1 font-medium"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      Coin &amp; Currency Inquiries
                    </p>
                    <a
                      href={`mailto:${PLATFORM_LINKS.emailCoin}`}
                      className="text-gold-primary font-medium hover:text-gold-dark transition-colors duration-200 text-sm"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      {PLATFORM_LINKS.emailCoin}
                    </a>
                  </div>

                  <div className="p-5 bg-bg-secondary border border-gold-border rounded-xl">
                    <p
                      className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1 font-medium"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      Card &amp; Break Inquiries
                    </p>
                    <a
                      href={`mailto:${PLATFORM_LINKS.emailCard}`}
                      className="text-gold-primary font-medium hover:text-gold-dark transition-colors duration-200 text-sm"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      {PLATFORM_LINKS.emailCard}
                    </a>
                  </div>
                </div>
              </div>

              {/* Platform links */}
              <div>
                <h3
                  className="text-xs uppercase tracking-[0.2em] text-text-muted mb-5 font-medium"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  Watch Us Live
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={PLATFORM_LINKS.whatnot}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-bg-secondary border border-gold-border rounded-xl hover:border-gold-primary/50 hover:shadow-[0_0_12px_rgba(201,168,76,0.1)] transition-all duration-200 group"
                  >
                    <span className="text-2xl" aria-hidden="true">🎙️</span>
                    <div>
                      <p
                        className="text-sm font-medium text-white group-hover:text-gold-primary transition-colors duration-200"
                        style={{ fontFamily: "var(--font-inter-body)" }}
                      >
                        Whatnot
                      </p>
                      <p
                        className="text-[11px] text-text-muted mt-0.5"
                        style={{ fontFamily: "var(--font-inter-body)" }}
                      >
                        {/* TODO: Replace with real Whatnot link */}
                        Follow our accounts ↗
                      </p>
                    </div>
                  </a>

                  <a
                    href={PLATFORM_LINKS.ebayLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-bg-secondary border border-gold-border rounded-xl hover:border-blue-accent/50 hover:shadow-[0_0_12px_rgba(74,156,199,0.1)] transition-all duration-200 group"
                  >
                    <span className="text-2xl" aria-hidden="true">🔴</span>
                    <div>
                      <p
                        className="text-sm font-medium text-white group-hover:text-blue-accent transition-colors duration-200"
                        style={{ fontFamily: "var(--font-inter-body)" }}
                      >
                        eBay Live
                      </p>
                      <p
                        className="text-[11px] text-text-muted mt-0.5"
                        style={{ fontFamily: "var(--font-inter-body)" }}
                      >
                        {/* TODO: Replace with real eBay Live link */}
                        Follow our accounts ↗
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* G&J Packaging */}
              <div>
                <h3
                  className="text-xs uppercase tracking-[0.2em] text-text-muted mb-5 font-medium"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  G&amp;J Packaging
                </h3>
                <a
                  href={PLATFORM_LINKS.shackPack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-bg-secondary border border-gold-border rounded-xl hover:border-gold-primary/50 hover:shadow-[0_0_12px_rgba(201,168,76,0.1)] transition-all duration-200 group"
                >
                  <span className="text-2xl" aria-hidden="true">🏭</span>
                  <div>
                    <p
                      className="text-sm font-medium text-white group-hover:text-gold-primary transition-colors duration-200"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      shackpck.com
                    </p>
                    <p
                      className="text-[11px] text-text-muted mt-0.5"
                      style={{ fontFamily: "var(--font-inter-body)" }}
                    >
                      Shack Pack &amp; manufacturing inquiries ↗
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* ── Right Column — Contact Form ────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  Send Us a Message
                </h2>
                <p
                  className="text-text-muted text-sm"
                  style={{ fontFamily: "var(--font-inter-body)" }}
                >
                  We respond to all inquiries within 1–2 business days.
                </p>
              </div>

              <ContactForm />

              <p
                className="mt-4 text-text-muted text-xs text-center"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {/* TODO: Connect form to /api/contact route */}
                Form submission is UI-only until the /api/contact route is connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom Divider ────────────────────────────────────────────── */}
      <GoldDivider />
    </>
  );
}
