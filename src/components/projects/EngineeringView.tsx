"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ProjectData, ImplementationStatus } from "@/data/projects";
import {
  EngineeringTabs,
  EngineeringTabId,
} from "@/components/projects/EngineeringTabs";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { DatabaseDiagram } from "@/components/projects/DatabaseDiagram";
import { SecurityStatus } from "@/components/projects/SecurityStatus";

interface EngineeringViewProps {
  project: ProjectData;
}

const LAYER_STATUS_STYLE: Record<ImplementationStatus, string> = {
  IMPLEMENTADO: "text-[#10B981]",
  PLANEJADO: "text-[#FF4D00]",
  NAO_VERIFICADO: "text-[#9CA3AF]",
};

export function EngineeringView({ project }: EngineeringViewProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<EngineeringTabId>("architecture");
  const eng = project.engineeringView;

  return (
    <div
      id={`panel-${project.id}-engineering`}
      role="tabpanel"
      aria-labelledby={`tab-${project.id}-engineering`}
      className="space-y-6"
    >
      <EngineeringTabs
        projectId={project.id}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          id={`eng-panel-${project.id}-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`eng-tab-${project.id}-${activeTab}`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "architecture" && (
            <div className="space-y-6">
              <p className="text-sm text-[#F5F7FA]/90 leading-relaxed max-w-3xl">
                {eng.architectureSummary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eng.architectureLayers.map((item) => (
                  <div
                    key={item.layer}
                    className="p-4 rounded-xl bg-[#060608] border border-white/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-mono text-xs font-semibold text-[#00F0FF]">
                        {item.layer}
                      </h4>
                      <span
                        className={`font-mono text-[10px] ${
                          LAYER_STATUS_STYLE[item.status]
                        }`}
                      >
                        {item.status.replace("_", " ")}
                      </span>
                    </div>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">
                      {item.responsibility}
                    </p>
                  </div>
                ))}
              </div>

              <ArchitectureDiagram data={eng.architectureDiagram} />
            </div>
          )}

          {activeTab === "database" && (
            <DatabaseDiagram database={eng.databaseDiagram} />
          )}

          {activeTab === "security" && <SecurityStatus security={eng.security} />}

          {activeTab === "evolution" && (
            <div className="p-5 sm:p-6 rounded-xl bg-[#060608] border border-white/10 space-y-5">
              <p className="text-sm text-[#F5F7FA]/90 leading-relaxed">
                {eng.evolution.summary}
              </p>
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#00F0FF]">
                  Decisões Técnicas & Arquiteturais
                </h4>
                <ul className="space-y-2.5 text-sm text-[#9CA3AF]">
                  {eng.evolution.decisions.map((decision) => (
                    <li key={decision} className="flex items-start gap-2.5">
                      <span className="text-[#00F0FF] font-mono">▸</span>
                      <span className="leading-relaxed">{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}