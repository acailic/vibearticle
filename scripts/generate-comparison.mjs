#!/usr/bin/env node

/**
 * generate-comparison.mjs
 * Generates a new VibeArticle comparison page from tool data + optional Groq LLM.
 * Run: node scripts/generate-comparison.mjs
 * Env:  GROQ_API_KEY (optional — enhances content with LLM-generated analysis)
 */

import { readFile, writeFile, mkdir } from "fs/promises";
import { execSync } from "child_process";
import path from "path";

const BASE_DIR = process.cwd();

// ── Groq API ──────────────────────────────────────────────────────────
async function callGroq(prompt) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 3000,
      messages: [
        {
          role: "system",
          content:
            "You are a technical writer for VibeArticle, a developer tools review site. " +
            "Write naturally, be specific about features and pricing, avoid generic filler. " +
            "Use concrete details from the tool data provided.",
        },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) {
    throw new Error(`Groq API error: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return JSON.parse(data.choices[0].message.content);
}

// ── Template-based content (fallback when no Groq) ────────────────────
function generateTemplateContent(comparison, toolsList, verdictTool) {
  const [t1, t2, ...rest] = toolsList;

  const analysis = [
    {
      title: `The Core Difference: ${t1.name} vs ${t2.name}`,
      paragraphs: [
        `${t1.name} is ${t1.tagline.toLowerCase()}. ${t2.name} is ${t2.tagline.toLowerCase()}. ` +
          `These two tools approach AI-assisted coding from fundamentally different angles. ` +
          `Understanding this distinction is key to picking the right one for your workflow.`,
      ],
    },
    {
      title: "Pricing Comparison",
      paragraphs: [
        `${t1.name} offers a Pro plan at ${t1.pricing.pro}${t1.pricing.free ? ` with a free tier (${t1.pricing.freePrice})` : " with no free tier"}. ` +
          `${t2.name} Pro costs ${t2.pricing.pro}${t2.pricing.free ? ` and also has a free tier (${t2.pricing.freePrice})` : " with no free tier"}. ` +
          `For teams, ${t1.name} charges ${t1.pricing.team} while ${t2.name} charges ${t2.pricing.team}.`,
      ],
    },
    {
      title: "Key Features",
      paragraphs: [
        `${t1.name} excels at ${t1.pros[0]?.toLowerCase() || "AI-assisted coding"}. ` +
          `Its standout features include ${t1.features.slice(0, 3).join(", ").toLowerCase()}. ` +
          `${t2.name}, on the other hand, focuses on ${t2.pros[0]?.toLowerCase() || "developer productivity"} ` +
          `with features like ${t2.features.slice(0, 3).join(", ").toLowerCase()}.`,
      ],
    },
    {
      title: "Pros and Cons",
      paragraphs: [
        `${t1.name}'s biggest strengths: ${t1.pros.slice(0, 3).map((p) => p.toLowerCase()).join(", ")}. ` +
          `Weaknesses: ${t1.cons.slice(0, 2).map((c) => c.toLowerCase()).join(", ")}. ` +
          `${t2.name} stands out with ${t2.pros.slice(0, 3).map((p) => p.toLowerCase()).join(", ")}. ` +
          `However, ${t2.cons.slice(0, 2).map((c) => c.toLowerCase()).join(", ")}.`,
      ],
    },
  ];

  const faq = [
    {
      q: `Is ${t1.name} better than ${t2.name}?`,
      a: `It depends on your needs. ${t1.name} is best for ${t1.bestFor.toLowerCase()}. ${t2.name} is best for ${t2.bestFor.toLowerCase()}. If you prioritize AI power and codebase understanding, ${verdictTool.name} has the edge.`,
    },
    {
      q: `Can I use ${t1.name} and ${t2.name} together?`,
      a: `It depends on the tools. Some combinations work well together (e.g., using one for completions and another for chat), while others may conflict. Start with one as your primary tool and add the other if you find gaps.`,
    },
    {
      q: `Which one is better for beginners?`,
      a: `${t1.pricing.free && !t2.pricing.free ? t1.name : t2.pricing.free && !t1.pricing.free ? t2.name : verdictTool.name} is the better starting point because of its free tier. Try it first — if it covers your needs, there's no need to pay for anything else.`,
    },
  ];

  const intro =
    `${t1.name} and ${t2.name} are two of the most talked-about AI coding tools in 2026. ` +
    `We tested both on real projects to see how they compare on features, pricing, ` +
    `and real-world developer experience. Here's what we found.`;

  return { intro, analysis, faq };
}

