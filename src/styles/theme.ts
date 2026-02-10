export const theme = {
  colors: {
    background: "#0a0a0a",
    surface: "#141414",
    primary: "#3b82f6",
    primaryGlow: "rgba(59, 130, 246, 0.4)",
    accent: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.4)",
    text: "#ffffff",
    textMuted: "#a1a1aa",
    gradientStart: "#3b82f6",
    gradientEnd: "#8b5cf6",
  },
  fonts: {
    heading: "Inter, system-ui, -apple-system, sans-serif",
    body: "Inter, system-ui, -apple-system, sans-serif",
  },
} as const;

export const gradientText: React.CSSProperties = {
  background: `linear-gradient(135deg, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const glowShadow = (color: string, blur = 40) =>
  `0 0 ${blur}px ${color}, 0 0 ${blur * 2}px ${color}`;

export const baseContainer: React.CSSProperties = {
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: theme.fonts.heading,
  overflow: "hidden",
};
