"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { HeroMockup } from "@/components/ui/HeroMockup";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, delay, ease: "easeOut" as const },
    }),
  };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Dobra 1: Abertura Centralizada limpa */}
      <div className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Brilho azul-claro sutil atrás do título */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[280px] rounded-full bg-[#38BDF8]/10 blur-[110px]"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.22em] uppercase text-[#38BDF8]"
          >
            <span className="w-6 h-px bg-[#38BDF8]/70" aria-hidden="true" />
            <span>LUKAS MACEDO · ENGENHARIA DE SOFTWARE</span>
            <span className="w-6 h-px bg-[#38BDF8]/70" aria-hidden="true" />
          </motion.div>

          <motion.h1
            id="hero-heading"
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] leading-[1.08]"
          >
            SISTEMAS QUE GERAM RESULTADOS.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#00F0FF] to-[#7DD3FC]">
              ENGENHARIA FEITA PARA ESCALAR.
            </span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed"
          >
            Desenvolvimento web, Back-end em Node.js e automação inteligente para
            transformar ideias em sistemas funcionais, eficientes e preparados
            para crescer.
          </motion.p>

          {/* CTAs Preservados */}
          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4"
          >
            <a
              href="#contato"
              className="w-full sm:w-auto font-mono text-xs font-bold tracking-wider px-6 py-3.5 rounded-lg bg-[#00F0FF] text-[#050811] hover:bg-[#38BDF8] transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            >
              <span>QUERO UM SITE OU SISTEMA</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#projetos"
              className="w-full sm:w-auto font-mono text-xs font-semibold tracking-wider px-6 py-3.5 rounded-lg bg-[#0B1220]/75 border border-[#38BDF8]/20 text-[#F5F7FA] hover:border-[#38BDF8]/60 hover:text-[#7DD3FC] transition-all inline-flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Code2 className="w-4 h-4" aria-hidden="true" />
              <span>INSPECIONAR ENGENHARIA</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Dobra 2: Central de Comando em Perspectiva 3D */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <HeroMockup />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hud-divider" />
      </div>
    </section>
  );
}