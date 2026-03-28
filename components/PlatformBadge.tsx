import type { PlatformBadge as BadgeType } from "@/lib/data";

interface PlatformBadgeProps {
  platform: BadgeType;
  size?: "sm" | "md";
}

const PLATFORM_CONFIG: Record<
  BadgeType,
  { icon: string; label: string; colorClass: string; borderClass: string }
> = {
  Whatnot: {
    icon: "🎙️",
    label: "Whatnot",
    colorClass: "text-white",
    borderClass: "border-white/20",
  },
  "eBay Live": {
    icon: "🔴",
    label: "eBay Live",
    colorClass: "text-blue-accent",
    borderClass: "border-blue-accent/30",
  },
  Manufacturing: {
    icon: "🏭",
    label: "Manufacturing & Products",
    colorClass: "text-gold-primary",
    borderClass: "border-gold-primary/30",
  },
};

export default function PlatformBadge({ platform, size = "md" }: PlatformBadgeProps) {
  const config = PLATFORM_CONFIG[platform];
  const sizeClasses = size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-3 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border bg-white/5 font-medium ${sizeClasses} ${config.colorClass} ${config.borderClass}`}
      style={{ fontFamily: "var(--font-inter-body)" }}
    >
      <span aria-hidden="true">{config.icon}</span>
      {config.label}
    </span>
  );
}
