"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  MessageCircle,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { PROFILE } from "@/data/profile";

type ContactMode = "project" | "opportunity";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = useState<ContactMode>("project");

  const projectMessage =
    "Olá Lukas! Vi seu portfólio e gostaria de conversar sobre o desenvolvimento de um site ou sistema.";
  const opportunityMessage =
    "Olá Lukas! Vi seu portfólio e gostaria de conversar sobre uma oportunidade na área de desenvolvimento.";

  return (
    <>
      <section
        id="contato"
        aria-labelledby="contact-heading"
        className="relative py-20 sm:py-28 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="jarvis-glass rounded-3xl p-6 sm:p-10 lg:p-12 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Lado Esquerdo: Chamada + Seletor de Objetivo */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#38BDF8]">
                  <span className="w-5 h-px bg-[#38BDF8]" aria-hidden="true" />
                  <span>CONTATO & CONVERSA</span>
                </div>

                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-[1.1]"
                >
                  Vamos tirar seu projeto do papel ou conversar sobre uma vaga.
                </h2>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl">
                  Escolha o motivo do contato abaixo para iniciar uma conversa direta comigo no WhatsApp ou por e-mail.
                </p>

                {/* Seletor de Contexto */}
                <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#050811]/80 border border-[#38BDF8]/15">
                  <button
                    type="button"
                    onClick={() => setMode("project")}
                    className={`font-mono text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2 transition-all ${
                      mode === "project"
                        ? "bg-[#38BDF8] text-[#050811] font-semibold shadow-[0_0_20px_rgba(56,189,248,0.28)]"
                        : "text-[#9CA3AF] hover:text-[#F5F7FA]"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>QUERO UM SITE OU SISTEMA</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("opportunity")}
                    className={`font-mono text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2 transition-all ${
                      mode === "opportunity"
                        ? "bg-[#38BDF8] text-[#050811] font-semibold shadow-[0_0_20px_rgba(56,189,248,0.28)]"
                        : "text-[#9CA3AF] hover:text-[#F5F7FA]"
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>VAGA / RECRUTAMENTO</span>
                  </button>
                </div>

                {/* Ação Dinâmica */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="p-5 rounded-2xl bg-[#050811]/75 border border-[#38BDF8]/15 space-y-4"
                  >
                    {mode === "project" ? (
                      <>
                        <p className="text-sm text-[#F5F7FA]/90">
                          Desenvolvimento de sites profissionais, sistemas de agendamento, painéis administrativos e automações sob medida.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={PROFILE.getWhatsAppUrl(projectMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs font-bold tracking-wider px-5 py-3 rounded-lg bg-[#00F0FF] text-[#050811] hover:bg-[#38BDF8] transition-all inline-flex items-center gap-2 shadow-[0_0_24px_rgba(56,189,248,0.25)]"
                          >
                            <MessageCircle className="w-4 h-4" aria-hidden="true" />
                            <span>FALAR NO WHATSAPP</span>
                            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                          <a
                            href={`mailto:${PROFILE.email}?subject=Novo%20Projeto%20Web`}
                            className="font-mono text-xs px-5 py-3 rounded-lg border border-[#38BDF8]/20 bg-[#0B1220]/80 text-[#F5F7FA] hover:border-[#38BDF8]/60 hover:text-[#7DD3FC] transition-colors inline-flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4" aria-hidden="true" />
                            <span>ENVIAR E-MAIL</span>
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-[#F5F7FA]/90">
                          Disponível para oportunidades de Estágio ou Desenvolvedor Júnior em Back-end e Full-Stack (Node.js / JavaScript / APIs).
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={PROFILE.getWhatsAppUrl(opportunityMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs font-bold tracking-wider px-5 py-3 rounded-lg bg-[#00F0FF] text-[#050811] hover:bg-[#38BDF8] transition-all inline-flex items-center gap-2 shadow-[0_0_24px_rgba(56,189,248,0.25)]"
                          >
                            <MessageCircle className="w-4 h-4" aria-hidden="true" />
                            <span>CHAMAR NO WHATSAPP</span>
                            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                          <a
                            href={PROFILE.resumePath}
                            download="Curriculo_Lukas_Macedo.pdf"
                            className="font-mono text-xs px-5 py-3 rounded-lg border border-[#38BDF8]/20 bg-[#0B1220]/80 text-[#F5F7FA] hover:border-[#38BDF8]/60 hover:text-[#7DD3FC] transition-colors inline-flex items-center gap-2"
                          >
                            <Download className="w-4 h-4" aria-hidden="true" />
                            <span>BAIXAR CURRÍCULO PDF</span>
                          </a>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Lado Direito: Canais Diretos com Hover */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] mb-2">
                  CANAIS DIRETOS
                </p>

                <a
                  href={PROFILE.getWhatsAppUrl(projectMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jarvis-card-hover flex items-center justify-between p-4 rounded-xl bg-[#050811]/80 border border-[#38BDF8]/15 group"
                >
                  <div>
                    <p className="font-mono text-[10px] text-[#10B981]">WHATSAPP</p>
                    <p className="text-sm font-medium text-[#F5F7FA] mt-0.5">
                      {PROFILE.whatsappDisplay}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#10B981] transition-colors" aria-hidden="true" />
                </a>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="jarvis-card-hover flex items-center justify-between p-4 rounded-xl bg-[#050811]/80 border border-[#38BDF8]/15 group"
                >
                  <div>
                    <p className="font-mono text-[10px] text-[#38BDF8]">E-MAIL</p>
                    <p className="text-sm font-medium text-[#F5F7FA] mt-0.5 break-all">
                      {PROFILE.email}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#38BDF8] transition-colors shrink-0" aria-hidden="true" />
                </a>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jarvis-card-hover flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#050811]/80 border border-[#38BDF8]/15 text-xs font-mono text-[#F5F7FA] hover:text-[#7DD3FC]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jarvis-card-hover flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#050811]/80 border border-[#38BDF8]/15 text-xs font-mono text-[#F5F7FA] hover:text-[#7DD3FC]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050811]/70 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <span className="text-[#38BDF8] font-bold">[LM]</span>
            <span>{PROFILE.fullName} · {PROFILE.location}</span>
          </div>
          <a
            href="#inicio"
            className="hover:text-[#38BDF8] transition-colors"
          >
            VOLTAR AO TOPO ↑
          </a>
        </div>
      </footer>
    </>
  );
}