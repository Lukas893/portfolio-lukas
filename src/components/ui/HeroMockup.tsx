"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal, Database, Cpu, ShieldCheck, Activity } from "lucide-react";

export function HeroMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos((prev) => ({ ...prev, active: false }))}
      className="relative rounded-xl bg-[#0D1117]/90 border border-white/10 p-5 sm:p-6 shadow-2xl overflow-hidden lg:[transform:perspective(1100px)_rotateY(-6deg)_rotateX(2deg)] transition-transform duration-500 hover:lg:[transform:perspective(1100px)_rotateY(-2deg)_rotateX(1deg)]"
    >
      {mousePos.active && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.12), transparent 45%)`,
          }}
        />
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00F0FF]" />
          <span className="font-mono text-xs text-slate-400 ml-2">
            sys.architecture // node-runtime
          </span>
        </div>

        <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded bg-[#FF4D00]/15 text-[#FF4D00] border border-[#FF4D00]/30">
          AMBIENTE DEMONSTRATIVO
        </span>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-lg bg-[#060608]/80 border border-white/5">
            <div className="flex items-center justify-between text-slate-400 mb-1.5">
              <span className="font-mono text-[11px]">API RESTful</span>
              <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
            </div>
            <p className="font-mono text-xs text-white font-semibold">
              Node.js + Express
            </p>
            <span className="font-mono text-[10px] text-[#10B981]">
              ● Arquitetura MVC
            </span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#060608]/80 border border-white/5">
            <div className="flex items-center justify-between text-slate-400 mb-1.5">
              <span className="font-mono text-[11px]">Persistência</span>
              <Database className="w-3.5 h-3.5 text-[#00F0FF]" />
            </div>
            <p className="font-mono text-xs text-white font-semibold">
              MongoDB & SQL
            </p>
            <span className="font-mono text-[10px] text-[#10B981]">
              ● Índices Compostos
            </span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#060608]/80 border border-white/5">
            <div className="flex items-center justify-between text-slate-400 mb-1.5">
              <span className="font-mono text-[11px]">Automação</span>
              <Cpu className="w-3.5 h-3.5 text-[#FF4D00]" />
            </div>
            <p className="font-mono text-xs text-white font-semibold">
              Cron & Webhooks
            </p>
            <span className="font-mono text-[10px] text-[#10B981]">
              ● Rotinas Ativas
            </span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-[#060608]/90 border border-white/5 font-mono text-xs space-y-2.5">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#00F0FF]" />
              FLUXO DE EXECUÇÃO (SIMULAÇÃO VISUAL)
            </span>
            <span className="text-[10px] text-slate-500">REST / JSON</span>
          </div>

          <div className="space-y-1.5 text-[11px] leading-relaxed">
            <p className="text-slate-300">
              <span className="text-[#00F0FF]">[REQ]</span> POST /api/v1/agendamentos{" "}
              <span className="text-slate-500">→ validação de payload</span>
            </p>
            <p className="text-slate-300">
              <span className="text-[#FF4D00]">[RULE]</span> Verificação de grade contígua (30min) & regras de data
            </p>
            <p className="text-slate-300">
              <span className="text-[#10B981]">[DB]</span> Persistência transacional + disparo de lembrete programado
            </p>
          </div>

          <div className="pt-2">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00F0FF] to-[#10B981]"
                initial={{ width: "35%" }}
                animate={shouldReduceMotion ? { width: "78%" } : { width: ["35%", "88%", "64%", "88%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            Rate Limit · Validação de Entrada · Logs
          </span>
          <span className="text-slate-500">Anápolis, GO</span>
        </div>
      </div>
    </motion.div>
  );
}