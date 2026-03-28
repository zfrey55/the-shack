import type { TeamMember } from "@/lib/data";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-bg-secondary border border-gold-border rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] hover:border-gold-primary/50">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-white/5 border-2 border-gold-border flex items-center justify-center overflow-hidden group-hover:border-gold-primary/50 transition-colors duration-300">
        {member.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.avatarUrl}
            alt={`${member.name} avatar`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl text-text-muted">👤</span>
        )}
      </div>

      {/* Name */}
      <div>
        <h3
          className="text-lg font-semibold text-white"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          {member.name}
        </h3>
        <p
          className="text-xs uppercase tracking-[0.12em] text-gold-primary mt-1 font-medium"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          {member.title}
        </p>
      </div>

      {/* Bio */}
      <p
        className="text-sm text-text-muted leading-relaxed"
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {member.bio}
      </p>
    </div>
  );
}
