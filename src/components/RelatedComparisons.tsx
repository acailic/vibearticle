import Link from "next/link";

interface RelatedComparisonsProps {
  currentSlug: string;
}

const comparisonLinks = [
  { href: "/compare/cursor-vs-copilot", title: "Cursor vs GitHub Copilot", desc: "The two biggest AI coding tools compared" },
  { href: "/compare/cursor-vs-copilot-vs-cline", title: "Cursor vs Copilot vs Cline", desc: "Three-way AI tool showdown" },
  { href: "/compare/cursor-free-vs-pro", title: "Cursor Free vs Pro", desc: "Is $20/month worth the upgrade?" },
  { href: "/compare/cursor-vs-windsurf", title: "Cursor vs Devin Desktop", desc: "Best AI-first IDE vs agentic platform" },
  { href: "/compare/cursor-vs-cline", title: "Cursor vs Cline", desc: "Commercial IDE vs open source agent" },
  { href: "/compare/copilot-vs-codeium", title: "Copilot vs Codeium", desc: "Best-in-class vs best free tier" },
  { href: "/compare/vercel-vs-railway", title: "Vercel vs Railway", desc: "Frontend vs full-stack deployment" },
  { href: "/compare/vercel-vs-netlify", title: "Vercel vs Netlify", desc: "The JAMstack deployment battle" },
  { href: "/compare/railway-vs-render", title: "Railway vs Render", desc: "Metered vs flat pricing showdown" },
  { href: "/compare/best-ai-coding-tools", title: "Best AI Coding Tools 2026", desc: "All 9 tools ranked and compared" },
  { href: "/compare/best-free-ai-coding-tools", title: "Best Free AI Tools", desc: "No credit card required" },
  { href: "/compare/best-hosting-for-developers", title: "Best Hosting for Developers", desc: "Vercel, Railway, Netlify, Render ranked" },
  { href: "/compare/best-laptop-for-coding", title: "Best Laptops for Coding 2026", desc: "MacBook, ThinkPad, Framework compared" },
  { href: "/compare/best-monitor-for-programmers", title: "Best Monitors for Programmers", desc: "4K, ultrawide, portable — eye comfort matters" },
];

export function RelatedComparisons({ currentSlug }: RelatedComparisonsProps) {
  const related = comparisonLinks.filter((c) => !c.href.includes(currentSlug)).slice(0, 4);

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold">Related Comparisons</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {related.map((item) => (
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
  );
}
