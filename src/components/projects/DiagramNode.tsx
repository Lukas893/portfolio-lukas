"use client";

import { DiagramNodeData, ImplementationStatus } from "@/data/projects";

interface DiagramNodeProps {
  node: DiagramNodeData;
  isSelected: boolean;
  isConnected: boolean;
  onSelect: (id: string) => void;
}

const ACCENT_COLORS: Record<DiagramNodeData["accent"], string> = {
  cyan: "#00F0FF",
  orange: "#FF4D00",
  emerald: "#10B981",
  neutral: "#9CA3AF",
};

const STATUS_SYMBOL: Record<ImplementationStatus, string> = {
  IMPLEMENTADO: "● IMP",
  PLANEJADO: "◐ PLN",
  NAO_VERIFICADO: "○ N/V",
};

const STATUS_COLOR: Record<ImplementationStatus, string> = {
  IMPLEMENTADO: "#10B981",
  PLANEJADO: "#FF4D00",
  NAO_VERIFICADO: "#9CA3AF",
};

export function DiagramNode({
  node,
  isSelected,
  isConnected,
  onSelect,
}: DiagramNodeProps) {
  const accentHex = ACCENT_COLORS[node.accent];
  const opacity = isSelected || isConnected ? 1 : 0.45;

  const handleKeyDown = (e: React.KeyboardEvent<SVGGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(node.id);
    }
  };

  return (
    <g
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`${node.label} - ${node.type} - Status: ${node.status}`}
      onClick={() => onSelect(node.id)}
      onKeyDown={handleKeyDown}
      style={{ cursor: "pointer", opacity, transition: "opacity 200ms ease" }}
      className="focus:outline-none"
    >
      {/* Contorno externo quando selecionado */}
      {isSelected && (
        <rect
          x={node.x - 4}
          y={node.y - 4}
          width={node.width + 8}
          height={node.height + 8}
          rx={12}
          fill="none"
          stroke={accentHex}
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />
      )}

      {/* Corpo do Nó */}
      <rect
        x={node.x}
        y={node.y}
        width={node.width}
        height={node.height}
        rx={9}
        fill={isSelected ? "#111827" : "#0D1117"}
        stroke={isSelected ? accentHex : "rgba(255,255,255,0.18)"}
        strokeWidth={isSelected ? 2 : 1.2}
      />

      {/* Barra lateral de acento */}
      <rect
        x={node.x}
        y={node.y + 10}
        width={3.5}
        height={node.height - 20}
        rx={2}
        fill={accentHex}
      />

      {/* Rótulo superior */}
      <text
        x={node.x + 14}
        y={node.y + 22}
        fill="#9CA3AF"
        fontSize="9.5"
        fontFamily="var(--font-mono), monospace"
      >
        {node.shortType}
      </text>

      {/* Nome principal */}
      <text
        x={node.x + 14}
        y={node.y + 44}
        fill="#F5F7FA"
        fontSize="13.5"
        fontWeight="700"
        fontFamily="var(--font-sans), sans-serif"
      >
        {node.label}
      </text>

      {/* Badge de status dentro do nó */}
      <text
        x={node.x + 14}
        y={node.y + 64}
        fill={STATUS_COLOR[node.status]}
        fontSize="9.5"
        fontWeight="600"
        fontFamily="var(--font-mono), monospace"
      >
        {STATUS_SYMBOL[node.status]}
      </text>
    </g>
  );
}