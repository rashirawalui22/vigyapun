'use client';

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: null, message: "" });

    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and a short message.",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Thank you—your message is on its way. We’ll reply soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-xs font-medium text-brand-black"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className="block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-brand-black shadow-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-yellow-dark focus:ring-2 focus:ring-brand-yellow-dark focus:ring-offset-2 focus:ring-offset-background"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-medium text-brand-black"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className="block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-brand-black shadow-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-yellow-dark focus:ring-2 focus:ring-brand-yellow-dark focus:ring-offset-2 focus:ring-offset-background"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="text-xs font-medium text-brand-black"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-brand-black shadow-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-yellow-dark focus:ring-2 focus:ring-brand-yellow-dark focus:ring-offset-2 focus:ring-offset-background"
          />
          <p className="text-xs text-neutral-500">
            Share any links, timelines, and rough budget if you have them—it
            helps us respond with the right level of detail.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-brand-black px-6 py-2.5 text-sm font-semibold text-brand-cream shadow-sm transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
        <p className="hidden text-[11px] text-neutral-500 sm:block">
          We&apos;ll never share your details with third parties.
        </p>
      </div>

      <p
        aria-live="polite"
        className={`min-h-5 text-xs ${
          status.type === "success"
            ? "text-emerald-600"
            : status.type === "error"
            ? "text-red-600"
            : "text-neutral-600"
        }`}
      >
        {status.message}
      </p>
    </form>
  );
}

