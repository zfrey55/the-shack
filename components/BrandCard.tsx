import Link from "next/link";
import type { BrandEntity } from "@/lib/data";
import PlatformBadge from "@/components/PlatformBadge";

interface BrandCardProps {
  brand: BrandEntity;
  href?: string;
}

export default function BrandCard({ brand, href = "/brands" }: BrandCardProps) {
  return (
    <div className="group relative bg-bg-secondary border border-gold-border rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] hover:border-gold-primary/50">
      {/* Top: badges */}
      <div className="flex flex-wrap gap-2">
        {brand.platforms.map((platform) => (
          <PlatformBadge key={platform} platform={platform} size="sm" />
        ))}
      </div>

      {/* Name */}
      <h3
        className="text-xl font-semibold text-gold-primary leading-snug"
        style={{ fontFamily: "var(--font-playfair-display)" }}
      >
        {brand.groupName}
      </h3>

      {/* Tagline */}
      <p
        className="text-sm font-medium text-white/80"
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {brand.tagline}
      </p>

      {/* Description */}
      <p
        className="text-sm text-text-muted leading-relaxed flex-1"
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {brand.description}
      </p>

      {/* Account names preview */}
      {brand.accounts.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {brand.accounts.map((account) => (
            <span
              key={account.name}
              className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5 text-text-muted"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              {account.name}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-2">
        {brand.externalUrl ? (
          <a
            href={brand.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-primary hover:text-gold-dark transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Visit {brand.externalUrl.replace("https://", "")} ↗
          </a>
        ) : (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-primary hover:text-gold-dark transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Learn More →
          </Link>
        )}
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
