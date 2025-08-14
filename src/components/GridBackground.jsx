export default function GridBackground({ theme = "dark" }) {
  const isDark = theme === "dark";

  // Colors tuned for a poppy, vibrant feel on dark surfaces
  const baseColor = isDark ? "#0B0F1A" : "#0f172a";
  const lineColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const vignetteFrom = isDark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)";
  const vignetteTo = "rgba(0,0,0,0)";
  const glow = isDark
    ? "radial-gradient(800px 400px at 80% -10%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(700px 360px at 10% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(600px 320px at 50% 110%, rgba(236,72,153,0.18), transparent 60%)"
    : "radial-gradient(800px 400px at 80% -10%, rgba(147,51,234,0.15), transparent 60%), radial-gradient(700px 360px at 10% 0%, rgba(14,165,233,0.15), transparent 60%), radial-gradient(600px 320px at 50% 110%, rgba(244,63,94,0.15), transparent 60%)";

  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      {/* Base */}
      <div
        className="absolute inset-0"
        style={{ background: baseColor }}
      />

      {/* Vibrant glow accents */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: glow,
          filter: "blur(12px)",
        }}
      />

      {/* Grid overlay with soft edges via mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "-1px -1px, -1px -1px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 70%, rgba(0,0,0,0.25) 85%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse at center, black 70%, rgba(0,0,0,0.25) 85%, transparent 100%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 60%, ${vignetteTo}, ${vignetteFrom})`,
        }}
      />
    </div>
  );
}


