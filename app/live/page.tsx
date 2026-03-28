"use client";

import { useState } from "react";
import { LIVE_ACCOUNTS, HOW_IT_WORKS_STEPS, PLATFORM_LINKS } from "@/lib/data";
import PageHero from "@/components/PageHero";
import HowItWorksStep from "@/components/HowItWorksStep";
import GoldDivider from "@/components/GoldDivider";

const CATEGORY_COLORS: Record<string, string> = {
  Coins: "text-gold-primary border-gold-primary/30 bg-gold-primary/5",
  Currency: "text-gold-primary border-gold-primary/30 bg-gold-primary/5",
  Cards: "text-blue-accent border-blue-accent/30 bg-blue-accent/5",
  Breaks: "text-blue-accent border-blue-accent/30 bg-blue-accent/5",
};

function LiveAccountCard({
  name,
  category,
  followers,
  url,
  platform,
}: {
  name: string;
  category: string;
  followers: string;
  url: string;
  platform: "Whatnot" | "eBay Live";
}) {
  const badgeClass =
    CATEGORY_COLORS[category] || "text-text-muted border-white/20 bg-white/5";

  return (
    <div className="group bg-bg-primary border border-gold-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-[0_0_20px_rgba(201,168,76,0.12)] hover:border-gold-primary/50 transition-all duration-300">
      {/* Category */}
      <span
        className={`self-start text-[10px] uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full border font-medium ${badgeClass}`}
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {category}
      </span>

      {/* Name */}
      <h3
        className="text-lg font-semibold text-white leading-snug"
        style={{ fontFamily: "var(--font-playfair-display)" }}
      >
        {name}
      </h3>

      {/* Follower count */}
      <div>
        <p
          className="text-2xl font-bold text-gold-primary"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          {/* TODO: Replace with real follower count */}
          {followers}
        </p>
        <p
          className="text-[11px] text-text-muted uppercase tracking-[0.1em] mt-0.5"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          Followers
        </p>
      </div>

      {/* CTA */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 bg-gold-primary text-black font-semibold text-xs px-4 py-2.5 rounded-md hover:bg-gold-dark transition-colors duration-200"
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {platform === "Whatnot" ? "🎙️" : "🔴"}
        {/* TODO: Replace URL with real profile link */}
        Follow on {platform} ↗
      </a>
    </div>
  );
}

export default function LivePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const coinAccounts = LIVE_ACCOUNTS.filter((a) => a.entity === "coins");
  const cardAccounts = LIVE_ACCOUNTS.filter((a) => a.entity === "cards");

  const handleScheduleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to an email/notification backend
    setSubscribed(true);
  };

  return (
    <>
      <PageHero
        title="Watch Us Live"
        subtitle="Follow any of our seven accounts on Whatnot or eBay Live. New streams go live every day."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PLATFORM_LINKS.whatnot}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            🎙️ Watch on Whatnot
          </a>
          <a
            href={PLATFORM_LINKS.ebayLive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-blue-accent text-blue-accent font-semibold text-sm rounded-md hover:bg-blue-accent/10 transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            🔴 Watch on eBay Live
          </a>
        </div>
      </PageHero>

      {/* ─── Whatnot Accounts ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] text-text-muted mb-2 font-medium"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Platform
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                <span aria-hidden="true">🎙️</span> Whatnot
              </h2>
              <p
                className="text-text-muted text-sm mt-2 max-w-xl leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Our primary streaming home. All seven accounts are live daily on
                Whatnot — from coin auctions and currency lots to trading card
                breaks and pack rips.
              </p>
            </div>
            <a
              href={PLATFORM_LINKS.whatnot}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 bg-gold-primary text-black font-semibold text-sm px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Browse Whatnot ↗
            </a>
          </div>

          {/* Coins & Currency */}
          <div className="mb-10">
            <h3
              className="text-sm uppercase tracking-[0.15em] text-gold-primary font-semibold mb-5"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Coins &amp; Currency
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coinAccounts.map((account) => (
                <LiveAccountCard
                  key={`whatnot-${account.name}`}
                  name={account.name}
                  category={account.category}
                  followers={account.followers}
                  url={account.whatnotUrl}
                  platform="Whatnot"
                />
              ))}
            </div>
          </div>

          {/* Cards & Breaks */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.15em] text-blue-accent font-semibold mb-5"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Cards &amp; Breaks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cardAccounts.map((account) => (
                <LiveAccountCard
                  key={`whatnot-cards-${account.name}`}
                  name={account.name}
                  category={account.category}
                  followers={account.followers}
                  url={account.whatnotUrl}
                  platform="Whatnot"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ─── eBay Live Accounts ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] text-text-muted mb-2 font-medium"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Platform
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                <span aria-hidden="true">🔴</span> eBay Live
              </h2>
              <p
                className="text-text-muted text-sm mt-2 max-w-xl leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                All seven accounts also stream on eBay Live, giving collectors
                even more ways to tune in and participate from wherever they
                shop.
              </p>
            </div>
            <a
              href={PLATFORM_LINKS.ebayLive}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 border border-blue-accent text-blue-accent font-semibold text-sm px-6 py-3 rounded-md hover:bg-blue-accent/10 transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Browse eBay Live ↗
            </a>
          </div>

          {/* Coins & Currency */}
          <div className="mb-10">
            <h3
              className="text-sm uppercase tracking-[0.15em] text-gold-primary font-semibold mb-5"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Coins &amp; Currency
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coinAccounts.map((account) => (
                <LiveAccountCard
                  key={`ebay-${account.name}`}
                  name={account.name}
                  category={account.category}
                  followers={account.followers}
                  url={account.ebayLiveUrl}
                  platform="eBay Live"
                />
              ))}
            </div>
          </div>

          {/* Cards & Breaks */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.15em] text-blue-accent font-semibold mb-5"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              Cards &amp; Breaks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cardAccounts.map((account) => (
                <LiveAccountCard
                  key={`ebay-cards-${account.name}`}
                  name={account.name}
                  category={account.category}
                  followers={account.followers}
                  url={account.ebayLiveUrl}
                  platform="eBay Live"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ─── How It Works (condensed) ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              New Here?
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              How It Works
            </h2>
            <GoldDivider className="max-w-[80px] mx-auto" />
            <p
              className="mt-4 text-text-muted text-sm max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              New to live streaming? Here&apos;s everything you need to know to
              get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <HowItWorksStep
                key={step.step}
                {...step}
                isLast={i === HOW_IT_WORKS_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Schedule / Email Capture ──────────────────────────────────── */}
      <section className="py-20 bg-bg-secondary">
        <GoldDivider />
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <span className="text-4xl mb-4 block" aria-hidden="true">📅</span>
          <h2
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Stream Schedule Coming Soon
          </h2>
          <p
            className="text-text-muted mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            We&apos;re building a full schedule view. Enter your email and
            we&apos;ll notify you when it goes live — plus get stream
            reminders straight to your inbox.
          </p>

          {subscribed ? (
            <div className="bg-gold-primary/10 border border-gold-primary/30 rounded-xl px-6 py-5">
              <p
                className="text-gold-primary font-semibold"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                ✓ You&apos;re on the list! We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleScheduleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-gold-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-gold-primary transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter-body)" }}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-primary text-black font-semibold text-sm rounded-lg hover:bg-gold-dark transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
        <GoldDivider />
      </section>
    </>
  );
}
