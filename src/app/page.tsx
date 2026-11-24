import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060608]">
      <Header />
      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <Projects />

        {/* Âncoras reservadas para as Fases 3 e 4 */}
        <section id="tecnologias" className="sr-only" aria-label="Tecnologias (Fase 3)" />
        <section id="sobre" className="sr-only" aria-label="Sobre (Fase 3)" />
        <section id="contato" className="sr-only" aria-label="Contato (Fase 4)" />
      </main>
    </div>
  );
}