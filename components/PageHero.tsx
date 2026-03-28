interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-bg-primary overflow-hidden">
      {/* Subtle radial background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <p
          className="text-xs uppercase tracking-[0.25em] text-text-muted mb-4 font-medium"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          The Shack
        </p>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-primary leading-tight"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          {title}
        </h1>

        {/* Gold underline */}
        <div className="flex justify-center mt-5">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
        </div>

        {subtitle && (
          <p
            className="mt-6 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            {subtitle}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
