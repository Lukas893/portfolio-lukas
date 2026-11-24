"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { HeroMockup } from "@/components/ui/HeroMockup";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: "easeOut" as const },
    }),
  };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-hud-grid overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#00F0FF]/8 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#FF4D00]/6 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#00F0FF]"
            >
              <span>00 // ENGENHARIA DE SOFTWARE & SISTEMAS</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.08]"
            >
              SISTEMAS QUE GERAM RESULTADOS.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mt-1">
                ENGENHARIA FEITA PARA ESCALAR.
              </span>
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
            >
              Desenvolvimento web, Back-end em Node.js e automação inteligente para
              transformar ideias em sistemas funcionais, eficientes e preparados
              para crescer.
            </motion.p>

            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#contato"
                className="font-mono text-xs sm:text-sm font-semibold tracking-wider px-6 py-4 rounded bg-[#00F0FF] text-[#060608] hover:bg-[#00F0FF]/90 transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.25)]"
              >
                <span>[ QUERO UM SITE OU SISTEMA ]</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#projetos"
                className="font-mono text-xs sm:text-sm font-semibold tracking-wider px-6 py-4 rounded border border-white/15 bg-[#0D1117]/80 text-white hover:border-[#FF4D00]/70 hover:text-[#FF4D00] transition-all inline-flex items-center justify-center gap-2.5"
              >
                <Code2 className="w-4 h-4" aria-hidden="true" />
                <span>[ INSPECIONAR ENGENHARIA ]</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}