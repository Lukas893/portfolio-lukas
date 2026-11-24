"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ProjectData } from "@/data/projects";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  ProjectSwitcher,
  ProjectViewMode,
} from "@/components/projects/ProjectSwitcher";
import { BusinessView } from "@/components/projects/BusinessView";
import { EngineeringView } from "@/components/projects/EngineeringView";

interface ProjectShowcaseProps {
  project: ProjectData;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = useState<ProjectViewMode>("business");

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <SpotlightCard className="p-6 sm:p-8 lg:p-10">
        {/* Cabeçalho Cinematográfico do Projeto */}
        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <span className="text-[#00F0FF] font-semibold">
                PROJETO {project.code}
              </span>
              <span className="text-white/25">//</span>
              <span className="text-[#9CA3AF]">{project.category}</span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] tracking-wider border ${
                  project.isExperimental
                    ? "bg-[#FF4D00]/12 border-[#FF4D00]/35 text-[#FF4D00]"
                    : "bg-[#10B981]/12 border-[#10B981]/35 text-[#10B981]"
                }`}
              >
                {project.statusLabel}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F7FA]">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
              {project.description}
            </p>

            {/* Tecnologias organizadas */}
            <div className="space-y-2.5 pt-2">
              {project.stackGroups.map((group) => (
                <div
                  key={group.group}
                  className="flex flex-wrap items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] mr-1">
                    {group.group}:
                  </span>
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#060608] border border-white/10 text-[#F5F7FA]/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Controles: Seletor de Perspetiva + Links Oficiais */}
          <div className="flex flex-col items-start xl:items-end gap-4 shrink-0">
            <ProjectSwitcher
              projectId={project.id}
              projectTitle={project.title}
              mode={mode}
              onChange={setMode}
            />

            {(project.liveUrl || project.repoUrl) && (
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs px-4 py-2.5 rounded bg-[#060608] border border-white/15 text-[#F5F7FA] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors inline-flex items-center gap-2"
                  >
                    <span>ACESSAR APLICAÇÃO</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs px-4 py-2.5 rounded bg-[#060608] border border-white/15 text-[#F5F7FA] hover:border-white/40 transition-colors inline-flex items-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>CÓDIGO-FONTE</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Corpo Dinâmico */}
        <div className="pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
            >
              {mode === "business" ? (
                <BusinessView project={project} />
              ) : (
                <EngineeringView project={project} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}