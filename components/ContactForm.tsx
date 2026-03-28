"use client";

import { useState, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const SUBJECT_OPTIONS = [
  { value: "general", label: "General Inquiry" },
  { value: "investor", label: "Investor or Partnership" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Connect to /api/contact route for form submission
    // Example:
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // if (res.ok) setStatus("success"); else setStatus("error");

    // Placeholder: simulate success after a short delay
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  const inputClass =
    "w-full bg-white/5 border border-gold-border rounded-lg px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-gold-primary focus:bg-white/8 transition-colors duration-200";

  if (status === "success") {
    return (
      <div className="bg-bg-secondary border border-gold-border rounded-xl p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3
          className="text-xl font-semibold text-gold-primary mb-2"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          Message Sent
        </h3>
        <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-inter-body)" }}>
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "general", message: "" }); }}
          className="mt-6 text-sm text-gold-primary hover:text-gold-dark transition-colors duration-200"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="bg-bg-secondary border border-gold-border rounded-xl p-8 flex flex-col gap-5"
      noValidate
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-[0.12em] text-text-muted mb-2 font-medium"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={inputClass}
          style={{ fontFamily: "var(--font-inter-body)" }}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-[0.12em] text-text-muted mb-2 font-medium"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className={inputClass}
          style={{ fontFamily: "var(--font-inter-body)" }}
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs uppercase tracking-[0.12em] text-text-muted mb-2 font-medium"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-bg-secondary text-white">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.12em] text-text-muted mb-2 font-medium"
          style={{ fontFamily: "var(--font-inter-body)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "var(--font-inter-body)" }}
        />
      </div>

      {/* Error state */}
      {status === "error" && (
        <p className="text-sm text-red-400" style={{ fontFamily: "var(--font-inter-body)" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gold-primary text-black font-semibold text-sm py-3.5 rounded-lg hover:bg-gold-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
        style={{ fontFamily: "var(--font-inter-body)" }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
