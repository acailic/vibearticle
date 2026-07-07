import { tools } from "@/lib/tools";
import { amazonLink, recommendedGear } from "@/lib/amazon";

interface DealItem {
  name: string;
  deal: string; // "Save $X", "Free Trial", "$X Credit"
  url: string;
  highlight?: boolean; // first/primary deal
}

export function getDeals(): DealItem[] {
  return [
    { name: "Cursor", deal: "Free Tier (200 AI requests/mo)", url: "https://cursor.sh", highlight: true },
    { name: "GitHub Copilot", deal: "Free for Students + Open Source", url: "https://github.com/features/copilot" },
    { name: "Railway", deal: "$5 Free Credit Every Month", url: "https://railway.com?referralCode=NgfyjC" },
    { name: "Vercel", deal: "Free Tier — Unlimited Sites", url: "https://vercel.com" },
    { name: "DigitalOcean", deal: "$200 Free Credit (60 Days)", url: "https://www.digitalocean.com" },
    { name: "Render", deal: "Free Tier — 750h/mo", url: "https://render.com" },
    { name: "Fly.io", deal: "Free Tier — 3 Shared VMs", url: "https://fly.io" },
    { name: "Netlify", deal: "Free — 100GB Bandwidth", url: "https://www.netlify.com" },
    { name: "Postman", deal: "Free Tier", url: "https://www.postman.com" },
    { name: "Continue", deal: "100% Free & Open Source", url: "https://continue.dev" },
    { name: "Cline", deal: "Free (Bring Your Own Key)", url: "https://cline.bot" },
    { name: "Sourcegraph Cody", deal: "Free — 200 Autocompletes/Day", url: "https://sourcegraph.com/cody" },
    { name: "Amazon Q Developer", deal: "Free for Individuals", url: "https://aws.amazon.com/q/developer/" },
  ];
}

export function DealsSection() {
  const deals = getDeals();

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">🏷️ Developer Tool Deals & Free Tiers</h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Every tool below has a free tier or trial. Start coding with AI today — no credit card required for most.
          </p>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal) => (
          <a
            key={deal.name}
            href={deal.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`group flex items-center justify-between rounded-xl border p-3 transition-all hover:shadow-md ${
              deal.highlight
                ? "border-emerald-300 bg-emerald-50 hover:border-emerald-400 dark:border-emerald-800 dark:bg-emerald-950/30 dark:hover:border-emerald-600"
                : "border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{deal.name}</span>
              {deal.highlight && (
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                  HOT
                </span>
              )}
            </div>
            <span className={`text-xs font-medium whitespace-nowrap ${
              deal.highlight
                ? "text-emerald-700 dark:text-emerald-400"
                : "text-zinc-600 dark:text-zinc-400"
            }`}>
              {deal.deal} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