// ── Groq prompt builder ─────────────────────────────────────────────
function buildGroqPrompt(comparison, toolsList, verdictTool) {
  const toolDescriptions = toolsList
    .map(
      (t) =>
        `${t.name} data:
- Tagline: ${t.tagline}
- Pricing: Pro ${t.pricing.pro}, Free: ${t.pricing.freePrice}, Team: ${t.pricing.team}
- Rating: ${t.rating}/5
- Key features: ${t.features.join("; ")}
- Pros: ${t.pros.join("; ")}
- Cons: ${t.cons.join("; ")}
- Best for: ${t.bestFor}`
    )
    .join("\n\n");

  return (
    `Compare: ${toolsList.map((t) => t.name).join(" vs ")}\n\n` +
    `${toolDescriptions}\n\n` +
    `Our verdict winner: ${verdictTool.name}\n\n` +
    `Respond with ONLY valid JSON in this exact format:\n` +
    `{\n` +
    `  "intro": "2-3 sentence intro paragraph for the comparison page",\n` +
    `  "analysis": [\n` +
    `    {\n` +
    `      "title": "Section title",\n` +
    `      "paragraphs": ["Paragraph 1", "Paragraph 2"]\n` +
    `    }\n` +
    `  ],\n` +
    `  "faq": [\n` +
    `    {"q": "Question?", "a": "Answer paragraph"}\n` +
    `  ]\n` +
    `}\n\n` +
    `Generate 4 analysis sections and 3-4 FAQ items. Be specific about features, pricing, and real-world usage. Mention the verdict winner naturally.`
  );
}

