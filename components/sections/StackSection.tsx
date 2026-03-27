import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechBadge } from "@/components/ui/TechBadge";
import { stackCategories } from "@/lib/content";

export function StackSection() {
  return (
    <Section
      id="stack"
      eyebrow="Competências"
      title="Stack & tecnologias"
      subtitle="Ferramentas que uso para entregar do protótipo à produção."
      headerFrom="top"
      bodyFrom="right"
      revealBody={false}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {stackCategories.map((cat, index) => (
          <Reveal
            key={cat.id}
            from={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.07}
            offset={40}
            className="h-full"
          >
            <article className="group h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:p-8">
            <h3 className="mb-4 text-lg font-bold text-white md:text-xl">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
