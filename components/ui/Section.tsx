"use client";

import type { ReactNode } from "react";
import { Reveal, type RevealEdge } from "@/components/ui/Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** Entrada do cabeçalho (título / subtítulo). */
  headerFrom?: RevealEdge;
  /** Entrada do bloco de conteúdo abaixo do cabeçalho. */
  bodyFrom?: RevealEdge;
  headerOffset?: number;
  bodyOffset?: number;
  /** Se false, o conteúdo não recebe `Reveal` extra (útil quando há stagger interno). */
  revealBody?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  headerFrom = "top",
  bodyFrom = "left",
  headerOffset = 36,
  bodyOffset = 44,
  revealBody = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 md:py-28 ${className}`.trim()}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal from={headerFrom} offset={headerOffset} delay={0} className="mb-10 md:mb-14">
          <header>
            {eyebrow ? (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                {subtitle}
              </p>
            ) : null}
          </header>
        </Reveal>
        {revealBody ? (
          <Reveal from={bodyFrom} offset={bodyOffset} delay={0.1}>
            {children}
          </Reveal>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
