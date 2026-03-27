"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navItems, site } from "@/lib/content";

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return;
  const id = href === "#" ? "" : href.slice(1);
  const el = id ? document.getElementById(id) : null;
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getActiveSectionId(): string | null {
  if (typeof window === "undefined") return null;
  if (window.scrollY < 64) return null;
  const y = window.scrollY + window.innerHeight * 0.34;
  for (const item of navItems) {
    const id = item.href.slice(1);
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const bottom = top + el.offsetHeight;
    if (y >= top && y < bottom) return id;
  }
  return null;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 100], [11, 20]);
  const smoothBlur = useSpring(blurPx, { stiffness: 140, damping: 32 });
  const backdropFilter = useMotionTemplate`blur(${smoothBlur}px)`;

  const onNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href?.startsWith("#")) return;
      e.preventDefault();
      scrollToHash(href);
      history.pushState(null, "", href);
      setActiveId(href === "#topo" ? null : href.slice(1));
    },
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setActiveId(getActiveSectionId());
    };
    const onHash = () => {
      const h = window.location.hash.slice(1);
      setActiveId(h && h !== "topo" ? h : null);
    };
    onScroll();
    onHash();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto w-full max-w-6xl"
      >
        <motion.div
          style={{
            backdropFilter: backdropFilter,
            WebkitBackdropFilter: backdropFilter,
          }}
          className={[
            "rounded-2xl border transition-all duration-500 ease-out",
            "shadow-[0_0_0_1px_rgba(34,211,238,0.07),0_12px_40px_rgba(0,0,0,0.42),inset_0_1px_0_0_rgba(255,255,255,0.07)]",
            scrolled
              ? "border-white/14 bg-zinc-950/78 py-1.5 sm:rounded-xl"
              : "border-white/[0.1] bg-zinc-950/45 py-2 sm:py-2.5",
          ].join(" ")}
        >
          <div className="flex items-center gap-2 px-2.5 sm:gap-4 sm:px-4 md:px-5">
            <Link
              href="#topo"
              onClick={onNavClick}
              className="group relative shrink-0 text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              {site.name.split(" ")[0]}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                .
              </span>
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400/80 to-transparent transition-all duration-300 group-hover:w-full" />
            </Link>

            <nav
              className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto py-0.5 [scrollbar-width:none] md:gap-1 [&::-webkit-scrollbar]:hidden"
              aria-label="Principal"
            >
              {navItems.map((item) => {
                const id = item.href.slice(1);
                const active = activeId === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onNavClick}
                    className={[
                      "group relative shrink-0 rounded-lg px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-3 sm:text-[11px] sm:tracking-[0.14em]",
                      active
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-100",
                    ].join(" ")}
                  >
                    {active ? (
                      <span className="absolute inset-0 rounded-lg border border-cyan-400/30 bg-gradient-to-b from-cyan-500/[0.14] to-white/[0.05] shadow-[0_0_20px_rgba(34,211,238,0.1)]" />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                    {!active ? (
                      <span className="absolute bottom-1 left-1/2 z-10 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transition-all duration-300 ease-out group-hover:w-[72%]" />
                    ) : null}
                  </a>
                );
              })}
            </nav>

            <motion.a
              href="#contato"
              onClick={onNavClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="group relative shrink-0 overflow-hidden rounded-xl p-px shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.22)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/45 via-violet-500/35 to-blue-600/45 opacity-95 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative flex items-center rounded-[0.65rem] bg-zinc-950/92 px-2.5 py-1.5 text-[10px] font-semibold text-cyan-50 backdrop-blur-sm transition-colors duration-300 group-hover:text-white sm:px-3.5 sm:py-2 sm:text-xs">
                Fale comigo
              </span>
            </motion.a>
          </div>
        </motion.div>
      </motion.header>
    </div>
  );
}
