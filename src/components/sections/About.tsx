"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Target,
} from "lucide-react";
import { PROFILE } from "@/data/profile";
import { HoverGlowCard } from "@/components/ui/HoverGlowCard";

const TIMELINE_ITEMS = [
  {
    icon: GraduationCap,
    tag: "FORMAÇÃO ACADÊMICA",
    title: "Engenharia de Software — UniEVANGÉLICA",
    period: "Em andamento · Previsão 06/2029",
    detail:
      "Base universitária voltada a arquitetura de sistemas, lógica estruturada, modelagem de dados e boas práticas de engenharia.",
    accent: "text-[#38BDF8]",
  },
  {
    icon: Briefcase,
    tag: "EXPERIÊNCIA PRÁTICA",
    title: "Suporte Técnico, Redes & Infraestrutura",
    period: "Autônomo · 2024 – Presente",
    detail:
      "Diagnóstico de incidentes em Windows e Linux, configuração de redes locais (TCP/IP, DNS, roteadores) e otimização de hardware.",
    accent: "text-[#10B981]",
  },
  {
    icon: Award,
    tag: "FORMAÇÃO COMPLEMENTAR",
    title: "Scrum (SFC™), Back-end Node.js & Projetos Reais",
    period: "SCRUMstudy · Alura · Laboratório Próprio",
    detail:
      "Certificação Scrum Fundamentals Certified (SFC™) voltada a entregas ágeis em equipe, aliada à formação Back-end Node.js (Alura), APIs RESTful com Express, MongoDB Atlas e automações.",
    accent: "text-[#FF4D00]",
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="relative py-20 sm:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna Esquerda: Resumo sobre o Lukas */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 24, filter: "blur(4px)" }
            }
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#38BDF8]">
              <span className="w-5 h-px bg-[#38BDF8]" aria-hidden="true" />
              <span>SOBRE MIM</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] leading-[1.12]"
            >
              Código pensado para resolver problemas de verdade.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
              <p>
                Sou{" "}
                <strong className="text-[#F5F7FA] font-semibold">
                  Lukas Fonseca Figueiredo Macedo
                </strong>
                , estudante de Engenharia de Software na UniEVANGÉLICA e
                desenvolvedor com foco em{" "}
                <strong className="text-[#F5F7FA] font-semibold">
                  Back-end, desenvolvimento Full-Stack e automação
                </strong>
                .
              </p>
              <p>
                Meu foco não é só fazer uma tela bonita: eu gosto de estruturar
                o sistema por trás — APIs organizadas, banco de dados bem
                modelado, regras de negócio confiáveis e rotinas que economizam
                tempo no dia a dia.
              </p>
              <p>
                Venho também da prática com infraestrutura, sistemas
                operacionais e redes, o que me dá uma visão completa de ponta a
                ponta — do código ao deploy em produção.
              </p>
            </div>

            {/* Metadados rápidos com hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <HoverGlowCard subtle className="rounded-xl p-3.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#38BDF8] uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Foco Atual</span>
                  </div>
                  <p className="text-xs text-[#F5F7FA]/90">
                    Estágio / Júnior Back-end & Full-Stack · Projetos Web
                  </p>
                </div>
              </HoverGlowCard>

              <HoverGlowCard subtle className="rounded-xl p-3.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#10B981] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Base</span>
                  </div>
                  <p className="text-xs text-[#F5F7FA]/90">
                    {PROFILE.location} · Remoto ou Presencial
                  </p>
                </div>
              </HoverGlowCard>
            </div>

            <div className="pt-2">
              <a
                href={PROFILE.resumePath}
                download="Curriculo_Lukas_Macedo.pdf"
                className="font-mono text-xs font-semibold tracking-wider px-5 py-3 rounded-lg border border-[#38BDF8]/45 bg-[#38BDF8]/10 text-[#7DD3FC] hover:bg-[#38BDF8] hover:text-[#050811] transition-all inline-flex items-center gap-2 shadow-[0_0_24px_rgba(56,189,248,0.18)]"
              >
                <span>BAIXAR CURRÍCULO COMPLETO (PDF)</span>
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Trajetória Real com HoverGlowCard */}
          <div className="lg:col-span-7 space-y-4">
            {TIMELINE_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 20, filter: "blur(4px)" }
                  }
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <HoverGlowCard className="rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
                        <Icon
                          className={`w-4 h-4 ${item.accent}`}
                          aria-hidden="true"
                        />
                        <span className={item.accent}>{item.tag}</span>
                      </div>
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/8 border border-[#38BDF8]/20 text-[#9CA3AF] w-fit">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-[#F5F7FA]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed mt-1.5">
                      {item.detail}
                    </p>
                  </HoverGlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="hud-divider" />
      </div>
    </section>
  );
}