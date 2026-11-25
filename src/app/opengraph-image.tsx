import { ImageResponse } from "next/og";

export const alt = "Lukas Macedo — Engenharia de Software, Back-end & Automação";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#050811",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.22), transparent 45%), radial-gradient(circle at 15% 85%, rgba(0, 240, 255, 0.14), transparent 45%)",
          color: "#F5F7FA",
          fontFamily: "sans-serif",
        }}
      >
        {/* Topo: Marca + Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
                borderRadius: "10px",
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.45)",
                color: "#00F0FF",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              [LM]
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "4px",
                color: "#F5F7FA",
              }}
            >
              LUKAS MACEDO
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              color: "#10B981",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "2px",
            }}
          >
            <span>● DISPONÍVEL PARA PROJETOS E VAGAS</span>
          </div>
        </div>

        {/* Centro: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span
            style={{
              color: "#38BDF8",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "4px",
            }}
          >
            ENGENHARIA DE SOFTWARE · BACK-END & FULL-STACK
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.08,
            }}
          >
            <span>SISTEMAS QUE GERAM RESULTADOS.</span>
            <span style={{ color: "#38BDF8" }}>ENGENHARIA FEITA PARA ESCALAR.</span>
          </div>
        </div>

        {/* Rodapé: Stack e Localização */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(56, 189, 248, 0.22)",
            fontSize: "18px",
            color: "#9CA3AF",
          }}
        >
          <span>Node.js · Express · MongoDB · SQL · Automação</span>
          <span style={{ color: "#F5F7FA" }}>Anápolis, GO</span>
        </div>
      </div>
    ),
    { ...size }
  );
}