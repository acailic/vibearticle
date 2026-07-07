import type { Tool } from "@/lib/types";

interface ComparisonTableProps {
  tools: Tool[];
  verdictId?: string;
}

export function ComparisonTable({ tools, verdictId }: ComparisonTableProps) {
  const features = [
    "Pricing (Pro)",
    "Free Tier",
    "IDE Support",
    "AI Chat",
    "Multi-file Agent",
    "Codebase Context",
    "Privacy",
    "Best For",
  ];

  function getFeatureValue(tool: Tool, feature: string): string {
    switch (feature) {
      case "Pricing (Pro)":
        return tool.pricing.pro;
      case "Free Tier":
        return tool.pricing.free ? `✅ ${tool.pricing.freePrice}` : "❌";
      case "IDE Support":
        if (["cursor", "windsurf"].includes(tool.id)) return "Built-in IDE only";
        if (tool.id === "cline") return "VS Code extension";
        return "All major IDEs";
      case "AI Chat":
        if (["cline", "tabnine"].includes(tool.id)) return "⚠️ Basic";
        return "✅ Full featured";
      case "Multi-file Agent":
        if (tool.id === "cursor") return "✅ Composer";
        if (tool.id === "windsurf") return "✅ Cascade";
        if (tool.id === "copilot") return "✅ Copilot Edits";
        if (tool.id === "cline") return "✅ Fully autonomous";
        return "⚠️ Limited";
      case "Codebase Context":
        if (["cursor", "windsurf"].includes(tool.id)) return "✅ Full indexing";
        if (tool.id === "copilot") return "✅ Workspace";
        if (tool.id === "cline") return "✅ Deep";
        return "⚠️ Partial";
      case "Privacy":
        if (["tabnine", "cline"].includes(tool.id)) return "✅ Local / self-host";
        return "⚠️ Cloud-based";
      case "Best For":
        return tool.bestFor;
      default:
        return "—";
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-zinc-200 dark:border-zinc-700">
            <th className="py-3 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">
              Feature
            </th>
            {tools.map((t) => (
              <th
                key={t.id}
                className={`py-3 px-4 text-center ${
                  verdictId === t.id
                    ? "bg-emerald-50 dark:bg-emerald-950/30"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{t.logo}</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{t.name}</span>
                  {verdictId === t.id && (
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                      ★ Our Pick
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr
              key={feature}
              className="border-b border-zinc-100 dark:border-zinc-800"
            >
              <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">
                {feature}
              </td>
              {tools.map((t) => (
                <td
                  key={t.id}
                  className={`py-3 px-4 text-center text-zinc-600 dark:text-zinc-400 ${
                    verdictId === t.id ? "bg-emerald-50 dark:bg-emerald-950/30" : ""
                  }`}
                >
                  {getFeatureValue(t, feature)}
                </td>
              ))}
            </tr>
          ))}
          {/* Rating row */}
          <tr className="border-b-2 border-zinc-200 dark:border-zinc-700">
            <td className="py-3 pr-4 font-semibold text-zinc-900 dark:text-zinc-100">
              Rating
            </td>
            {tools.map((t) => (
              <td
                key={t.id}
                className={`py-3 px-4 text-center font-bold ${
                  verdictId === t.id
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
                    : "text-zinc-900 dark:text-zinc-100"
                }`}
              >
                {t.rating}/5 ⭐
              </td>
            ))}
          </tr>
          {/* CTA row */}
          <tr>
            <td className="py-3 pr-4"></td>
            {tools.map((t) => (
              <td
                key={t.id}
                className={`py-3 px-4 text-center ${
                  verdictId === t.id ? "bg-emerald-50 dark:bg-emerald-950/30" : ""
                }`}
              >
                <a
                  href={t.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    verdictId === t.id
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                  }`}
                >
                  {t.pricing.free ? `Try ${t.name} Free →` : `Try ${t.name} →`}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
