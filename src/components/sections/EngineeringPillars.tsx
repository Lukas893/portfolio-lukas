"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Server, Cpu, Network, Rocket } from "lucide-react";
import { HoverGlowCard } from "@/components/ui/HoverGlowCard";

const PILLARS = [
  {
    code: "01",
    icon: Server,
    title: "Back-end & Arquitetura MVC",
    description:
      "APIs RESTful estruturadas em Node.js e Express, regras de negócio centralizadas no servidor e modelagem de dados com índices compostos no MongoDB Atlas e SQL.",
    tags: ["Node.js", "Express", "MVC", "MongoDB"],
    accent: "text-[#38BDF8]",
  },
  {
    code: "02",
    icon: Cpu,
    title: "Automação Comercial Aplicada",
    description:
      "Rotinas agendadas com node-cron e integrações práticas (como WhatsApp Web API) para automatizar lembretes, reativação de clientes e fluxos operacionais.",
    tags: ["node-cron", "Baileys", "Webhooks"],
    accent: "text-[#FF4D00]",
  },
  {
    code: "03",
    icon: Network,
    title: "Infraestrutura, Redes & Sistemas",
    description:
      "Vivência prática com Linux, Windows, hardware e redes locais (TCP/IP, DNS), enxergando o sistema como um todo e não apenas linhas isoladas de código.",
    tags: ["Linux", "Redes TCP/IP", "Hardware"],
    accent: "text-[#10B981]",
  },
  {
    code: "04",
    icon: Rocket,
    title: "Entrega Ponta a Ponta",
    description:
      "Versionamento organizado no Git/GitHub, compressão, controle de taxa (rate limit), deploy em nuvem no Render e monitoramento contínuo de disponibilidade.",
    tags: ["Git/GitHub", "Render", "Rate Limit"],
    accent: "text-[#38BDF8]",
  },
];

export function EngineeringPillars() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="engenharia"
      aria-labelledby="engineering-heading"
      className="relative py-20 sm:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#38BDF8]">
            <span className="w-5 h-px bg-[#38BDF8]" aria-hidden="true" />
            <span>PILARES DE ENGENHARIA</span>
          </div>
          <h2
            id="engineering-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-[1.1]"
          >
            Como eu projeto e coloco sistemas no ar.
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Princípios práticos aplicados no desenvolvimento de aplicações web,
            APIs e automações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.code}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 20, filter: "blur(4px)" }
                }
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.07,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <HoverGlowCard className="rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between gap-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#9CA3AF]">
                        {pillar.code} // PILAR
                      </span>
                      <Icon
                        className={`w-5 h-5 ${pillar.accent} transition-transform duration-300 group-hover:scale-110`}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#F5F7FA]">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-[#9CA3AF] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-[#050811]/80 border border-[#38BDF8]/15 text-[#F5F7FA]/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </HoverGlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="hud-divider" />
      </div>
    </section>
  );
}