// ── Page generator ────────────────────────────────────────────────────
function generatePage(comparison, toolsList, verdictTool, content) {
  const today = new Date().toISOString().split("T")[0];
  const componentName = comparison.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

  const toolDeclarations = toolsList
    .map((t) => `  const ${t.id === "windsurf" ? "windsurf" : t.id} = tools.${t.id === "windsurf" ? "windsurf" : t.id};`)
    .join("\n");

  const toolArray = toolsList
    .map((t) => (t.id === "windsurf" ? "windsurf" : t.id))
    .join(", ");

  const analysisJsx = content.analysis
    .map(
      (section) => `
        <div>
          <h3 className="mb-3 text-xl font-semibold">${section.title}</h3>
          ${section.paragraphs.map((p) => `<p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">${p}</p>`).join("\n          ")}
        </div>`
    )
    .join("\n\n        ");

  const faqJsx = content.faq
    .map(
      (item) => `
          <div>
            <h3 className="mb-2 font-semibold">${item.q}</h3>
            <p className="text-zinc-700 dark:text-zinc-300">${item.a}</p>
          </div>`
    )
    .join("\n");

  const verdictContext =
    `${verdictTool.name} wins this comparison because it offers the best combination of ` +
    `${verdictTool.pros[0]?.toLowerCase() || "features"} and ` +
    `${verdictTool.pros[1]?.toLowerCase() || "value"}. ` +
    `With a ${verdictTool.rating}/5 rating, it leads in areas that matter most for ` +
    `${verdictTool.bestFor.toLowerCase()}.`;

  const ctaButtons = toolsList
    .map((t, i) => {
      const isFirst = i === 0 || t.id === comparison.verdict;
      const btnClass = isFirst
        ? 'rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors'
        : 'rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-800 border border-zinc-300 hover:border-zinc-400 transition-colors dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-700';
      const label = t.pricing.free ? `Try ${t.name} Free →` : `Try ${t.name} →`;
      return `<a href="${t.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" className="${btnClass}">${label}</a>`;
    })
    .join('\n          ');

  const relatedSlug = comparison.slug;

  return `import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ToolCard } from "@/components/ToolCard";
import { Verdict } from "@/components/Verdict";
import { RelatedComparisons } from "@/components/RelatedComparisons";

export const metadata: Metadata = {
  title: "${comparison.title}",
  description:
    "${comparison.metaDescription}",
};

export default function ${componentName}() {
${toolDeclarations}
  const allTools = [${toolArray}];

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <nav className="mb-6 text-sm text-zinc-500">
        <a href="/" className="hover:text-zinc-700 dark:hover:text-zinc-300">Home</a>
        <span className="mx-2">/</span>
        <span className="text-zinc-900 dark:text-zinc-100">${comparison.title.replace(/\s*\(.*?\)\s*/, "").split("—")[0].trim()}</span>
      </nav>

      <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        ${comparison.title}
      </h1>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
        ${content.intro}
      </p>
      <p className="mb-8 text-sm text-zinc-400">Last updated: ${today}</p>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Side-by-Side Comparison</h2>
        <ComparisonTable tools={allTools} verdictId="${comparison.verdict}" />
      </section>

${toolsList
  .map((t, i) => {
    const isV = t.id === comparison.verdict;
    const tVar = t.id === "windsurf" ? "windsurf" : t.id;
    return `      <section className="mb-12"><h2 className="mb-6 text-2xl font-bold">Deep Dive: ${t.name}</h2><ToolCard tool={${tVar}} ${isV ? "isVerdict" : ""} /></section>`;
  })
  .join("\n\n")}

      <section className="mb-12 space-y-8">
        <h2 className="text-2xl font-bold">Detailed Analysis</h2>

        ${analysisJsx}
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-6">
${faqJsx}
        </div>
      </section>

      <Verdict
        tool={${verdictTool.id === "windsurf" ? "windsurf" : verdictTool.id === "codewhisperer" ? "codewhisperer" : verdictTool.id}}
        tools={allTools}
        context="${verdictContext}"
      />


      {/* Try These Tools */}
      <section className="mb-12 rounded-xl bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <h2 className="mb-3 text-xl font-bold">Try These Tools</h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Both tools offer free tiers — try them on your next project.
        </p>
        <div className="flex flex-wrap gap-3">
          ${ctaButtons}
        </div>
      </section>

      {/* Related Comparisons */}
      <RelatedComparisons currentSlug="${relatedSlug}" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "${comparison.title}", description: "${comparison.metaDescription}", datePublished: "${today}", dateModified: "${today}", author: { "@type": "Organization", name: "VibeArticle" } }) }} />
    </div>
  );
}
`;
}

// ── Update tools.ts comparisons array ────────────────────────────────
async function updateComparisonsArray(comparison) {
  const toolsPath = path.join(BASE_DIR, "src/lib/tools.ts");
  let content = await readFile(toolsPath, "utf-8");

  // Find the closing ]; of the comparisons array
  const lastEntry = content.lastIndexOf("updatedDate:");
  const closingBracket = content.indexOf("];", lastEntry);

  if (closingBracket === -1) {
    console.error("❌ Could not find comparisons array closing bracket");
    return;
  }

  const newEntry = `  {
    id: "${comparison.slug}",
    slug: "${comparison.slug}",
    title: "${comparison.title}",
    metaTitle: "${comparison.title}",
    metaDescription:
      "${comparison.metaDescription}",
    toolIds: [${comparison.toolIds.map((id) => `"${id}"`).join(", ")}],
    verdict: "${comparison.verdict}",
    updatedDate: "${new Date().toISOString().split("T")[0]}",
  },`;

  content =
    content.slice(0, closingBracket) +
    "\n" +
    newEntry +
    "\n" +
    content.slice(closingBracket);

  await writeFile(toolsPath, content);
}

// ── Update sitemap.ts ────────────────────────────────────────────────
async function updateSitemap(comparison) {
  const sitemapPath = path.join(BASE_DIR, "src/app/sitemap.ts");
  let content = await readFile(sitemapPath, "utf-8");

  const closingBracket = content.lastIndexOf("];");
  if (closingBracket === -1) {
    console.error("❌ Could not find sitemap closing bracket");
    return;
  }

  const priority = comparison.type === "best-of" ? 0.9 : 0.8;
  const frequency = comparison.type === "best-of" ? "weekly" : "monthly";

  const newEntry = `    { url: \`\${BASE_URL}/compare/${comparison.slug}\`, lastModified: new Date(), changeFrequency: "${frequency}" as const, priority: ${priority} },`;

  content =
    content.slice(0, closingBracket) +
    "\n" +
    newEntry +
    "\n" +
    content.slice(closingBracket);

  await writeFile(sitemapPath, content);
}

