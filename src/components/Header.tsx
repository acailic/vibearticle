export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-2xl">✍️</span>
          <span>VibeArticle</span>
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="/compare/best-ai-coding-tools" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            AI Tools
          </a>
          <a href="/compare/vercel-vs-railway" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Hosting
          </a>
          <a href="/compare/cursor-vs-windsurf" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:inline">
            Cursor vs Devin
          </a>
          <a href="/compare/best-hosting-for-developers" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:inline">
            Rankings
          </a>
        </div>
      </nav>
    </header>
  );
}
