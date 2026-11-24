"use client";

import { useState } from "react";
import { ProjectDiagramData, ImplementationStatus } from "@/data/projects";
import { DiagramNode } from "@/components/projects/DiagramNode";
import { Cpu, ArrowRight, Info } from "lucide-react";

interface ArchitectureDiagramProps {
  data: ProjectDiagramData;
}

const STATUS_BADGE: Record<
  ImplementationStatus,
  { label: string; className: string }
> = {
  IMPLEMENTADO: {
    label: "IMPLEMENTADO",
    className: "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/35",
  },
  PLANEJADO: {
    label: "PLANEJADO",
    className: "bg-[#FF4D00]/15 text-[#FF4D00] border-[#FF4D00]/35",
  },
  NAO_VERIFICADO: {
    label: "NÃO VERIFICADO",
    className: "bg-white/10 text-[#9CA3AF] border-white/20",
  },
};

export function ArchitectureDiagram({ data }: ArchitectureDiagramProps) {
  const [selectedId, setSelectedId] = useState<string>(data.nodes[0]?.id ?? "");

  const selectedNode = data.nodes.find((n) => n.id === selectedId);

  const isEdgeHighlighted = (from: string, to: string) =>
    from === selectedId || to === selectedId;

  const isNodeConnected = (nodeId: string) => {
    if (nodeId === selectedId) return true;
    return data.edges.some(
      (edge) =>
        (edge.from === selectedId && edge.to === nodeId) ||
        (edge.to === selectedId && edge.from === nodeId)
    );
  };

  return (
    <div className="rounded-xl bg-[#060608] border border-white/10 p-4 sm:p-6 space-y-5">
      {/* Cabeçalho e Legenda */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h4 className="font-mono text-xs sm:text-sm font-semibold text-[#F5F7FA] uppercase tracking-wider">
            {data.title}
          </h4>
          <p className="text-xs text-[#9CA3AF] mt-1">{data.subtitle}</p>
        </div>

        {/* Legenda de Estados */}
        <div
          aria-label="Legenda de estados de implementação"
          className="flex flex-wrap items-center gap-3 font-mono text-[10px]"
        >
          <span className="inline-flex items-center gap-1.5 text-[#10B981]">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />● IMPLEMENTADO
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#FF4D00]">
            <span className="h-2 w-2 rounded-full bg-[#FF4D00]" />◐ PLANEJADO
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#9CA3AF]">
            <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />○ NÃO VERIFICADO
          </span>
        </div>
      </div>

      {/* Área SVG Interativa (Responsiva sem rolagem horizontal) */}
      <div className="w-full rounded-lg bg-[#090C12] border border-white/5 p-2 sm:p-4">
        <svg
          viewBox="0 0 760 310"
          role="img"
          aria-label={data.title}
          className="w-full h-auto max-h-[340px] select-none"
        >
          {/* Conexões SVG entre nós */}
          {data.edges.map((edge) => {
            const fromNode = data.nodes.find((n) => n.id === edge.from);
            const toNode = data.nodes.find((n) => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            const x1 = fromNode.x + fromNode.width / 2;
            const y1 = fromNode.y + fromNode.height / 2;
            const x2 = toNode.x + toNode.width / 2;
            const y2 = toNode.y + toNode.height / 2;
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const highlighted = isEdgeHighlighted(edge.from, edge.to);

            return (
              <g key={`${edge.from}-${edge.to}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={highlighted ? "#00F0FF" : "rgba(255,255,255,0.16)"}
                  strokeWidth={highlighted ? 2.2 : 1.2}
                  strokeDasharray={highlighted ? undefined : "5 4"}
                />
                {edge.label && (
                  <g>
                    <rect
                      x={midX - 42}
                      y={midY - 10}
                      width={84}
                      height={18}
                      rx={4}
                      fill="#060608"
                      stroke={highlighted ? "rgba(0,240,255,0.4)" : "rgba(255,255,255,0.1)"}
                    />
                    <text
                      x={midX}
                      y={midY + 2.5}
                      textAnchor="middle"
                      fill={highlighted ? "#00F0FF" : "#9CA3AF"}
                      fontSize="9"
                      fontFamily="var(--font-mono), monospace"
                    >
                      {edge.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Nós interativos */}
          {data.nodes.map((node) => (
            <DiagramNode
              key={node.id}
              node={node}
              isSelected={selectedId === node.id}
              isConnected={isNodeConnected(node.id)}
              onSelect={setSelectedId}
            />
          ))}
        </svg>
      </div>

      {/* Seletor rápido em botões para facilitar toque em smartphones */}
      <div className="flex flex-wrap gap-2 sm:hidden" aria-label="Selecionar nó no mobile">
        {data.nodes.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => setSelectedId(node.id)}
            aria-pressed={selectedId === node.id}
            className={`font-mono text-[11px] px-3 py-1.5 rounded border ${
              selectedId === node.id
                ? "bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]"
                : "bg-[#0D1117] border-white/10 text-[#9CA3AF]"
            }`}
          >
            {node.label}
          </button>
        ))}
      </div>

      {/* Painel de Detalhes do Nó Selecionado */}
      {selectedNode && (
        <div
          aria-live="polite"
          className="rounded-xl bg-[#0D1117] border border-white/10 p-4 sm:p-5 space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00F0FF]" aria-hidden="true" />
              <h5 className="font-mono text-sm font-bold text-[#F5F7FA]">
                {selectedNode.label}
              </h5>
              <span className="text-xs text-[#9CA3AF]">— {selectedNode.type}</span>
            </div>

            <span
              className={`font-mono text-[10px] px-2.5 py-1 rounded border ${
                STATUS_BADGE[selectedNode.status].className
              }`}
            >
              {STATUS_BADGE[selectedNode.status].label}
            </span>
          </div>

          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            {selectedNode.responsibility}
          </p>

          {selectedNode.fields && selectedNode.fields.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5">
              {selectedNode.fields.map((field) => (
                <li
                  key={field}
                  className="font-mono text-xs text-[#F5F7FA]/85 flex items-center gap-2"
                >
                  <span className="text-[#00F0FF]">▸</span>
                  <span>{field}</span>
                </li>
              ))}
            </ul>
          )}

          {selectedNode.relations.length > 0 && (
            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-[#9CA3AF]">Relações diretas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#9CA3AF]" aria-hidden="true" />
              {selectedNode.relations.map((relId) => {
                const target = data.nodes.find((n) => n.id === relId);
                if (!target) return null;
                return (
                  <button
                    key={relId}
                    type="button"
                    onClick={() => setSelectedId(relId)}
                    className="px-2 py-0.5 rounded bg-[#060608] border border-white/15 text-[#00F0FF] hover:border-[#00F0FF] text-[11px] transition-colors"
                  >
                    {target.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {data.note && (
        <p className="text-xs text-[#9CA3AF] flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" aria-hidden="true" />
          <span>{data.note}</span>
        </p>
      )}
    </div>
  );
}