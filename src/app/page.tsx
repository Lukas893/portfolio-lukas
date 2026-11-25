import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { EngineeringPillars } from "@/components/sections/EngineeringPillars";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-global-hud">
      <Header />
      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <EngineeringPillars />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}