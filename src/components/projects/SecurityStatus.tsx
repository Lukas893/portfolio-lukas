import { ShieldCheck, Clock, HelpCircle, Info } from "lucide-react";
import { ProjectData } from "@/data/projects";

interface SecurityStatusProps {
  security: ProjectData["engineeringView"]["security"];
}

export function SecurityStatus({ security }: SecurityStatusProps) {
  const hasUnverified = security.unverified.length > 0;

  return (
    <div className="space-y-5">
      <div
        className={`grid grid-cols-1 ${
          hasUnverified ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } gap-4`}
      >
        {/* IMPLEMENTADO */}
        <div className="p-5 rounded-xl bg-[#060608] border border-[#10B981]/30 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#10B981] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>IMPLEMENTADO</span>
          </div>
          {security.implemented.length > 0 ? (
            <ul className="space-y-3">
              {security.implemented.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="text-sm font-medium text-[#F5F7FA]">{item.title}</p>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-[#9CA3AF]">
              Nenhum controle implementado listado.
            </p>
          )}
        </div>

        {/* PLANEJADO */}
        <div className="p-5 rounded-xl bg-[#060608] border border-[#FF4D00]/30 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#FF4D00] uppercase tracking-wider">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>PLANEJADO</span>
          </div>
          {security.planned.length > 0 ? (
            <ul className="space-y-3">
              {security.planned.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="text-sm font-medium text-[#F5F7FA]">{item.title}</p>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-[#9CA3AF]">Sem itens planejados listados.</p>
          )}
        </div>

        {/* NÃO VERIFICADO (só renderiza se houver itens) */}
        {hasUnverified && (
          <div className="p-5 rounded-xl bg-[#060608] border border-white/15 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span>NÃO VERIFICADO</span>
            </div>
            <ul className="space-y-3">
              {security.unverified.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="text-sm font-medium text-[#F5F7FA]">{item.title}</p>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="text-xs text-[#9CA3AF] flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" aria-hidden="true" />
        <span>{security.disclaimer}</span>
      </p>
    </div>
  );
}