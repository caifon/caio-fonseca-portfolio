import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Caio Fonseca | Desenvolvedor Full Stack JavaScript",
  description:
    "Portfólio de Caio Fonseca — desenvolvedor Full Stack JavaScript. React, Next.js, Node.js e mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className={`${spaceGrotesk.className} flex min-h-full flex-col bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
