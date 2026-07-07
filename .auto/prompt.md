# AI Toolbox — SEO Content Optimization Loop

## Goal
Optimize this comparison site for organic search traffic. Each iteration should improve
a specific SEO factor (content quality, meta tags, internal linking, page structure)
and measure the improvement.

## Project
This is a static Next.js site comparing AI coding tools (Cursor, Windsurf, Copilot, Codeium, Cline, Tabnine).
Location: /home/nistrator/Documents/github/ai-toolbox

## What to Iterate On
Each iteration should focus on ONE of these areas:

### Content
- Add new comparison pages for tool pairs not yet covered (e.g., cursor-vs-copilot, cline-vs-cursor, tabnine-vs-copilot)
- Improve existing article depth with real examples, benchmarks, or screenshots
- Add FAQ sections to existing pages (Schema.org FAQ supported)
- Write "best X for Y" category pages (best ai tools for python, best for typescript, etc.)

### Technical SEO
- Add sitemap.xml generation (use next-sitemap or app/sitemap.ts)
- Add robots.txt
- Improve structured data (JSON-LD) — add Product, Review, FAQPage schemas
- Implement canonical URLs
- Add Open Graph and Twitter Card meta for all pages

### On-Page SEO
- Optimize title tags for target keywords (current titles are good but can be tested)
- Improve meta descriptions with stronger CTAs
- Add breadcrumb navigation with Schema.org markup
- Optimize heading hierarchy (H1 → H2 → H3)
- Add alt text strategy for future images

### Internal Linking
- Link between comparison pages naturally (e.g., "If you liked this, also read X vs Y")
- Add "Related Comparisons" section to each page
- Cross-link tool mentions across pages

## Constraints
- Keep all pages as static exports (no server-side runtime needed)
- Maintain TypeScript strict mode
- Keep the clean, minimal design aesthetic
- All affiliate links must have rel="noopener noreferrer nofollow"
- Content must be factual — no making up features or pricing

## How to Measure
Run the measure.sh script after each change. It scores:
1. **Content score**: Word count, heading structure, FAQ presence
2. **SEO score**: Meta tags, Schema.org markup, canonical URLs
3. **Links score**: Internal links, affiliate links present
4. **Total score**: Weighted combination (content 40%, SEO 40%, links 20%)

## Success Criteria
- Each page should score 80+ / 100
- All pages should have valid Schema.org markup
- Every tool should appear in at least 2 comparison pages
- Sitemap.xml should list all pages
