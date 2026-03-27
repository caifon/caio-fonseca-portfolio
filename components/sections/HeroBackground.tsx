"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";

type HeroBackgroundProps = {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
};

export function HeroBackground({ smoothX, smoothY }: HeroBackgroundProps) {
  const bgX = useTransform(smoothX, [-1, 1], [5, -5]);
  const bgY = useTransform(smoothY, [-1, 1], [4, -4]);

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_-10%,rgba(30,64,175,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_90%_85%,rgba(34,211,238,0.08),transparent_50%)]" />

      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ x: bgX, y: bgY }}
      >
        <div className="absolute -inset-[14%] h-[128%] w-[128%] max-w-none">
          <Image
            src="/hero/network-mesh.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-[1.08] object-cover object-center opacity-[0.2] blur-[3px] mix-blend-soft-light saturate-[1.15]"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/90 to-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/[0.96] via-zinc-950/70 to-zinc-950/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_18%_42%,rgba(9,9,11,0.82),transparent_58%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.72)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(34,211,238,0.04)_50%,transparent_100%)] opacity-80 mix-blend-screen" />

      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-cyan-500/[0.07] via-transparent to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[min(70vw,480px)] w-[min(70vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[100px]" />
    </div>
  );
}
