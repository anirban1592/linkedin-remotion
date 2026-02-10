import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from "remotion";
import { theme, glowShadow, baseContainer } from "../styles/theme";

export const AppDemoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Fade in the "screen"
  const fadeIn = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Zoom effect: slowly zoom into the mock screen
  const zoomScale = interpolate(frame, [0, durationInFrames], [1, 1.3], {
    extrapolateRight: "clamp",
  });

  // Pan effect: subtle drift
  const panX = interpolate(frame, [0, durationInFrames], [0, -40], {
    extrapolateRight: "clamp",
  });
  const panY = interpolate(frame, [60, durationInFrames], [0, -30], {
    extrapolateRight: "clamp",
  });

  // Floating label that appears mid-scene
  const labelOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const labelY = interpolate(frame, [60, 80], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={baseContainer}>
      {/* Mock app screen with zoom */}
      <div
        style={{
          width: 900,
          height: 560,
          borderRadius: 16,
          overflow: "hidden",
          opacity: fadeIn,
          transform: `scale(${zoomScale}) translate(${panX}px, ${panY}px)`,
          boxShadow: glowShadow(theme.colors.primaryGlow, 30),
          border: `1px solid rgba(255,255,255,0.1)`,
          position: "relative",
        }}
      >
        {/* Placeholder: gradient screen simulating an app UI */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(160deg, ${theme.colors.surface} 0%, #1a1a2e 50%, ${theme.colors.surface} 100%)`,
            display: "flex",
            flexDirection: "column",
            padding: 40,
            gap: 20,
          }}
        >
          {/* Mock top bar */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
            <div style={{ flex: 1 }} />
            <div
              style={{
                width: 200,
                height: 28,
                borderRadius: 6,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>

          {/* Mock sidebar + content layout */}
          <div style={{ display: "flex", flex: 1, gap: 24 }}>
            {/* Sidebar */}
            <div style={{ width: 180, display: "flex", flexDirection: "column", gap: 12 }}>
              {[0.8, 0.6, 0.7, 0.5, 0.4].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 14,
                    width: `${w * 100}%`,
                    borderRadius: 4,
                    background:
                      i === 0
                        ? `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`
                        : "rgba(255,255,255,0.08)",
                  }}
                />
              ))}
            </div>

            {/* Main content area */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Cards row */}
              <div style={{ display: "flex", gap: 16 }}>
                {[theme.colors.primary, theme.colors.accent, "#22c55e"].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: 80,
                      borderRadius: 10,
                      background: `linear-gradient(135deg, ${color}22, ${color}44)`,
                      border: `1px solid ${color}33`,
                    }}
                  />
                ))}
              </div>
              {/* Content block */}
              <div
                style={{
                  flex: 1,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating annotation label */}
      <div
        style={{
          position: "absolute",
          right: 120,
          top: 200,
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`,
          padding: "12px 24px",
          borderRadius: 8,
          fontSize: 20,
          fontWeight: 600,
          color: "#fff",
          fontFamily: theme.fonts.heading,
          boxShadow: glowShadow(theme.colors.primaryGlow, 20),
        }}
      >
        Beautiful Dashboard
      </div>
    </div>
  );
};
