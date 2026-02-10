import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { theme, gradientText, glowShadow, baseContainer } from "../styles/theme";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // CTA text spring in
  const ctaScale = spring({
    frame,
    fps,
    config: { damping: 10, mass: 0.8 },
  });
  const ctaOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // URL / secondary text
  const urlOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out at the end
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Background glow
  const glowScale = interpolate(frame, [0, 60], [0.5, 1.2], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ ...baseContainer, opacity: fadeOut }}>
      {/* Background glow orbs */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.accentGlow}, transparent 70%)`,
          opacity: 0.5,
          transform: `scale(${glowScale})`,
          filter: "blur(80px)",
          left: "20%",
          top: "20%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.primaryGlow}, transparent 70%)`,
          opacity: 0.4,
          transform: `scale(${glowScale})`,
          filter: "blur(80px)",
          right: "20%",
          bottom: "20%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* CTA */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            opacity: ctaOpacity,
            transform: `scale(${ctaScale})`,
            ...gradientText,
            letterSpacing: -1,
          }}
        >
          Get Started Today
        </div>

        {/* URL / subtext */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: theme.colors.textMuted,
            opacity: urlOpacity,
            fontFamily: theme.fonts.body,
            letterSpacing: 1,
          }}
        >
          yourapp.com
        </div>

        {/* CTA Button */}
        <div
          style={{
            opacity: urlOpacity,
            marginTop: 16,
            padding: "16px 48px",
            borderRadius: 12,
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`,
            fontSize: 22,
            fontWeight: 700,
            color: "#fff",
            fontFamily: theme.fonts.heading,
            boxShadow: glowShadow(theme.colors.primaryGlow, 25),
          }}
        >
          Try Free for 14 Days
        </div>
      </div>
    </div>
  );
};
