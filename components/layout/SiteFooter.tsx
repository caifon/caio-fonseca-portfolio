import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {site.name}. Feito com Next.js.</p>
        <p className="text-zinc-600">Full Stack JavaScript</p>
      </div>
    </footer>
  );
}
