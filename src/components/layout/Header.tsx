"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

const NAV_LINKS = [
  { id: "sobre", label: "Sobre", href: "#sobre" },
  { id: "projetos", label: "Projetos", href: "#projetos" },
  { id: "engenharia", label: "Engenharia", href: "#engenharia" },
  { id: "tecnologias", label: "Tecnologias", href: "#tecnologias" },
  { id: "contato", label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");

  useEffect(() => {
    const sectionIds = ["sobre", "projetos", "engenharia", "tecnologias", "contato"];

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 260) {
        setActiveId("inicio");
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          setActiveId(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060608]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-[#060608]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Identidade + Status */}
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#F5F7FA] flex items-center gap-2.5 group"
            aria-label="Início - Lukas Macedo"
          >
            <span className="px-2 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/35 text-[#00F0FF] transition-all duration-200 group-hover:bg-[#00F0FF]/20">
              [LM]
            </span>
            <span className="tracking-[0.14em]">{PROFILE.brandName}</span>
          </a>

          <div
            className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1117]/90 border border-white/10"
            title={PROFILE.status}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.16em] text-[#9CA3AF] uppercase">
              DISPONÍVEL
            </span>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0D1117]/75 border border-white/10"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-[#00F0FF]/12 text-[#00F0FF] border border-[#00F0FF]/30"
                    : "text-[#9CA3AF] hover:text-[#F5F7FA] border border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Ações */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PROFILE.resumePath}
            download="Curriculo_Lukas_Macedo.pdf"
            className="font-mono text-xs tracking-wider px-3.5 py-2 rounded-lg border border-white/15 bg-[#0D1117]/80 text-[#F5F7FA]/90 hover:border-[#00F0FF]/60 hover:text-[#00F0FF] transition-all inline-flex items-center gap-1.5"
            aria-label="Baixar currículo oficial em PDF"
          >
            <span>CURRÍCULO</span>
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <a
            href="#contato"
            className="font-mono text-xs font-semibold tracking-wider px-4 py-2 rounded-lg bg-[#00F0FF] text-[#060608] hover:bg-[#00F0FF]/90 transition-all inline-flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            <span>INICIAR CONVERSA</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg border border-white/10 bg-[#0D1117] text-[#F5F7FA] hover:text-[#00F0FF]"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#060608]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1117] border border-white/10 w-fit">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            <span className="font-mono text-[10px] tracking-wider text-[#9CA3AF]">
              {PROFILE.status}
            </span>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Navegação mobile">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-2 text-sm text-[#F5F7FA]/90 hover:text-[#00F0FF] border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={PROFILE.resumePath}
              download="Curriculo_Lukas_Macedo.pdf"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs text-center py-2.5 px-4 rounded-lg border border-white/15 bg-[#0D1117] text-[#F5F7FA] inline-flex items-center justify-center gap-2"
            >
              <span>CURRÍCULO PDF</span>
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs font-semibold text-center py-2.5 px-4 rounded-lg bg-[#00F0FF] text-[#060608]"
            >
              INICIAR CONVERSA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}