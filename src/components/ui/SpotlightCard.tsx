"use client";

import { useState, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 240, 255, 0.08)",
}: SpotlightCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [coords, setCoords] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords((prev) => ({ ...prev, visible: false }))}
      className={`relative overflow-hidden rounded-2xl bg-[#0D1117]/85 border border-white/10 ${className}`}
    >
      {!shouldReduceMotion && coords.visible && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(520px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 45%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}