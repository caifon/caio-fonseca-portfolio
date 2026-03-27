import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { StackSection } from "@/components/sections/StackSection";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <SiteHeader />
      <main className="relative flex-1">
        <Hero />
        <About />
        <StackSection />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
