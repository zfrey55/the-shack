import type { Stat } from "@/lib/data";

interface StatTileProps extends Stat {
  className?: string;
}

export default function StatTile({ value, label, className = "" }: StatTileProps) {
  return (
    <div className={`flex flex-col items-center text-center px-6 py-8 ${className}`}>
      <span
        className="text-4xl lg:text-5xl font-bold text-gold-primary leading-none mb-2"
        style={{ fontFamily: "var(--font-playfair-display)" }}
      >
        {value}
      </span>
      <span
        className="text-sm text-text-muted font-medium leading-snug max-w-[140px]"
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {label}
      </span>
    </div>
  );
}
