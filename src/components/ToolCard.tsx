import type { Tool } from "@/lib/types";

interface ToolCardProps {
  tool: Tool;
  isVerdict?: boolean;
}

export function ToolCard({ tool, isVerdict }: ToolCardProps) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        isVerdict
          ? "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/20"
          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{tool.logo}</span>
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {tool.name}
            {isVerdict && (
              <span className="ml-2 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                ★ Recommended
              </span>
            )}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{tool.tagline}</p>
        </div>
      </div>

      <div className="flex gap-4 mb-4 text-sm">
        <div className="rounded-lg bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
          <span className="text-zinc-500">Free:</span>{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{tool.pricing.freePrice}</span>
        </div>
        <div className="rounded-lg bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
          <span className="text-zinc-500">Pro:</span>{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{tool.pricing.pro}</span>
        </div>
        <div className="rounded-lg bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
          <span className="text-zinc-500">Team:</span>{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{tool.pricing.team}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-400">✅ Pros</h4>
          <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            {tool.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-500">+</span> {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-red-700 dark:text-red-400">❌ Cons</h4>
          <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            {tool.cons.map((con) => (
              <li key={con} className="flex items-start gap-2">
                <span className="mt-0.5 text-red-500">−</span> {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">Key Features</h4>
        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {tool.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-blue-500">•</span> {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          Best for: <span className="font-medium text-zinc-700 dark:text-zinc-300">{tool.bestFor}</span>
        </span>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
            isVerdict
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          }`}
        >
          Try {tool.name} →
        </a>
      </div>
    </div>
  );
}
