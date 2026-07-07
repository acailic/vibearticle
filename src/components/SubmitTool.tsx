"use client";

import { useState } from "react";

export function SubmitTool() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", url: "", category: "ai-tool", email: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would POST to an API route
    // For now, we'll use a mailto link as a simple fallback
    const subject = encodeURIComponent(`Tool Submission: ${formData.name}`);
    const body = encodeURIComponent(
      `Tool Name: ${formData.name}\nURL: ${formData.url}\nCategory: ${formData.category}\nSubmitter Email: ${formData.email}\n\nSubmitted via vibearticle.app`
    );
    window.open(`mailto:hello@vibearticle.app?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section className="mb-16 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 dark:from-emerald-950/30 dark:to-teal-950/30">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">📤 Submit Your Tool</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Built a developer tool? Get it reviewed and listed on VibeArticle.
            We add every qualifying tool to our comparison database — giving you exposure to thousands of developers
            searching for tools every month. Free inclusion, no strings attached.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="mt-6 rounded-lg bg-emerald-100 p-4 dark:bg-emerald-900/50">
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
            ✅ Submission received! We review tools within 5 business days.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-700 dark:text-zinc-300">Tool Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Cursor"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-700 dark:text-zinc-300">Website URL</label>
            <input
              type="url"
              required
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="https://your-tool.com"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-700 dark:text-zinc-300">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              <option value="ai-tool">AI Coding Tool</option>
              <option value="hosting">Hosting / Deployment</option>
              <option value="dev-tool">Dev Productivity Tool</option>
              <option value="dev-gear">Developer Gear</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-700 dark:text-zinc-300">Your Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Submit Tool for Review →
            </button>
          </div>
        </form>
      )}

      <p className="mt-4 text-xs text-zinc-400">
        Free listings for all qualifying tools. Sponsored placements available for premium visibility.
        Email <a href="mailto:hello@vibearticle.app" className="text-emerald-600 dark:text-emerald-400 underline">hello@vibearticle.app</a> for details.
      </p>
    </section>
  );
}
