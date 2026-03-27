"use client";

import { motion, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useHeroParallax } from "@/hooks/use-hero-parallax";
import { site } from "@/lib/content";
import { HeroBackground } from "./HeroBackground";
import {
  heroFadeIn,
  techCellStagger,
  techGridStagger,
  techPanelEnter,
} from "@/lib/motion-presets";

const techGlyphs = [
  { sym: "TS", label: "TypeScript" },
  { sym: "▲", label: "Next.js" },
  { sym: "{}", label: "JavaScript" },
  { sym: "⚡", label: "Performance" },
  { sym: "◆", label: "React" },
  { sym: "λ", label: "Functional" },
  { sym: "◉", label: "APIs" },
  { sym: "∞", label: "Scale" },
  { sym: "⬡", label: "Architecture" },
] as const;

const glowPulse: string[] = [
  "0 0 14px rgba(34,211,238,0.2), 0 0 28px rgba(99,102,241,0.08)",
  "0 0 22px rgba(34,211,238,0.38), 0 0 40px rgba(139,92,246,0.14)",
  "0 0 14px rgba(34,211,238,0.2), 0 0 28px rgba(99,102,241,0.08)",
];

function HeroTechCell({
  sym,
  label,
  index,
}: {
  sym: string;
  label: string;
  index: number;
}) {
  return (
    <motion.span
      title={label}
      variants={techCellStagger}
      whileHover={{
        scale: 1.09,
        y: -3,
        transition: { type: "spring", stiffness: 420, damping: 24 },
      }}
      whileTap={{ scale: 0.97 }}
      animate={{
        boxShadow: glowPulse,
      }}
      transition={{
        boxShadow: {
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.12,
        },
      }}
      className="group relative flex aspect-square min-h-0 cursor-default items-center justify-center overflow-hidden rounded-lg border border-cyan-400/35 bg-white/[0.07] px-0.5 py-0.5 text-[1.28rem] font-bold leading-none text-cyan-50 shadow-[0_0_18px_rgba(34,211,238,0.18)] drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] backdrop-blur-md sm:text-[1.42rem] md:text-[1.52rem]"
    >
      <span className="relative z-10 select-none">{sym}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/18 via-transparent to-violet-500/14 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
    </motion.span>
  );
}

export function Hero() {
  const { x, y, onMove, onLeave } = useHeroParallax();

  const textX = useTransform(x, [-1, 1], [-3, 3]);
  const textY = useTransform(y, [-1, 1], [-2.5, 2.5]);
  const panelX = useTransform(x, [-1, 1], [-10, 10]);
  const panelY = useTransform(y, [-1, 1], [-9, 9]);

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <HeroBackground smoothX={x} smoothY={y} />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={heroFadeIn}
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-16">
          <motion.div
            className="mx-auto w-full max-w-xl will-change-transform lg:mx-0 lg:justify-self-start"
            style={{ x: textX, y: textY }}
          >
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-200 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                Disponível para oportunidades
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.85)] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                {site.name}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-xl font-semibold text-zinc-200 sm:text-2xl md:text-3xl">
                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-blue-400 bg-clip-text text-transparent">
                  {site.title}
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
                {site.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="#projetos">Ver projetos</Button>
                <Button href="#contato" variant="ghost">
                  Contato
                </Button>
              </div>
            </Reveal>
          </motion.div>

          <motion.div
            className="mx-auto flex w-full justify-center will-change-transform lg:justify-end"
            style={{ x: panelX, y: panelY }}
          >
            <motion.div
              className="w-full max-w-[15rem] sm:max-w-[16rem] lg:max-w-[16.5rem] xl:max-w-[17rem]"
              variants={techPanelEnter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-6% 0px" }}
            >
              <motion.div
                className="relative rounded-2xl border border-white/12 bg-gradient-to-br from-cyan-500/12 via-violet-500/8 to-blue-600/12 p-px shadow-[0_0_40px_rgba(56,189,248,0.1)] backdrop-blur-md"
                animate={{
                  boxShadow: [
                    "0 0 36px rgba(56,189,248,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
                    "0 0 52px rgba(99,102,241,0.18), 0 0 0 1px rgba(34,211,238,0.12)",
                    "0 0 36px rgba(56,189,248,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="rounded-[0.95rem] border border-white/8 bg-zinc-950/75 p-3.5 backdrop-blur-xl sm:p-4">
                  <motion.p
                    className="mb-3 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300/95 sm:text-[10px]"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Stack visual
                  </motion.p>
                  <motion.div
                    className="grid grid-cols-3 gap-2 sm:gap-2.5"
                    variants={techGridStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-4% 0px" }}
                  >
                    {techGlyphs.map((item, index) => (
                      <HeroTechCell
                        key={item.label}
                        sym={item.sym}
                        label={item.label}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
