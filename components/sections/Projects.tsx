import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Portfólio"
      title="Projetos"
      subtitle="Seleção de trabalhos que mostram padrão de código e visão de produto."
      headerFrom="top"
      bodyFrom="left"
      revealBody={false}
    >
      <ul className="mx-auto flex w-full max-w-5xl flex-col gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <li key={project.name} className="min-w-0">
            <Reveal
              from="bottom"
              delay={index * 0.09}
              offset={36}
              className="block min-w-0"
            >
              <article className="flex min-h-[520px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:min-h-[560px] md:min-h-[580px]">
                {project.images && project.images.length > 0 ? (
                  <div
                    className={
                      project.images.length > 1
                        ? "grid h-[200px] shrink-0 grid-cols-2 gap-px border-b border-white/10 bg-white/10 sm:h-[240px] md:h-[260px]"
                        : "relative h-[200px] shrink-0 border-b border-white/10 bg-zinc-950/80 sm:h-[240px] md:h-[260px]"
                    }
                  >
                    {project.images.map((src, i) => (
                      <div
                        key={src}
                        className="relative h-full min-h-0 min-w-0"
                      >
                        <Image
                          src={src}
                          alt={`${project.name} — captura ${i + 1}`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      href={project.github}
                      variant="ghost"
                      external
                      className="min-w-[120px] flex-1 py-2.5 text-xs sm:text-sm"
                    >
                      GitHub
                    </Button>
                    <Button
                      href={project.demo}
                      external
                      className="min-w-[120px] flex-1 py-2.5 text-xs sm:text-sm"
                    >
                      Demo
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
