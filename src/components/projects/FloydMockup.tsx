"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar, Percent, MessageSquare, RotateCcw } from "lucide-react";

const FLOYD_SCENES = [
  {
    id: "slots",
    tag: "ALOCAÇÃO CONTÍGUA",
    prompt: "Grade de horários em blocos de 30 min",
    response: "Validação sem sobreposição na agenda.",
    widgetTitle: "AGENDA · BLOCOS 30 MIN",
    widgetBadge: "DEMO",
    icon: Calendar,
    rows: [
      { left: "09:00", middle: "Bloco Contíguo A", right: "OCUPADO", accent: false },
      { left: "09:30", middle: "Bloco Contíguo B", right: "LIVRE", accent: true },
      { left: "10:00", middle: "Bloco Contíguo C", right: "OCUPADO", accent: false },
    ],
  },
  {
    id: "holiday",
    tag: "REGRA TARIFÁRIA",
    prompt: "Agendamento em domingo ou feriado",
    response: "Acréscimo automático de 20% aplicado no backend.",
    widgetTitle: "MOTOR DE REGRAS · DATA",
    widgetBadge: "+20%",
    icon: Percent,
    rows: [
      { left: "REGRA", middle: "Domingos e Feriados", right: "ATIVO", accent: true },
      { left: "AJUSTE", middle: "Taxa automática", right: "+20%", accent: true },
      { left: "CAMADA", middle: "Controller MVC", right: "SERVER", accent: false },
    ],
  },
  {
    id: "cancel",
    tag: "CANCELAMENTO 1-CLIQUE",
    prompt: "Cliente aciona link de cancelamento",
    response: "Horário liberado imediatamente na grade.",
    widgetTitle: "SINCRONIZAÇÃO DE GRADE",
    widgetBadge: "IMEDIATO",
    icon: RotateCcw,
    rows: [
      { left: "10:30", middle: "Status anterior", right: "RESERVADO", accent: false },
      { left: "AÇÃO", middle: "Cancelamento 1-clique", right: "OK", accent: true },
      { left: "10:30", middle: "Disponibilidade", right: "LIBERADO", accent: true },
    ],
  },
  {
    id: "whatsapp",
    tag: "AUTOMAÇÃO WHATSAPP",
    prompt: "Rotina agendada via node-cron + Baileys",
    response: "Lembrete preventivo e reativação (+25 dias).",
    widgetTitle: "CRON · WHATSAPP API",
    widgetBadge: "BAILEYS",
    icon: MessageSquare,
    rows: [
      { left: "JOB 01", middle: "Lembrete preventivo", right: "ATIVO", accent: true },
      { left: "JOB 02", middle: "Clientes inativos (+25d)", right: "REATIVAR", accent: true },
      { left: "CANAL", middle: "WhatsApp Web API", right: "CRON", accent: false },
    ],
  },
];

export function FloydMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % FLOYD_SCENES.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const current = FLOYD_SCENES[active];
  const Icon = current.icon;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]">
          — FLUXO REATIVO · FLOYD
        </span>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#FF4D00]/10 text-[#FF4D00] border border-[#FF4D00]/30">
          INTERFACE DEMONSTRATIVA
        </span>
      </div>

      {/* Gatilhos interativos */}
      <div className="grid grid-cols-2 gap-2">
        {FLOYD_SCENES.map((scene, idx) => {
          const isSelected = active === idx;
          return (
            <button
              key={scene.id}
              type="button"
              onClick={() => setActive(idx)}
              className={`text-left px-3 py-2.5 rounded-xl font-mono text-[10px] tracking-wider transition-all border ${
                isSelected
                  ? "bg-[#00F0FF]/10 border-[#00F0FF]/50 text-[#F5F7FA] shadow-[0_0_20px_rgba(0,240,255,0.12)]"
                  : "bg-[#0D1117]/40 border-white/5 text-[#9CA3AF] hover:border-white/20"
              }`}
            >
              <span className={isSelected ? "text-[#00F0FF] mr-1.5" : "text-white/25 mr-1.5"}>
                0{idx + 1}
              </span>
              {scene.tag}
            </button>
          );
        })}
      </div>

      {/* Painel Reativo que "ganha forma" com AnimatePresence */}
      <div className="jarvis-glass rounded-2xl p-5 min-h-[235px] flex flex-col justify-between relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12, scale: 0.98, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, y: -12, scale: 0.98, filter: "blur(4px)" }
            }
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Linha de comando / resposta */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#00F0FF]">
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{current.widgetTitle}</span>
                </div>
                <p className="text-xs text-[#F5F7FA] font-medium">{current.prompt}</p>
                <p className="text-xs text-[#9CA3AF]">{current.response}</p>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] shrink-0">
                {current.widgetBadge}
              </span>
            </div>

            {/* Widget Dinâmico */}
            <div className="space-y-2">
              {current.rows.map((row) => (
                <div
                  key={`${current.id}-${row.left}-${row.middle}`}
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-[#060608]/80 border border-white/5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-[11px] text-[#00F0FF] shrink-0">
                      {row.left}
                    </span>
                    <span className="text-xs text-[#F5F7FA]/90 truncate">
                      {row.middle}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border shrink-0 ${
                      row.accent
                        ? "bg-[#10B981]/12 text-[#10B981] border-[#10B981]/35"
                        : "bg-white/5 text-[#9CA3AF] border-white/10"
                    }`}
                  >
                    {row.right}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}