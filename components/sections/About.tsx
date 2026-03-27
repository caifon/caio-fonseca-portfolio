import { Section } from "@/components/ui/Section";
import { aboutText } from "@/lib/content";

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Perfil"
      title="Sobre mim"
      subtitle="Quem sou e como trabalho."
      headerFrom="top"
      bodyFrom="left"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 md:p-10">
        <p className="max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
          {aboutText}
        </p>
      </div>
    </Section>
  );
}
