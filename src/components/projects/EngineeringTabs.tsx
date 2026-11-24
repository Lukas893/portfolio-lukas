"use client";

import { useRef } from "react";
import { Layers, Database, Shield, GitBranch } from "lucide-react";

export type EngineeringTabId =
  | "architecture"
  | "database"
  | "security"
  | "evolution";

const TABS: { id: EngineeringTabId; label: string; icon: typeof Layers }[] = [
  { id: "architecture", label: "Arquitetura", icon: Layers },
  { id: "database", label: "Banco de Dados & Diagramas", icon: Database },
  { id: "security", label: "Segurança", icon: Shield },
  { id: "evolution", label: "Engenharia & Evolução", icon: GitBranch },
];

interface EngineeringTabsProps {
  projectId: string;
  activeTab: EngineeringTabId;
  onChange: (tab: EngineeringTabId) => void;
}

export function EngineeringTabs({
  projectId,
  activeTab,
  onChange,
}: EngineeringTabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % TABS.length;
    else if (e.key === "ArrowLeft")
      nextIndex = (index - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = TABS.length - 1;
    else return;

    e.preventDefault();
    onChange(TABS[nextIndex].id);
    refs.current[nextIndex]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Sub-abas técnicas do Modo Engenharia"
      className="flex flex-wrap gap-2 pb-4 border-b border-white/10"
    >
      {TABS.map((tab, index) => {
        const Icon = tab.icon;
        const isSelected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[index] = el;
            }}
            id={`eng-tab-${projectId}-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`eng-panel-${projectId}-${tab.id}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`font-mono text-xs px-3.5 py-2 rounded-md border transition-colors inline-flex items-center gap-2 ${
              isSelected
                ? "bg-[#00F0FF]/12 border-[#00F0FF] text-[#00F0FF] font-semibold"
                : "bg-[#060608] border-white/10 text-[#9CA3AF] hover:text-[#F5F7FA]"
            }`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}