// ── Main ─────────────────────────────────────────────────────────────
async function main() {
  console.log("🔧 VibeArticle SEO Content Generator\n");

  // 1. Load queue
  const queuePath = path.join(BASE_DIR, "scripts/comparisons-queue.json");
  let queue;
  try {
    queue = JSON.parse(await readFile(queuePath, "utf-8"));
  } catch {
    console.error("❌ Queue file not found:", queuePath);
    process.exit(1);
  }

  if (queue.length === 0) {
    console.log("✅ Queue empty — all comparisons generated.");
    process.exit(0);
  }

  // Pick highest priority
  queue.sort((a, b) => (a.priority || 99) - (b.priority || 99));
  const comparison = queue[0];
  console.log(`📝 Generating: ${comparison.slug}`);
  console.log(`   Title: ${comparison.title}`);
  console.log(`   Tools: ${comparison.toolIds.join(" vs ")}\n`);

  // 2. Load tools
  const toolsData = JSON.parse(
    await readFile(path.join(BASE_DIR, "scripts/data/tools.json"), "utf-8")
  );

  const toolsList = comparison.toolIds.map((id) => toolsData[id]);
  const verdictTool = toolsData[comparison.verdict];

  // 3. Generate content
  let content;
  if (process.env.GROQ_API_KEY) {
    console.log("🤖 Using Groq API for content generation...");
    try {
      const prompt = buildGroqPrompt(comparison, toolsList, verdictTool);
      content = await callGroq(prompt);
      console.log("   ✅ Groq content generated");
    } catch (err) {
      console.error("   ⚠️ Groq failed:", err.message);
      console.log("   📝 Falling back to template...");
      content = generateTemplateContent(comparison, toolsList, verdictTool);
    }
  } else {
    console.log("   ⚠️ No GROQ_API_KEY — using template-based content");
    console.log("   💡 Set GROQ_API_KEY for richer LLM-generated analysis");
    content = generateTemplateContent(comparison, toolsList, verdictTool);
  }

  // 4. Generate page
  const pageContent = generatePage(comparison, toolsList, verdictTool, content);

  // 5. Write page file
  const pageDir = path.join(BASE_DIR, `src/app/compare/${comparison.slug}`);
  await mkdir(pageDir, { recursive: true });
  await writeFile(path.join(pageDir, "page.tsx"), pageContent);
  console.log(`\n📄 Written: src/app/compare/${comparison.slug}/page.tsx`);

  // 6. Update tools.ts
  await updateComparisonsArray(comparison);
  console.log("📋 Updated: src/lib/tools.ts (comparisons array)");

  // 7. Update sitemap
  await updateSitemap(comparison);
  console.log("🗺️ Updated: src/app/sitemap.ts");

  // 8. Remove from queue
  queue.shift();
  await writeFile(queuePath, JSON.stringify(queue, null, 2) + "\n");
  console.log(`🗑️ Removed from queue (${queue.length} remaining)`);

  // 9. Git commit + push
  try {
    console.log("\n🔄 Committing and pushing...");
    execSync("git add -A", { cwd: BASE_DIR, stdio: "inherit" });
    execSync(
      `git commit -m "content: auto-generate ${comparison.slug} comparison page [skip ci]"`,
      { cwd: BASE_DIR, stdio: "inherit" }
    );
    execSync("git push", { cwd: BASE_DIR, stdio: "inherit" });
    console.log(`\n✅ Published: /compare/${comparison.slug}`);
  } catch (err) {
    console.log("\n⚠️ Git commit/push failed — changes are staged locally.");
    console.log("   Run manually: git add -A && git commit && git push");
  }

  console.log(`\n📊 Remaining in queue: ${queue.length} comparisons`);
  console.log("   Next: " + (queue[0]?.slug || "(empty)"));
}

main().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
