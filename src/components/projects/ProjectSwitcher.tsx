"use client";

import { useRef } from "react";
import { Briefcase, Code2 } from "lucide-react";

export type ProjectViewMode = "business" | "engineering";

interface ProjectSwitcherProps {
  projectId: string;
  projectTitle: string;
  mode: ProjectViewMode;
  onChange: (mode: ProjectViewMode) => void;
}

export function ProjectSwitcher({
  projectId,
  projectTitle,
  mode,
  onChange,
}: ProjectSwitcherProps) {
  const businessRef = useRef<HTMLButtonElement>(null);
  const engineeringRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "End") {
      e.preventDefault();
      onChange("engineering");
      engineeringRef.current?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "Home") {
      e.preventDefault();
      onChange("business");
      businessRef.current?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label={`Alternar visualização do projeto ${projectTitle}`}
      className="inline-flex flex-wrap sm:flex-nowrap p-1 rounded-lg bg-[#060608] border border-white/15 w-full sm:w-auto"
    >
      <button
        ref={businessRef}
        id={`tab-${projectId}-business`}
        type="button"
        role="tab"
        aria-selected={mode === "business"}
        aria-controls={`panel-${projectId}-business`}
        tabIndex={mode === "business" ? 0 : -1}
        onClick={() => onChange("business")}
        onKeyDown={handleKeyDown}
        className={`flex-1 sm:flex-initial font-mono text-xs px-3.5 py-2.5 rounded-md transition-all inline-flex items-center justify-center gap-2 border ${
          mode === "business"
            ? "bg-[#00F0FF] text-[#060608] border-[#00F0FF] font-bold underline decoration-2 underline-offset-4"
            : "bg-transparent text-[#9CA3AF] border-transparent hover:text-[#F5F7FA]"
        }`}
      >
        <Briefcase className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>VISÃO DE NEGÓCIO</span>
      </button>

      <button
        ref={engineeringRef}
        id={`tab-${projectId}-engineering`}
        type="button"
        role="tab"
        aria-selected={mode === "engineering"}
        aria-controls={`panel-${projectId}-engineering`}
        tabIndex={mode === "engineering" ? 0 : -1}
        onClick={() => onChange("engineering")}
        onKeyDown={handleKeyDown}
        className={`flex-1 sm:flex-initial font-mono text-xs px-3.5 py-2.5 rounded-md transition-all inline-flex items-center justify-center gap-2 border ${
          mode === "engineering"
            ? "bg-[#FF4D00] text-[#F5F7FA] border-[#FF4D00] font-bold underline decoration-2 underline-offset-4"
            : "bg-transparent text-[#9CA3AF] border-transparent hover:text-[#F5F7FA]"
        }`}
      >
        <Code2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>{"{ } MODO ENGENHARIA"}</span>
      </button>
    </div>
  );
}