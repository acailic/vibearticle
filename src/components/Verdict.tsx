import type { Tool } from "@/lib/types";

interface VerdictProps {
  tool: Tool;
  tools: Tool[];
  context?: string;
}

export function Verdict({ tool, tools, context }: VerdictProps) {
  const losers = tools.filter((t) => t.id !== tool.id);
  return (
    <div className="rounded-xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 dark:border-emerald-700 dark:from-emerald-950/30 dark:to-zinc-900">
      <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        <span className="text-3xl">🏆</span> Our Verdict: {tool.name}
      </h2>
      {context && (
        <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {context}
        </p>
      )}
      <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong className="text-emerald-700 dark:text-emerald-400">{tool.name}</strong> wins
        because it offers the best overall combination of AI power, developer experience,
        and value for money. With a {tool.rating}/5 rating, it leads in core areas that
        matter most: codebase understanding, multi-file AI agent capabilities, and
        real-world productivity gains.
        {losers.length > 0 && (
          <>
            {" "}
            While {losers.map((l) => l.name).join(" and ")}
            {losers.length > 1 ? " are" : " is"} solid{" "}
            {losers.length > 1 ? "alternatives" : "alternative"},{" "}
            {tool.name} pulls ahead in{" "}
            {tool.pros[0]?.toLowerCase() || "overall quality"}.
          </>
        )}
      </p>
      <a
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        Try {tool.name} Now — Free {tool.pricing.free ? "to Start" : "Trial"} →
      </a>
    </div>
  );
}
