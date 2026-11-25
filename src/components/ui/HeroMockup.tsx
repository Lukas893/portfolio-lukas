"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal, Database, Cpu, ShieldCheck } from "lucide-react";

const DEMO_STEPS = [
  { num: "01", label: "ARQUITETURA MVC & API REST" },
  { num: "02", label: "ÍNDICES COMPOSTOS & PERSISTÊNCIA" },
  { num: "03", label: "AUTOMAÇÕES EM SEGUNDO PLANO" },
  { num: "04", label: "INTERFACES REATIVAS & PWA" },
];

export function HeroMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DEMO_STEPS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto pt-6"
    >
      {/* Cabeçalho minimalista da prévia */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5 px-1">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#9CA3AF]">
          — CENTRAL DE ENGENHARIA · VISÃO INTEGRADA
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-[#FF4D00]/10 text-[#FF4D00] border border-[#FF4D00]/30">
          AMBIENTE DEMONSTRATIVO
        </span>
      </div>

      {/* Composição de 3 painéis em perspectiva 3D (estilo 01:06-01:10) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch [perspective:1400px]">
        {/* Painel Esquerdo inclinado */}
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          className="lg:col-span-3 jarvis-glass rounded-2xl p-5 flex flex-col justify-between gap-4 lg:[transform:rotateY(10deg)] transition-transform duration-500 hover:lg:[transform:rotateY(2deg)]"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#00F0FF]">
              BACKEND // CORE
            </span>
            <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" aria-hidden="true" />
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-[#060608]/75 border border-white/5">
              <p className="font-mono text-[10px] text-[#9CA3AF]">RUNTIME</p>
              <p className="text-xs font-semibold text-[#F5F7FA] mt-0.5">
                Node.js & Express.js
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#060608]/75 border border-white/5">
              <p className="font-mono text-[10px] text-[#9CA3AF]">ESTRUTURA</p>
              <p className="text-xs font-semibold text-[#F5F7FA] mt-0.5">
                APIs RESTful · MVC
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#060608]/75 border border-white/5">
              <p className="font-mono text-[10px] text-[#9CA3AF]">PROTEÇÃO</p>
              <p className="text-xs font-semibold text-[#10B981] mt-0.5">
                Rate Limit & Validação
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] text-[#9CA3AF]">
            ● Módulos desacoplados
          </span>
        </motion.div>

        {/* Painel Central Protagonista com Anel Orbital */}
        <div className="lg:col-span-6 jarvis-glass rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between min-h-[270px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-[#00F0FF]/10 to-transparent animate-hud-scan"
          />

          <div className="relative flex items-center justify-between text-[10px] font-mono text-[#9CA3AF] pb-3 border-b border-white/10">
            <span className="text-[#F5F7FA] tracking-[0.18em]">
              LUKAS.SYS // ORQUESTRAÇÃO
            </span>
            <span className="text-[#00F0FF]">ATIVO · DEMO</span>
          </div>

          {/* Anel Holográfico Central */}
          <div className="relative my-3 flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 260 150"
              className="w-full max-w-[290px] h-auto"
              role="img"
              aria-label="Anel orbital demonstrativo da arquitetura de sistemas"
            >
              {/* Linhas radiais */}
              <line x1="18" y1="75" x2="78" y2="75" stroke="rgba(0,240,255,0.45)" strokeWidth="1" className="animate-hud-flow" />
              <line x1="182" y1="75" x2="242" y2="75" stroke="rgba(0,240,255,0.45)" strokeWidth="1" className="animate-hud-flow" />
              <circle cx="18" cy="75" r="2.5" fill="#00F0FF" />
              <circle cx="242" cy="75" r="2.5" fill="#00F0FF" />

              {/* Anel externo */}
              <g className="animate-hud-spin" style={{ transformOrigin: "130px 75px" }}>
                <circle
                  cx="130"
                  cy="75"
                  r="54"
                  fill="none"
                  stroke="rgba(0, 240, 255, 0.35)"
                  strokeWidth="1.4"
                  strokeDasharray="18 8 4 8"
                />
              </g>

              {/* Anel intermediário */}
              <g className="animate-hud-spin-reverse" style={{ transformOrigin: "130px 75px" }}>
                <circle
                  cx="130"
                  cy="75"
                  r="41"
                  fill="none"
                  stroke="rgba(0, 240, 255, 0.65)"
                  strokeWidth="1.8"
                  strokeDasharray="28 14"
                />
              </g>

              {/* Núcleo */}
              <motion.circle
                cx="130"
                cy="75"
                r="26"
                fill="rgba(0, 240, 255, 0.08)"
                stroke="rgba(0, 240, 255, 0.5)"
                strokeWidth="1.2"
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.07, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "130px 75px" }}
              />
              <text
                x="130"
                y="73"
                textAnchor="middle"
                fill="#F5F7FA"
                fontSize="9"
                fontWeight="700"
                fontFamily="monospace"
                letterSpacing="1.5"
              >
                SYSTEMS
              </text>
              <text
                x="130"
                y="85"
                textAnchor="middle"
                fill="#00F0FF"
                fontSize="7"
                fontFamily="monospace"
              >
                {DEMO_STEPS[activeIndex].num} / 04
              </text>
            </svg>

            <p className="font-mono text-[11px] text-[#00F0FF] tracking-wider text-center">
              {DEMO_STEPS[activeIndex].label}
            </p>
          </div>

          <div className="relative flex items-center justify-between pt-3 border-t border-white/10 font-mono text-[10px] text-[#9CA3AF]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
              Engenharia de Software
            </span>
            <span>Anápolis, GO</span>
          </div>
        </div>

        {/* Painel Direito inclinado */}
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          className="lg:col-span-3 jarvis-glass rounded-2xl p-5 flex flex-col justify-between gap-4 lg:[transform:rotateY(-10deg)] transition-transform duration-500 hover:lg:[transform:rotateY(-2deg)]"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#00F0FF]">
              DADOS & AUTOMAÇÃO
            </span>
            <Database className="w-3.5 h-3.5 text-[#00F0FF]" aria-hidden="true" />
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-[#060608]/75 border border-white/5">
              <p className="font-mono text-[10px] text-[#9CA3AF]">PERSISTÊNCIA</p>
              <p className="text-xs font-semibold text-[#F5F7FA] mt-0.5">
                MongoDB Atlas & SQL
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#060608]/75 border border-white/5">
              <p className="font-mono text-[10px] text-[#9CA3AF]">ROTINAS</p>
              <p className="text-xs font-semibold text-[#F5F7FA] mt-0.5">
                node-cron & WhatsApp API
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#060608]/75 border border-white/5 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] text-[#9CA3AF]">EXPERIMENTAL</p>
                <p className="text-xs font-semibold text-[#FF4D00] mt-0.5">
                  Agentes & LLMs
                </p>
              </div>
              <Cpu className="w-4 h-4 text-[#FF4D00]" aria-hidden="true" />
            </div>
          </div>

          <span className="font-mono text-[10px] text-[#9CA3AF]">
            ● Fluxo assíncrono
          </span>
        </motion.div>
      </div>

      {/* Barra numerada interativa abaixo dos 3 painéis (estilo 01:10) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        {DEMO_STEPS.map((step, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-left pt-3 border-t transition-all font-mono text-[10px] tracking-wider ${
                isActive
                  ? "border-[#00F0FF] text-[#F5F7FA]"
                  : "border-white/10 text-[#9CA3AF] hover:border-white/30"
              }`}
            >
              <span className={isActive ? "text-[#00F0FF] mr-2" : "text-white/30 mr-2"}>
                {step.num}
              </span>
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}