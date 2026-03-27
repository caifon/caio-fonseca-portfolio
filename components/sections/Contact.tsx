import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";

const links = [
  {
    label: "Email",
    value: site.emailLabel,
    href: site.email,
    external: true,
  },
  {
    label: "WhatsApp",
    value: site.whatsappLabel,
    href: site.whatsapp,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/caifon",
    href: site.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/caiofonsecadev",
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
      <div className="grid gap-3 sm:gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,16.25rem),1fr))]">
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
              className="group block w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-left backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/35 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)] sm:px-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
                {link.label}
              </p>
              <p className="mt-2 overflow-x-auto whitespace-nowrap text-[13px] font-medium leading-snug tracking-tight text-zinc-200 [scrollbar-width:thin] transition-colors group-hover:text-white sm:text-sm">
                {link.value}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
