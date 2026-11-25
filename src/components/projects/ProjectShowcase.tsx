"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ProjectData } from "@/data/projects";
import {
  ProjectSwitcher,
  ProjectViewMode,
} from "@/components/projects/ProjectSwitcher";
import { BusinessView } from "@/components/projects/BusinessView";
import { EngineeringView } from "@/components/projects/EngineeringView";
import { FloydMockup } from "@/components/projects/FloydMockup";
import { JarvisMockup } from "@/components/projects/JarvisMockup";

interface ProjectShowcaseProps {
  project: ProjectData;
  index: number;
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = useState<ProjectViewMode>("business");
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 28, filter: "blur(5px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-12 sm:py-16"
    >
      {/* Linha luminosa separando projetos */}
      {index > 0 && <div className="hud-divider mb-14 sm:mb-20" />}

      {/* Topo Aberto e Cinematográfico (sem caixa externa pesada) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div
          className={`lg:col-span-6 space-y-5 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.18em]">
            <span className="w-5 h-px bg-[#00F0FF]" aria-hidden="true" />
            <span className="text-[#00F0FF]">PROJETO {project.code}</span>
            <span className="text-white/20">·</span>
            <span className="text-[#9CA3AF]">{project.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
              {project.title}
            </h3>
            <span
              className={`font-mono px-2.5 py-1 rounded-full text-[10px] tracking-wider border ${
                project.isExperimental
                  ? "bg-[#FF4D00]/10 border-[#FF4D00]/35 text-[#FF4D00]"
                  : "bg-[#10B981]/10 border-[#10B981]/35 text-[#10B981]"
              }`}
            >
              {project.statusLabel}
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            {project.description}
          </p>

          {/* Stack minimalista */}
          <div className="space-y-2 pt-1">
            {project.stackGroups.map((group) => (
              <div
                key={group.group}
                className="flex flex-wrap items-center gap-1.5"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]/80 mr-1">
                  {group.group}:
                </span>
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-[#0D1117]/70 border border-white/10 text-[#F5F7FA]/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Links Oficiais */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold px-5 py-2.5 rounded-lg bg-[#00F0FF] text-[#060608] hover:bg-[#00F0FF]/90 transition-all inline-flex items-center gap-2 shadow-[0_0_24px_rgba(0,240,255,0.22)]"
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
                  className="font-mono text-xs px-5 py-2.5 rounded-lg bg-[#0D1117]/70 border border-white/15 text-[#F5F7FA] hover:border-[#00F0FF]/60 hover:text-[#00F0FF] transition-colors inline-flex items-center gap-2"
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

        {/* Showcase Interativo do Projeto */}
        <div
          className={`lg:col-span-6 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {project.id === "floyd-barbershop" ? (
            <FloydMockup />
          ) : (
            <JarvisMockup />
          )}
        </div>
      </div>

      {/* Painel de Análise (Visão de Negócio / Modo Engenharia) */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00F0FF]">
              — PERSPECTIVA DE INSPEÇÃO
            </span>
            <p className="text-xs text-[#9CA3AF]">
              Alterne entre visão executiva e inspeção técnica de arquitetura, banco de dados e segurança.
            </p>
          </div>

          <ProjectSwitcher
            projectId={project.id}
            projectTitle={project.title}
            mode={mode}
            onChange={setMode}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, y: -12, filter: "blur(4px)" }
            }
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            {mode === "business" ? (
              <BusinessView project={project} />
            ) : (
              <EngineeringView project={project} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.article>
  );
}