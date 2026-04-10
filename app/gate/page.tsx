"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GatePage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError("Incorrect password");
        setPassword("");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-md w-full mx-auto px-6 text-center">
        {/* Logo / Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gold-primary mb-3"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          The Shack
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 bg-gold-primary/40" />
          <p
            className="text-xs uppercase tracking-[0.3em] text-text-muted font-medium"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            Under Construction
          </p>
          <span className="h-px w-8 bg-gold-primary/40" />
        </div>

        <p
          className="text-text-muted text-sm leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          We&apos;re building something new. If you have the password, enter it
          below to preview the site.
        </p>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              className="w-full px-5 py-3.5 bg-[#0D0D0D] border border-gold-border rounded-md text-white text-sm placeholder:text-text-muted/60 focus:outline-none focus:border-gold-primary transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter-body)" }}
            />
          </div>

          {error && (
            <p
              className="text-red-400 text-xs"
              style={{ fontFamily: "var(--font-inter-body)" }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full px-5 py-3.5 bg-gold-primary text-black font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-inter-body)" }}
          >
            {loading ? "Verifying..." : "Enter Site"}
          </button>
        </form>
      </div>
    </div>
  );
}
