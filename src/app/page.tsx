import Link from "next/link";
import { tools, comparisons } from "@/lib/tools";
import { ComparisonTable } from "@/components/ComparisonTable";
import { recommendedGear, amazonLink } from "@/lib/amazon";
import { DealsSection } from "@/components/DealsSection";
import { SubmitTool } from "@/components/SubmitTool";

export default function Home() {
  const aiTools = [tools.cursor, tools.copilot, tools.windsurf, tools.cline, tools.codeium, tools.tabnine, tools.continue_dev, tools.cody, tools.codewhisperer];
  const hostingTools = [tools.vercel, tools.railway, tools.netlify, tools.render, tools.flyio, tools.digitalocean];
  const devTools = [tools.postman, tools.ngrok];
  const sortedAi = [...aiTools].sort((a, b) => b.rating - a.rating);
  const sortedHosting = [...hostingTools].sort((a, b) => b.rating - a.rating);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Best AI Coding Tools, Hosting & Dev Gear Compared
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Independent comparisons and reviews of AI coding tools, deployment platforms,
          hosting services, and developer gear. We test them, rate them, and help you pick — updated July 2026.
        </p>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold">What We Review</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="text-2xl">🤖</span>
            <h3 className="mt-2 font-bold text-sm">AI Coding Assistants</h3>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
              Cursor, Copilot, Devin Desktop, Cline, Codeium, Tabnine, Continue, Cody, Amazon Q — which AI pair programmer is right for your workflow? We compare pricing, features, privacy, and real-world performance.
            </p>
            <Link href="/compare/best-ai-coding-tools" className="mt-3 inline-block text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
              Compare all AI tools →
            </Link>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="text-2xl">🚀</span>
            <h3 className="mt-2 font-bold text-sm">Hosting & Deployment</h3>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
              Vercel, Railway, Netlify, Render, Fly.io, DigitalOcean — where should you deploy your next project? We compare free tiers, pricing at scale, databases, and developer experience.
            </p>
            <Link href="/compare/best-hosting-for-developers" className="mt-3 inline-block text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
              Compare hosting →
            </Link>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="text-2xl">💻</span>
            <h3 className="mt-2 font-bold text-sm">Developer Gear</h3>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
              Monitors, keyboards, mice, laptop stands, and portable SSDs — the hardware that makes a real difference for developers who code 8+ hours a day.
            </p>
            <a href={amazonLink("dp/B08995HDG7")} target="_blank" rel="noopener noreferrer nofollow" className="mt-3 inline-block text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
              See our picks →
            </a>
          </div>
        </div>
      </section>

      {/* AI Coding Tools Quick Compare */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold">🔥 Best AI Coding Tools — Quick Compare</h2>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          AI coding tools have exploded in 2026. Every major vendor offers an AI pair programmer — but they are not equal.
          Some excel at multi-file editing, others at inline completions, and some prioritize privacy with local models.
          Here is how the top 4 compare side by side.
        </p>
        <ComparisonTable tools={[tools.cursor, tools.copilot, tools.cline, tools.windsurf]} verdictId="cursor" />
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/compare/best-ai-coding-tools" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Full Rankings (9 tools) →
          </Link>
          <Link href="/compare/cursor-vs-copilot-vs-cline-vs-devin" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            4-Way Showdown →
          </Link>
          <Link href="/compare/best-free-ai-coding-tools" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Best Free AI Tools →
          </Link>
          <Link href="/compare/cursor-vs-copilot" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Cursor vs Copilot →
          </Link>
          <Link href="/compare/cursor-free-vs-pro" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Cursor Free vs Pro →
          </Link>
          <Link href="/compare/cursor-vs-windsurf" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Cursor vs Devin Desktop →
          </Link>
        </div>
      </section>

      {/* Hosting Quick Compare */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold">🚀 Best Hosting for Developers — Quick Compare</h2>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          Choosing a hosting platform depends on what you are building. Frontend static sites? Vercel or Netlify.
          Full-stack with databases? Railway. Budget shared hosting? Hostinger.
          We compare the top platforms so you can pick the right one for your project.
        </p>
        <ComparisonTable tools={hostingTools} verdictId="vercel" />
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/compare/best-hosting-for-developers" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Full Rankings →
          </Link>
          <Link href="/compare/vercel-vs-railway" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Vercel vs Railway →
          </Link>
          <Link href="/compare/vercel-vs-netlify" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Vercel vs Netlify →
          </Link>
          <Link href="/compare/railway-vs-render" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
            Railway vs Render →
          </Link>
        </div>
      </section>

      {/* All Comparison Pages */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">All Tool Comparisons</h2>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          Deep-dive comparisons with pricing breakdowns, feature analysis, and clear verdicts. Every comparison is updated monthly.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/compare/cursor-vs-copilot", title: "Cursor vs GitHub Copilot", desc: "The two biggest AI coding tools compared — pricing, features, multi-file editing" },
            { href: "/compare/cursor-vs-copilot-vs-cline-vs-devin", title: "Cursor vs Copilot vs Cline vs Devin", desc: "4-way AI tool showdown — the definitive comparison" },
            { href: "/compare/cursor-vs-copilot-vs-cline", title: "Cursor vs Copilot vs Cline", desc: "Three-way AI tool showdown — commercial vs giant vs open source" },
            { href: "/compare/cursor-free-vs-pro", title: "Cursor Free vs Pro", desc: "Is the $20/month upgrade worth it? Request limits, features, alternatives" },
            { href: "/compare/cursor-vs-windsurf", title: "Cursor vs Devin Desktop", desc: "Best AI-first IDE vs agentic platform with local + cloud agents" },
            { href: "/compare/cursor-vs-cline", title: "Cursor vs Cline", desc: "Commercial IDE vs open source autonomous agent" },
            { href: "/compare/copilot-vs-codeium", title: "Copilot vs Codeium", desc: "Best-in-class vs best free tier — which should you pick?" },
            { href: "/compare/vercel-vs-railway", title: "Vercel vs Railway", desc: "Frontend deployment vs full-stack with built-in databases" },
            { href: "/compare/railway-vs-render", title: "Railway vs Render", desc: "Metered vs flat pricing — which full-stack platform wins?" },
            { href: "/compare/vercel-vs-netlify", title: "Vercel vs Netlify", desc: "The JAMstack deployment battle — build speed, pricing, features" },
            { href: "/compare/best-ai-coding-tools", title: "Best AI Coding Tools 2026", desc: "All 9 tools ranked and compared with verdicts" },
            { href: "/compare/best-free-ai-coding-tools", title: "Best Free AI Tools", desc: "No credit card required — free tiers ranked by value" },
            { href: "/compare/best-hosting-for-developers", title: "Best Hosting for Developers", desc: "Vercel, Railway, Netlify, Render, Fly.io, DigitalOcean ranked" },
            { href: "/compare/best-laptop-for-coding", title: "Best Laptops for Coding 2026", desc: "MacBook, ThinkPad, Framework, Dell — tested and ranked" },
            { href: "/compare/best-monitor-for-programmers", title: "Best Monitors for Programmers", desc: "4K, ultrawide, portable monitors compared for coding" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
            >
              <h3 className="mb-1 text-sm font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">All Tools We Review</h2>
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">AI Coding Assistants</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedAi.map((tool) => (
              <div key={tool.id} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl">{tool.logo}</span>
                  <div>
                    <span className="font-bold text-sm">{tool.name}</span>
                    <span className="ml-2 text-xs text-zinc-500">{tool.rating}/5</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{tool.pricing.pro} Pro</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{tool.tagline}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">Hosting & Deployment</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedHosting.map((tool) => (
              <div key={tool.id} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl">{tool.logo}</span>
                  <div>
                    <span className="font-bold text-sm">{tool.name}</span>
                    {tool.affiliateProgram && (
                      <span className="ml-2 rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                        AFFILIATE
                      </span>
                    )}
                    <span className="ml-2 text-xs text-zinc-500">{tool.rating}/5</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{tool.pricing.pro} Pro</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{tool.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Gear */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold">💻 Recommended Developer Gear</h2>
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          We spend 8+ hours a day at our desks. The right gear makes a measurable difference in comfort, productivity, and long-term health.
          Every product below is something we have tested or use daily. As an Amazon Associate we earn from qualifying purchases — at no extra cost to you.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedGear.map((product) => (
            <a
              key={product.path}
              href={amazonLink(product.path)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-emerald-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-600"
            >
              <h3 className="mb-1 text-sm font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {product.name}
              </h3>
              <p className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">{product.reason}</p>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{product.price} on Amazon →</span>
            </a>
          ))}
        </div>
        <a href={amazonLink("s?k=developer+gear&i=electronics")} target="_blank" rel="noopener noreferrer nofollow" className="mt-4 inline-block text-xs font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400">
          Browse more developer gear on Amazon →
        </a>
      </section>

      {/* Deals & Free Tiers */}
      <DealsSection />

      {/* Submit Your Tool */}
      <SubmitTool />

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold">How do you test and rate developer tools?</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We use each tool for at least 2-4 weeks on real projects before writing a review. We evaluate pricing, features, performance on large codebases, developer experience, privacy, and support. Ratings are based on a weighted score across these categories.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Are your reviews independent?</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Yes. Some links on this site are affiliate links — we earn a small commission if you sign up or make a purchase through them. However, our ratings and verdicts are based entirely on our own testing and are not influenced by affiliate partnerships.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Which AI coding tool is best for beginners?</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              For developers new to AI-assisted coding, we recommend starting with <Link href="/compare/cursor-vs-copilot" className="text-emerald-600 dark:text-emerald-400 underline">Cursor</Link> for the best overall experience, or <Link href="/compare/best-free-ai-coding-tools" className="text-emerald-600 dark:text-emerald-400 underline">Cline</Link> if you want a completely free, open-source option. Both have gentle learning curves and generous free tiers.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Which hosting platform should I use?</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              It depends on your project. Use <Link href="/compare/vercel-vs-railway" className="text-emerald-600 dark:text-emerald-400 underline">Vercel</Link> for frontend apps and Next.js. Use Railway for full-stack projects that need databases. Use Hostinger if you are on a tight budget and need shared hosting with a domain included. See our <Link href="/compare/best-hosting-for-developers" className="text-emerald-600 dark:text-emerald-400 underline">full hosting comparison</Link> for details.
            </p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="rounded-xl bg-zinc-50 p-8 dark:bg-zinc-900">
        <h2 className="mb-3 text-xl font-bold">About VibeArticle</h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          VibeArticle is an independent resource for developers comparing developer tools, hosting platforms, and gear.
          We do hands-on testing, compare real pricing, and give honest verdicts. Our content is updated regularly
          to reflect changes in pricing, features, and the competitive landscape. Some links are affiliate links —
          we earn a small commission at no cost to you. This does not influence our reviews.
        </p>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "VibeArticle",
            url: "https://vibearticle.app",
            description: "Independent comparisons of AI coding tools, hosting platforms, and developer gear.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://vibearticle.app/compare/best-ai-coding-tools",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}
