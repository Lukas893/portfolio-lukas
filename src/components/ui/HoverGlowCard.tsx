"use client";

import { useState, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";

interface HoverGlowCardProps {
  children: ReactNode;
  className?: string;
  subtle?: boolean;
}

export function HoverGlowCard({
  children,
  className = "",
  subtle = false,
}: HoverGlowCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((prev) => ({ ...prev, active: false }))}
      className={`group relative overflow-hidden jarvis-card-hover ${
        subtle ? "jarvis-glass-subtle" : "jarvis-glass"
      } ${className}`}
    >
      {/* Filete luminoso azul-claro no topo ao passar o mouse */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Brilho radial seguindo o cursor */}
      {pos.active && !shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-200"
          style={{
            background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(56, 189, 248, 0.16), transparent 55%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}