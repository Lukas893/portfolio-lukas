import { Database, AlertCircle } from "lucide-react";
import { ProjectData } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";

interface DatabaseDiagramProps {
  database: ProjectData["engineeringView"]["databaseDiagram"];
}

export function DatabaseDiagram({ database }: DatabaseDiagramProps) {
  return (
    <div className="space-y-5">
      <div className="p-4 sm:p-5 rounded-xl bg-[#060608] border border-white/10 flex items-start gap-3">
        <Database className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{database.summary}</p>
      </div>

      {database.hasConfirmedDatabase && database.diagram ? (
        <ArchitectureDiagram data={database.diagram} />
      ) : (
        <div className="p-6 rounded-xl bg-[#060608] border border-white/10 flex items-start gap-3">
          <AlertCircle
            className="w-5 h-5 text-[#FF4D00] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="space-y-1">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F5F7FA]">
              Diagrama Entidade-Relacionamento não aplicável no estágio atual
            </h4>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Consulte a aba <strong className="text-[#F5F7FA]">Arquitetura</strong> para
              inspecionar o diagrama interativo dos módulos conceituais do projeto.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}