export const site = {
  name: "Caio Fonseca",
  title: "Desenvolvedor Full Stack JavaScript",
  tagline:
    "Construo aplicações web modernas, escaláveis e com experiência de uso impecável — do front ao deploy.",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=caiorafonseca09@gmail.com&su=Contato%20via%20portfolio%20-%20Oportunidade%20em%20desenvolvimento&body=Ola%20Caio,%0A%0AAcessei%20seu%20portfolio%20e%20achei%20interessante%20sua%20abordagem%20e%20projetos.%0A%0AGostaria%20de%20conversar%20com%20voce%20sobre%20possiveis%20oportunidades%20na%20area%20de%20desenvolvimento.%0A%0AFico%20no%20aguardo%20do%20seu%20retorno.%0A%0AAtenciosamente,",
  emailLabel: "caiorafonseca09@gmail.com",
  github: "https://github.com/caifon",
  linkedin: "https://www.linkedin.com/in/caiofonsecadev/",
  whatsapp: "https://wa.me/5571996485796",
  whatsappLabel: "+55 (71) 99648-5796",
} as const;

export const aboutText =
  "Sou movido por disciplina e aprendizado contínuo. Estudo e pratico diariamente para evoluir em arquitetura, performance e boas práticas. Meu foco é tecnologia que resolve problemas reais, com código claro e produtos que recrutadores e times reconhecem como profissionais.";

export const stackCategories = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "APIs REST"],
  },
  {
    id: "database",
    label: "Banco de Dados",
    items: ["PostgreSQL", "SQL"],
  },
  {
    id: "cloud",
    label: "Cloud e Deploy",
    items: ["Vercel", "Google Cloud Platform"],
  },
  {
    id: "tools",
    label: "Ferramentas",
    items: ["Git", "GitHub", "Postman", "Docker"],
  },
] as const;

export type Project = {
  name: string;
  description: string;
  tech: readonly string[];
  github: string;
  demo: string;
  /** Caminhos em /public, ex.: `/projects/foo.png` */
  images?: readonly string[];
  /** Ocupa duas colunas no grid em telas grandes */
  wide?: boolean;
};

export const projects: readonly Project[] = [
  {
    name: "ScientiaMed",
    description:
      "Plataforma SaaS para estudantes de medicina: organização por disciplinas (chats separados), tutoria com IA genérica, processamento de PDFs, limites de uso diário (paywall) e interface mobile-first de alta performance, integrada ao Google Cloud e Supabase.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Google Cloud",
      "Vercel",
      "IA",
    ],
    github: "https://github.com/caifon",
    demo: "https://scientia-blond.vercel.app/",
    images: [
      "/projects/scientiamed-dashboard.png",
      "/projects/scientiamed-login.png",
    ],
    wide: true,
  },
  {
    name: "Dashboard Analytics",
    description:
      "Painel com métricas em tempo real, gráficos e filtros. Foco em performance e UX responsiva.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST"],
    github: "https://github.com/caifon",
    demo: "https://vercel.com",
  },
  {
    name: "API de Serviços",
    description:
      "Backend REST com autenticação, validação e documentação. Pronto para integração com frontends.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/caifon",
    demo: "https://github.com/caifon",
  },
];

export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;
