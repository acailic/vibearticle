#!/usr/bin/env bash
PROJECT_DIR="/home/nistrator/Documents/github/ai-toolbox"
PAGES=(
  "src/app/page.tsx"
  "src/app/compare/cursor-vs-windsurf/page.tsx"
  "src/app/compare/copilot-vs-codeium/page.tsx"
  "src/app/compare/best-ai-coding-tools/page.tsx"
  "src/app/compare/vercel-vs-railway/page.tsx"
  "src/app/compare/best-hosting-for-developers/page.tsx"
  "src/app/compare/cursor-vs-copilot/page.tsx"
  "src/app/compare/cursor-vs-cline/page.tsx"
  "src/app/compare/best-free-ai-coding-tools/page.tsx"
  "src/app/compare/vercel-vs-netlify/page.tsx"
)

TOTAL_CONTENT=0
TOTAL_SEO=0
TOTAL_LINKS=0
PAGE_COUNT=${#PAGES[@]}

for page in "${PAGES[@]}"; do
  FILE="$PROJECT_DIR/$page"
  if [ ! -f "$FILE" ]; then
    echo "⚠️  Missing: $page"
    continue
  fi

  # --- Content Score (0-100) ---
  WORD_COUNT=$(wc -w < "$FILE" | tr -d ' ')
  WORD_COUNT=${WORD_COUNT:-0}
  
  if [ "$WORD_COUNT" -ge 3000 ]; then
    CONTENT_SCORE=90
  elif [ "$WORD_COUNT" -ge 2000 ]; then
    CONTENT_SCORE=75
  elif [ "$WORD_COUNT" -ge 1000 ]; then
    CONTENT_SCORE=55
  else
    CONTENT_SCORE=30
  fi

  if grep -q "FAQ\|Frequently Asked" "$FILE" 2>/dev/null; then
    CONTENT_SCORE=$((CONTENT_SCORE + 5))
  fi

  if grep -q "Detailed Analysis\|Deep Dive" "$FILE" 2>/dev/null; then
    CONTENT_SCORE=$((CONTENT_SCORE + 5))
  fi

  [ "$CONTENT_SCORE" -gt 100 ] && CONTENT_SCORE=100

  # --- SEO Score (0-100) ---
  SEO_SCORE=30

  if grep -q "export const metadata" "$FILE" 2>/dev/null; then
    SEO_SCORE=$((SEO_SCORE + 25))
  fi

  if grep -q "application/ld+json" "$FILE" 2>/dev/null; then
    SEO_SCORE=$((SEO_SCORE + 25))
  fi

  if grep -q "font-extrabold" "$FILE" 2>/dev/null; then
    SEO_SCORE=$((SEO_SCORE + 10))
  fi

  if grep -q "description:" "$FILE" 2>/dev/null; then
    SEO_SCORE=$((SEO_SCORE + 10))
  fi

  [ "$SEO_SCORE" -gt 100 ] && SEO_SCORE=100

  # --- Links Score (0-100) ---
  LINKS_SCORE=30

  INTERNAL_COUNT=$(grep -c 'href="/' "$FILE" 2>/dev/null || echo 0)
  INTERNAL_COUNT=${INTERNAL_COUNT:-0}
  
  if [ "$INTERNAL_COUNT" -ge 3 ]; then
    LINKS_SCORE=60
  elif [ "$INTERNAL_COUNT" -ge 1 ]; then
    LINKS_SCORE=45
  fi

  if grep -q "nofollow" "$FILE" 2>/dev/null; then
    LINKS_SCORE=$((LINKS_SCORE + 20))
  fi

  if grep -q "Try.*→" "$FILE" 2>/dev/null; then
    LINKS_SCORE=$((LINKS_SCORE + 20))
  fi

  [ "$LINKS_SCORE" -gt 100 ] && LINKS_SCORE=100

  # --- Combined Score ---
  COMBINED=$(( (CONTENT_SCORE * 40 + SEO_SCORE * 40 + LINKS_SCORE * 20) / 100 ))

  echo "📄 $page"
  echo "   Words: $WORD_COUNT | Content: $CONTENT_SCORE | SEO: $SEO_SCORE | Links: $LINKS_SCORE | Combined: $COMBINED"

  TOTAL_CONTENT=$((TOTAL_CONTENT + CONTENT_SCORE))
  TOTAL_SEO=$((TOTAL_SEO + SEO_SCORE))
  TOTAL_LINKS=$((TOTAL_LINKS + LINKS_SCORE))
done

AVG_CONTENT=$((TOTAL_CONTENT / PAGE_COUNT))
AVG_SEO=$((TOTAL_SEO / PAGE_COUNT))
AVG_LINKS=$((TOTAL_LINKS / PAGE_COUNT))
OVERALL=$(( (AVG_CONTENT * 40 + AVG_SEO * 40 + AVG_LINKS * 20) / 100 ))

echo ""
echo "================================"
echo "📊 OVERALL SCORE: $OVERALL / 100"
echo "   Content avg: $AVG_CONTENT / 100"
echo "   SEO avg:     $AVG_SEO / 100"
echo "   Links avg:   $AVG_LINKS / 100"
echo "================================"
echo ""
echo "Target: 80/100 per page, overall 80+"

if [ "$OVERALL" -ge 80 ]; then
  echo "✅ PASS"
else
  echo "⚠️  NEEDS IMPROVEMENT"
fi
