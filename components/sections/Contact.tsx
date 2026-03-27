import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";

const links = [
  {
    label: "Email",
    value: site.emailLabel,
    href: site.email,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/caiofonseca",
    href: site.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/caiofonseca",
    href: site.linkedin,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Vamos conversar"
      title="Contato"
      subtitle="Aberto a vagas júnior em frontend, backend ou full stack."
      headerFrom="top"
      bodyFrom="right"
      revealBody={false}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {links.map((link, index) => (
          <Reveal
            key={link.label}
            className="min-w-0 w-full"
            from={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.08}
            offset={32}
          >
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group block w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/35 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
                {link.label}
              </p>
              <p className="mt-2 break-words text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                {link.value}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
