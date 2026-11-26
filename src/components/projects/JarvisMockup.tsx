"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ORBIT_NODES = [
  {
    id: "entrada",
    label: "COMANDOS",
    x: 68,
    y: 42,
    detail: "Interface Cockpit em tempo real via WebSockets com fila ACTION.",
    status: "OPERACIONAL",
  },
  {
    id: "agentes",
    label: "AGENTES",
    x: 292,
    y: 42,
    detail: "Orquestração de 281 agentes em 10 esquadrões pelo CognitiveEngine.",
    status: "OPERACIONAL",
  },
  {
    id: "contexto",
    label: "MEMÓRIA",
    x: 56,
    y: 178,
    detail: "Persistência em 5 camadas com SQLite FTS5 e árvore jarvis://.",
    status: "OPERACIONAL",
  },
  {
    id: "modelos",
    label: "MODELOS IA",
    x: 304,
    y: 178,
    detail: "ModelRouter multi-LLM com Circuit Breaker e avaliação paralela.",
    status: "OPERACIONAL",
  },
];

export function JarvisMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ORBIT_NODES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const current = ORBIT_NODES[activeIdx];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]">
          — CONSTELAÇÃO MODULAR · JARVIS
        </span>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30">
          ARQUITETURA V2.0
        </span>
      </div>

      <div className="jarvis-glass rounded-2xl p-4 sm:p-5 relative overflow-hidden">
        {/* Esfera central + linhas radiais */}
        <svg
          viewBox="0 0 360 220"
          className="w-full h-auto select-none"
          role="img"
          aria-label="Diagrama orbital da arquitetura v2.0 do projeto JARVIS"
        >
          {/* Linhas radiais conectando o núcleo aos nós */}
          {ORBIT_NODES.map((node, idx) => {
            const isActive = idx === activeIdx;
            return (
              <g key={node.id}>
                <line
                  x1="180"
                  y1="110"
                  x2={node.x}
                  y2={node.y}
                  stroke={isActive ? "#00F0FF" : "rgba(0, 240, 255, 0.2)"}
                  strokeWidth={isActive ? 1.5 : 1}
                  className={isActive ? "animate-hud-flow" : undefined}
                />
                {/* Ponto luminoso clicável */}
                <g
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 7 : 4}
                    fill={isActive ? "rgba(0,240,255,0.22)" : "transparent"}
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="3"
                    fill={isActive ? "#00F0FF" : "#9CA3AF"}
                  />
                  <text
                    x={node.x}
                    y={node.y < 110 ? node.y - 12 : node.y + 18}
                    textAnchor="middle"
                    fill={isActive ? "#F5F7FA" : "#9CA3AF"}
                    fontSize="9.5"
                    fontWeight={isActive ? "700" : "500"}
                    fontFamily="monospace"
                    letterSpacing="1.2"
                  >
                    {node.label}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Esfera Wireframe Giratória no Centro */}
          <g className="animate-hud-spin" style={{ transformOrigin: "180px 110px" }}>
            <circle
              cx="180"
              cy="110"
              r="52"
              fill="none"
              stroke="rgba(0, 240, 255, 0.35)"
              strokeWidth="1.2"
              strokeDasharray="16 8 4 8"
            />
            <ellipse
              cx="180"
              cy="110"
              rx="52"
              ry="22"
              fill="none"
              stroke="rgba(0, 240, 255, 0.22)"
              strokeWidth="1"
            />
          </g>

          <g className="animate-hud-spin-reverse" style={{ transformOrigin: "180px 110px" }}>
            <circle
              cx="180"
              cy="110"
              r="36"
              fill="rgba(0, 240, 255, 0.06)"
              stroke="rgba(0, 240, 255, 0.65)"
              strokeWidth="1.4"
              strokeDasharray="24 10"
            />
          </g>

          <text
            x="180"
            y="113"
            textAnchor="middle"
            fill="#F5F7FA"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="monospace"
            letterSpacing="2"
          >
            JARVIS
          </text>
        </svg>

        {/* Detalhe reativo do nó orbital selecionado */}
        <div className="mt-2 pt-3 border-t border-white/10 min-h-[60px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.24 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <span className="font-mono text-[10px] text-[#00F0FF] tracking-widest">
                  ▸ {current.label}
                </span>
                <p className="text-xs text-[#9CA3AF] mt-0.5">{current.detail}</p>
              </div>
              <span className="font-mono text-[9.5px] px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/35 text-[#10B981] w-fit shrink-0">
                {current.status}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}