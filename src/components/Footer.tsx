export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
      <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-zinc-500 dark:text-zinc-400">
        <p className="mb-2">
          © {new Date().getFullYear()} VibeArticle. Independent reviews and comparisons of AI developer tools, hosting, and gear.
        </p>
        <p>
          Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
          Our reviews are independent and not influenced by affiliate partnerships.
        </p>
      </div>
    </footer>
  );
}
