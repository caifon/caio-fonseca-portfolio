"use client";

import { useCallback } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const spring = { stiffness: 95, damping: 32, mass: 0.55 };

export function useHeroParallax() {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, spring);
  const y = useSpring(targetY, spring);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      const w = Math.max(r.width, 1);
      const h = Math.max(r.height, 1);
      targetX.set(((e.clientX - r.left) / w - 0.5) * 2);
      targetY.set(((e.clientY - r.top) / h - 0.5) * 2);
    },
    [targetX, targetY],
  );

  const onLeave = useCallback(() => {
    targetX.set(0);
    targetY.set(0);
  }, [targetX, targetY]);

  return { x, y, onMove, onLeave };
}
