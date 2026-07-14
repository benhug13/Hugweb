import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hugweb — Moderne Webseiten für KMU";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(96,165,250,0.25) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(168,85,247,0.25) 0%, transparent 55%), linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background:
                "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #a855f7 100%)",
              boxShadow: "0 12px 32px rgba(99,102,241,0.5)",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 5V19 M19 5V19 M5 12H19"
                stroke="#ffffff"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Hugweb
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "1000px",
            }}
          >
            <span style={{ marginRight: "0.25em" }}>Webseiten,</span>
            <span style={{ marginRight: "0.25em" }}>die</span>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #c084fc 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              verkaufen.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Festpreis ab 99 CHF · Online in 14 Tagen · Kein Baukasten.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <div style={{ display: "flex" }}>hugweb.cloud9.ch</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#34d399",
              }}
            />
            <span>Verfügbar für neue Projekte</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
