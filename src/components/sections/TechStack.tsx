"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HoverGlowCard } from "@/components/ui/HoverGlowCard";

type StackCategory = "all" | "backend" | "languages" | "frontend" | "infra";

interface TechItem {
  name: string;
  category: Exclude<StackCategory, "all">;
  categoryLabel: string;
  usage: string;
}

const CATEGORIES: { id: StackCategory; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "backend", label: "Back-end & Dados" },
  { id: "languages", label: "Linguagens" },
  { id: "frontend", label: "Front-end & Integrações" },
  { id: "infra", label: "Infra & Ferramentas" },
];

const STACK_ITEMS: TechItem[] = [
  {
    name: "Node.js",
    category: "backend",
    categoryLabel: "Back-end",
    usage: "Runtime principal para APIs, regras de negócio e automações.",
  },
  {
    name: "Express.js",
    category: "backend",
    categoryLabel: "Back-end",
    usage: "Estruturação de rotas REST, middlewares e arquitetura MVC.",
  },
  {
    name: "MongoDB Atlas & Mongoose",
    category: "backend",
    categoryLabel: "Banco de Dados",
    usage: "Modelagem de coleções, validações e índices compostos.",
  },
  {
    name: "node-cron & Rate Limit",
    category: "backend",
    categoryLabel: "Automação & Proteção",
    usage: "Tarefas agendadas em segundo plano e proteção de endpoints.",
  },
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    categoryLabel: "Linguagem",
    usage: "Linguagem principal em projetos web Full-Stack e Back-end.",
  },
  {
    name: "SQL",
    category: "languages",
    categoryLabel: "Banco Relacional",
    usage: "Consultas estruturadas, modelagem relacional e estudos acadêmicos.",
  },
  {
    name: "C / C++",
    category: "languages",
    categoryLabel: "Base Acadêmica",
    usage: "Algoritmos, estruturas de dados e fundamentos na faculdade.",
  },
  {
    name: "Python (Básico)",
    category: "languages",
    categoryLabel: "Automação & IA",
    usage: "Scripts auxiliares e experimentos de orquestração no JARVIS.",
  },
  {
    name: "HTML5, CSS3 & PWA",
    category: "frontend",
    categoryLabel: "Interface Web",
    usage: "Interfaces responsivas e instalação via Service Workers.",
  },
  {
    name: "WhatsApp Web API (Baileys)",
    category: "frontend",
    categoryLabel: "Integração",
    usage: "Disparo automático de lembretes e reativação de clientes.",
  },
  {
    name: "Chart.js",
    category: "frontend",
    categoryLabel: "Visualização",
    usage: "Gráficos operacionais em painéis administrativos.",
  },
  {
    name: "Git & GitHub",
    category: "infra",
    categoryLabel: "Versionamento",
    usage: "Controle de versão, histórico de commits e organização de repositórios.",
  },
  {
    name: "Postman",
    category: "infra",
    categoryLabel: "Testes de API",
    usage: "Validação de rotas, payloads JSON e cenários de erro.",
  },
  {
    name: "Render & UptimeRobot",
    category: "infra",
    categoryLabel: "Deploy & Monitoramento",
    usage: "Hospedagem de aplicações web e monitoramento de disponibilidade.",
  },
  {
    name: "Linux, Windows & Redes",
    category: "infra",
    categoryLabel: "Infraestrutura",
    usage: "Terminal, diagnóstico de sistemas, TCP/IP, DNS e hardware.",
  },
];

export function TechStack() {
  const shouldReduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<StackCategory>("all");

  const filtered =
    selected === "all"
      ? STACK_ITEMS
      : STACK_ITEMS.filter((item) => item.category === selected);

  return (
    <section
      id="tecnologias"
      aria-labelledby="stack-heading"
      className="relative py-20 sm:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#38BDF8]">
              <span className="w-5 h-px bg-[#38BDF8]" aria-hidden="true" />
              <span>STACK TECNOLÓGICA</span>
            </div>
            <h2
              id="stack-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-[1.1]"
            >
              Ferramentas usadas na prática.
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF]">
              Sem porcentagens inventadas — apenas as tecnologias reais e o
              contexto em que aplico cada uma.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar tecnologias por categoria"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => {
              const isActive = selected === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(cat.id)}
                  className={`font-mono text-xs px-3.5 py-2 rounded-lg border transition-all ${
                    isActive
                      ? "bg-[#38BDF8] text-[#050811] border-[#38BDF8] font-semibold shadow-[0_0_20px_rgba(56,189,248,0.28)]"
                      : "bg-[#0B1220]/70 text-[#9CA3AF] border-[#38BDF8]/15 hover:border-[#38BDF8]/45 hover:text-[#F5F7FA]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, y: -12, filter: "blur(4px)" }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((tech) => (
              <HoverGlowCard
                key={tech.name}
                subtle
                className="rounded-xl p-5"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]/70 group-hover:bg-[#38BDF8] group-hover:shadow-[0_0_8px_#38BDF8] transition-all shrink-0"
                      />
                      <h3 className="text-sm sm:text-base font-semibold text-[#F5F7FA] group-hover:text-[#BAE6FD] transition-colors truncate">
                        {tech.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#7DD3FC] shrink-0">
                      {tech.categoryLabel}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {tech.usage}
                  </p>
                </div>
              </HoverGlowCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="hud-divider" />
      </div>
    </section>
  );
}