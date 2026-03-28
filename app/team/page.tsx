import type { Metadata } from "next";
import { TEAM_MEMBERS } from "@/lib/data";
import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";
import GoldDivider from "@/components/GoldDivider";

export const metadata: Metadata = {
  title: "Team — The Shack",
  description: "Meet the team behind The Shack's live commerce portfolio.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet The Team"
        subtitle="The collectors, operators, and creators behind The Shack portfolio."
      />

      {/* ─── Team Grid ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.25em] text-text-muted mb-3 font-medium"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              The People
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Our Team
            </h2>
            <GoldDivider className="max-w-[80px] mx-auto" />
            <p
              className="mt-5 text-text-muted text-sm max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              {/* TODO: Replace with real team intro copy */}
              Every stream, every product, and every interaction is the result
              of a dedicated team who love this hobby as much as our customers
              do.
            </p>
          </div>

          {/* Team member grid */}
          {/* TODO: Populate TEAM_MEMBERS in /lib/data.ts with real names, titles, and bios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Notice for editors */}
          <div className="mt-12 p-6 bg-bg-secondary border border-gold-border/50 rounded-xl">
            <p
              className="text-text-muted text-xs text-center"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              {/* TODO: Remove this notice after filling in real team members */}
              ⚙️ Team member data is managed in{" "}
              <code className="text-gold-primary text-xs bg-black/30 px-1.5 py-0.5 rounded">
                /lib/data.ts
              </code>{" "}
              under the{" "}
              <code className="text-gold-primary text-xs bg-black/30 px-1.5 py-0.5 rounded">
                TEAM_MEMBERS
              </code>{" "}
              export. Add names, titles, bios, and avatarUrls there.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Culture / Values Callout ──────────────────────────────────── */}
      <section className="py-20 bg-bg-secondary">
        <GoldDivider />
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: quote */}
            <div className="border-l-2 border-gold-primary pl-8 py-2">
              <p
                className="text-2xl font-bold text-gold-primary leading-snug"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {/* TODO: Replace with real team culture quote */}
                &ldquo;We&apos;re not just sellers — we&apos;re collectors who
                built a platform for collectors.&rdquo;
              </p>
            </div>

            {/* Right: culture copy */}
            <div className="flex flex-col gap-4">
              <h2
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                Built by Collectors, for Collectors
              </h2>
              <p
                className="text-text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {/* TODO: Replace with real team culture/ethos copy */}
                The culture at The Shack is rooted in authenticity. Every team
                member came to this business through a genuine love of coins,
                cards, or collectibles — not as an investment thesis, but as a
                passion. That shows in every stream.
              </p>
              <p
                className="text-text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-inter-body)" }}
              >
                {/* TODO: Replace with real copy about team values */}
                We operate with a bias toward transparency — with our
                customers, with our platforms, and with each other. If
                something goes wrong on a stream, we say so. If an item isn&apos;t
                what we expected, we make it right. That&apos;s not a policy.
                It&apos;s just how we operate.
              </p>
            </div>
          </div>
        </div>
        <GoldDivider />
      </section>
    </>
  );
}
