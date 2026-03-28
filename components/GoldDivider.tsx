interface GoldDividerProps {
  className?: string;
  opacity?: number;
}

export default function GoldDivider({ className = "", opacity = 1 }: GoldDividerProps) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-gold-primary to-transparent ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
