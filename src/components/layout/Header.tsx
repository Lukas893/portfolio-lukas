"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Engenharia", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060608]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-mono text-sm sm:text-base font-bold tracking-wider text-white flex items-center gap-2 group"
            aria-label="Início - Lukas Macedo"
          >
            <span className="text-[#00F0FF] transition-transform duration-200 group-hover:scale-105">
              [LM]
            </span>
            <span>{PROFILE.brandName}</span>
          </a>

          <div
            className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0D1117] border border-white/10"
            title={PROFILE.status}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="font-mono text-[10px] tracking-widest text-slate-300 uppercase">
              {PROFILE.status}
            </span>
          </div>
        </div>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PROFILE.resumePath}
            download="Curriculo_Lukas_Macedo.pdf"
            className="font-mono text-xs tracking-wider px-3.5 py-2 rounded border border-white/15 bg-[#0D1117]/80 text-slate-200 hover:border-[#00F0FF]/60 hover:text-[#00F0FF] transition-colors inline-flex items-center gap-1.5"
            aria-label="Baixar currículo oficial em PDF"
          >
            <span>[CURRÍCULO</span>
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>]</span>
          </a>

          <a
            href="#contato"
            className="font-mono text-xs font-semibold tracking-wider px-4 py-2 rounded bg-[#00F0FF] text-[#060608] hover:bg-[#00F0FF]/90 transition-colors inline-flex items-center gap-1.5"
          >
            <span>INICIAR CONVERSA</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded border border-white/10 bg-[#0D1117] text-slate-200 hover:text-[#00F0FF]"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#060608]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0D1117] border border-white/10 w-fit">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            <span className="font-mono text-[10px] tracking-wider text-slate-300">
              {PROFILE.status}
            </span>
          </div>

          <nav className="flex flex-col space-y-2" aria-label="Navegação mobile">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-base text-slate-300 hover:text-[#00F0FF] border-b border-white/5"
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
              className="font-mono text-xs text-center py-2.5 px-4 rounded border border-white/15 bg-[#0D1117] text-slate-200 inline-flex items-center justify-center gap-2"
            >
              <span>[CURRÍCULO</span>
              <Download className="w-3.5 h-3.5" />
              <span>]</span>
            </a>
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs font-semibold text-center py-2.5 px-4 rounded bg-[#00F0FF] text-[#060608]"
            >
              INICIAR CONVERSA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}