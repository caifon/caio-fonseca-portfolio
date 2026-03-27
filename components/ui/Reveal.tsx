"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

export type RevealEdge = "top" | "bottom" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Deslocamento inicial em px (entrada mais perceptível em seções). */
  offset?: number;
  duration?: number;
  /** De qual borda o bloco “entra” na viewport. */
  from?: RevealEdge;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate">;

function initialFor(from: RevealEdge, offset: number) {
  switch (from) {
    case "top":
      return { opacity: 0, y: -offset, x: 0 };
    case "bottom":
      return { opacity: 0, y: offset, x: 0 };
    case "left":
      return { opacity: 0, x: -offset, y: 0 };
    case "right":
      return { opacity: 0, x: offset, y: 0 };
    default:
      return { opacity: 0, y: offset, x: 0 };
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  offset = 32,
  duration = 0.62,
  from = "bottom",
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={["min-w-0", className].filter(Boolean).join(" ")}>
        {children}
      </div>
    );
  }

  const initial = initialFor(from, offset);

  return (
    <motion.div
      className={["min-w-0", className].filter(Boolean).join(" ")}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
