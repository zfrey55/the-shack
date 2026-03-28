import type { HowItWorksStep as StepData } from "@/lib/data";

interface HowItWorksStepProps extends StepData {
  isLast?: boolean;
}

export default function HowItWorksStep({
  step,
  title,
  description,
  icon,
  isLast = false,
}: HowItWorksStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Step number circle */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-2 border-gold-primary flex items-center justify-center bg-bg-primary group-hover:bg-gold-primary/10 transition-colors duration-300">
          <span
            className="text-gold-primary text-xl font-bold"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            {step}
          </span>
        </div>
        {/* Icon badge */}
        <div className="absolute -top-1 -right-1 w-7 h-7 bg-bg-secondary rounded-full flex items-center justify-center text-sm border border-gold-border">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3
        className="text-xl font-semibold text-gold-primary mb-3"
        style={{ fontFamily: "var(--font-playfair-display)" }}
      >
        {title}
      </h3>
      <p
        className="text-text-muted text-sm leading-relaxed max-w-xs"
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {description}
      </p>

      {/* Connector line (hidden on last item) — shown on desktop */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-gold-primary/40 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
