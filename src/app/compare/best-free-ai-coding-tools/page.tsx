import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ToolCard } from "@/components/ToolCard";
import { Verdict } from "@/components/Verdict";
import { RelatedComparisons } from "@/components/RelatedComparisons";

export const metadata: Metadata = {
  title: "Best Free AI Coding Tools in 2026 (No Credit Card Required)",
  description:
    "The best free AI coding tools in 2026 that require no credit card. Cursor, Copilot, Cline, Codeium, Devin Desktop — which free tier is actually usable?",
};

export default function BestFreeAiCodingTools() {
  const allTools = [tools.cline, tools.codeium, tools.cursor, tools.copilot, tools.windsurf, tools.tabnine];
  const sortedTools = [...allTools].sort((a, b) => {
    // Sort by free tier generosity
    const freeScores: Record<string, number> = {
      cline: 5, codeium: 4, cursor: 3, copilot: 2, windsurf: 3, tabnine: 1
    };
    return (freeScores[b.id] || 0) - (freeScores[a.id] || 0);
  });

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <nav className="mb-6 text-sm text-zinc-500">
        <a href="/" className="hover:text-zinc-700 dark:hover:text-zinc-300">Home</a>
        <span className="mx-2">/</span>
        <span className="text-zinc-900 dark:text-zinc-100">Best Free AI Coding Tools</span>
      </nav>

      <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Best Free AI Coding Tools in 2026 (No Credit Card Required)
      </h1>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
        Every major AI coding tool offers a free tier, but they&apos;re not created equal. Some give you
        real AI power for $0. Others are so limited they&apos;re basically trials. We tested every free
        tier so you don&apos;t have to waste time on the useless ones.
      </p>
      <p className="mb-8 text-sm text-zinc-400">Last updated: July 6, 2026</p>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Ranked by Free Tier Value</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-zinc-200 dark:border-zinc-700">
                <th className="py-3 text-left font-semibold">Rank</th>
                <th className="py-3 text-left font-semibold">Tool</th>
                <th className="py-3 text-center font-semibold">Free Tier</th>
                <th className="py-3 text-left font-semibold">What You Actually Get</th>
                <th className="py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {sortedTools.map((tool, i) => (
                <tr key={tool.id} className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-3 font-bold text-zinc-500">{i + 1}</td>
                  <td className="py-3 font-medium"><span className="mr-2">{tool.logo}</span>{tool.name}</td>
                  <td className="py-3 text-center font-medium">{tool.pricing.freePrice}</td>
                  <td className="py-3 text-zinc-600 dark:text-zinc-400">
                    {tool.id === "cline" && "Fully autonomous agent. Bring your own API key or use a local model for zero cost."}
                    {tool.id === "codeium" && "Unlimited inline edits and tab completions. Limited AI chat and agent features."}
                    {tool.id === "cursor" && "Limited agent requests and tab completions. Enough to evaluate the tool."}
                    {tool.id === "copilot" && "Limited suggestions in editor. Full access for verified students and open-source maintainers."}
                    {tool.id === "windsurf" && "Unlimited inline edits and tab completions. Limited agent quota and model access."}
                    {tool.id === "tabnine" && "Basic completions only. No chat, no agents. Good for simple suggestions."}
                  </td>
                  <td className="py-3 text-zinc-600 dark:text-zinc-400 max-w-[200px] truncate">{tool.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-8">
        <h2 className="text-2xl font-bold">Free Tier Deep Dive</h2>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/20">
          <h3 className="mb-2 text-xl font-bold">🥇 Cline — Best Free AI Agent (Unlimited Potential)</h3>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Cline is free forever and the most capable AI coding agent on this list — IF you have an API key.
            With Anthropic&apos;s Claude or OpenAI&apos;s GPT, you get full autonomous coding: multi-file edits,
            terminal commands, web browsing. With a local model via Ollama, it&apos;s completely free with
            zero data leaving your machine. The catch: setup requires an API key and some configuration.
          </p>
          <a href={tools.cline.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            Try Cline Free →
          </a>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/20">
          <h3 className="mb-2 text-xl font-bold">🥈 Codeium — Best Free Completions (No Strings Attached)</h3>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Codeium&apos;s free tier gives you unlimited inline code completions across 40+ IDEs and 70+ languages.
            No credit card, no usage limits on basic completions. It&apos;s the easiest way to get AI coding
            assistance without paying anything. The AI chat and agent features are limited, but for
            day-to-day completions, Codeium free is genuinely useful.
          </p>
          <a href={tools.codeium.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Try Codeium Free →
          </a>
        </div>

        <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950/20">
          <h3 className="mb-2 text-xl font-bold">🥉 Cursor Free — Best Free Tier for Evaluating</h3>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Cursor&apos;s free tier lets you use Composer (their best feature) with limited requests. It&apos;s
            enough to evaluate whether Composer is worth $20/month for you. Not a long-term free option,
            but the best way to experience AI-first coding before committing financially.
          </p>
          <a href={tools.cursor.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700">
            Try Cursor Free →
          </a>
        </div>
      </section>

      <section className="mb-12 rounded-xl bg-zinc-50 p-8 dark:bg-zinc-900">
        <h2 className="mb-4 text-2xl font-bold">Our Recommendation</h2>
        <div className="space-y-4">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <strong>For most developers:</strong> Start with <strong>Codeium free</strong> for daily completions. It takes
            30 seconds to install and you&apos;ll immediately get better autocomplete in your existing IDE.
            No commitment, no credit card.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <strong>If you want to try AI-first coding:</strong> Download <strong>Cursor free</strong>. Use Composer for a week.
            If it transforms your workflow, $20/month is a no-brainer. If not, uninstall — no harm done.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <strong>If you&apos;re a power user with an API key:</strong> <strong>Cline</strong> is free, open source, and the most
            autonomous agent available. Pair it with Claude Sonnet 4 for the best experience, or use
            a local model for zero cost.
          </p>
        </div>
      </section>

      <Verdict
        tool={tools.cline}
        tools={allTools}
        context="For maximum free value, Cline wins — it's the most capable AI coding agent available for $0 (with your own API key or local model). For zero-effort free completions, Codeium is the best choice. For evaluating AI-first coding, Cursor's free tier is the perfect trial. Start with Codeium today — it takes 30 seconds."
      />


      {/* Try These Tools */}
      <section className="mb-12 rounded-xl bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <h2 className="mb-3 text-xl font-bold">Start Coding with AI for Free</h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Every tool on this list has a genuinely free tier. No credit card required.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://cline.bot" target="_blank" rel="noopener noreferrer nofollow" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">Try Cline (Free) →</a>
          <a href="https://codeium.com" target="_blank" rel="noopener noreferrer nofollow" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-800 border border-zinc-300 hover:border-zinc-400 transition-colors dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-700">Try Codeium (Free) →</a>
        </div>
      </section>

      {/* Related Comparisons */}
      <RelatedComparisons currentSlug="best-free-ai-coding-tools" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Best Free AI Coding Tools in 2026 (No Credit Card Required)", description: "Best free AI coding tools in 2026 ranked by free tier value. Cline, Codeium, Cursor, Copilot, Devin Desktop, Tabnine.", datePublished: "2026-07-06", dateModified: "2026-07-06", author: { "@type": "Organization", name: "VibeArticle" } }) }} />
    </div>
  );
}
