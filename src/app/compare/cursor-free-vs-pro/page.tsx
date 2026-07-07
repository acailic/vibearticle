import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ToolCard } from "@/components/ToolCard";
import { Verdict } from "@/components/Verdict";
import { RelatedComparisons } from "@/components/RelatedComparisons";

export const metadata: Metadata = {
  title: "Cursor Free vs Pro (2026) — Is $20/month Worth the Upgrade?",
  description:
    "Detailed breakdown of Cursor Free vs Pro: AI request limits, features, slow/fast premium models, and whether upgrading from free to $20/month is worth it.",
};

export default function CursorFreeVsPro() {
  const cursor = tools.cursor;
  const copilot = tools.copilot;
  const codeium = tools.codeium;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <nav className="mb-6 text-sm text-zinc-500">
        <a href="/" className="hover:text-zinc-700 dark:hover:text-zinc-300">Home</a>
        <span className="mx-2">/</span>
        <span className="text-zinc-900 dark:text-zinc-100">Cursor Free vs Pro</span>
      </nav>

      <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Cursor Free vs Pro: Is the $20/month Upgrade Worth It?
      </h1>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
        Cursor offers a generous free tier that lets you evaluate the tool thoroughly. But is it enough for daily
        development? We break down exactly what you get for free, what the Pro upgrade unlocks, and whether
        $20/month is justified for your workflow. We also compare with GitHub Copilot ($10/mo) and Codeium (free)
        so you can see if Cursor Pro is worth it relative to alternatives.
      </p>
      <p className="mb-8 text-sm text-zinc-400">Last updated: July 7, 2026</p>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Cursor Free vs Pro — What Changes</h2>
        <ComparisonTable tools={[cursor, copilot, codeium]} verdictId="cursor" />
      </section>

      <section className="mb-12 space-y-8">
        <h2 className="text-2xl font-bold">Detailed Breakdown</h2>

        <div>
          <h3 className="mb-3 text-xl font-semibold">What You Get on Cursor Free</h3>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Cursor Free gives you 200 slow premium AI requests and 50 fast premium AI requests per month with the
            latest models (Claude 4 Sonnet, GPT-4o). You also get unlimited slower requests with the basic model.
            All core features work: Composer for multi-file edits, codebase indexing, chat, and tab completions.
            The main limitation is request count — if you hit your monthly quota, you are either waiting for slow
            responses or paying. For light use (a few AI assists per day), the free tier is surprisingly usable.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">What Pro Unlocks at $20/month</h3>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Pro removes all limits: 500 fast premium requests per month (up to 500 with Claude 4 Sonnet), unlimited slow
            premium requests, and access to the best models without throttling. You also get access to Composer
            background mode, which runs AI edits asynchronously while you continue coding. For developers who use
            AI assistance 20+ times per day, Pro is essential. The difference in speed alone — fast responses vs
            slow responses — is significant for maintaining flow state.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">Cost Comparison with Alternatives</h3>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <strong>Cursor Pro at $20/mo</strong> is the most expensive of the three main options. <strong>GitHub Copilot at
            $10/mo</strong> is half the price with generous limits. <strong>Codeium is completely free</strong> with unlimited
            inline completions. However, Cursor Pro offers the best AI experience — Composer is more capable than
            Copilot Edits, and the codebase understanding is deeper. The question is not &quot;is Cursor worth $20?&quot;
            but &quot;is Cursor $10 better than Copilot?&quot; For most developers who heavily use AI: yes.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">The Hidden Cost: API Usage on Free</h3>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Many developers do not realize that the &quot;free&quot; tier is designed for evaluation, not daily work. Once you
            hit 200 slow requests, every subsequent AI interaction is noticeably slower. This breaks your flow state
            and defeats the purpose of an AI coding assistant. If you find yourself waiting for responses or counting
            requests, it is time to upgrade. Alternatively, consider Cline with Claude Haiku at $2-5/month — cheaper
            than Cursor Pro but requires more setup.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold">Can I try Pro before committing?</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Yes. Cursor offers a 14-day free trial of Pro. You get full Pro features during the trial with no credit
              card required. This is the best way to decide if the upgrade is worth it for your specific workflow.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Does the free tier include Composer?</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Yes! Composer multi-file editing works on the free tier. The difference is speed: Pro gets fast responses,
              Free gets slow responses. Functionally, both tiers have the same features.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">What happens when I run out of free requests?</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              You can continue using Cursor with unlimited slow (basic model) requests, or wait for the monthly reset.
              There is no hard paywall — Cursor remains usable, just slower. You can also upgrade mid-month
              and the cost is prorated.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Is Cursor Pro tax-deductible?</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              In most jurisdictions, yes — Cursor Pro qualifies as a professional software development expense. $20/month
              is $240/year, which is a legitimate business deduction if you use it for work. Consult your accountant
              for specific tax advice.
            </p>
          </div>
        </div>
      </section>

      <Verdict
        tool={cursor}
        tools={[cursor, copilot, codeium]}
        context="Cursor Pro is worth $20/month if you use AI coding assistance daily. The speed difference, Composer background mode, and unlimited premium requests make a measurable impact on productivity. If you use AI less than 10 times per day, the free tier is sufficient. If you want a cheaper alternative, GitHub Copilot at $10/month is a solid option, and Codeium is free if you only need completions."
      />

      <section className="mb-12 rounded-xl bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <h2 className="mb-3 text-xl font-bold">Try Cursor Free — No Credit Card</h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Start with the free tier. If you love it, upgrade to Pro with a 14-day trial.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer nofollow" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">Try Cursor Free →</a>
          <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer nofollow" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-800 border border-zinc-300 hover:border-zinc-400 transition-colors dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-700">Compare with Copilot ($10/mo) →</a>
        </div>
      </section>

      <RelatedComparisons currentSlug="cursor-free-vs-pro" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cursor Free vs Pro (2026) — Is $20/month Worth the Upgrade?",
            description: "Detailed breakdown of Cursor Free vs Pro pricing, request limits, features, and whether upgrading is worth it.",
            datePublished: "2026-07-07",
            dateModified: "2026-07-07",
            author: { "@type": "Organization", name: "VibeArticle" },
          }),
        }}
      />
    </div>
  );
}
