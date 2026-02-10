import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { theme, gradientText, glowShadow, baseContainer } from "../styles/theme";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // App name spring animation
  const titleScale = spring({ frame, fps, config: { damping: 12, mass: 0.8 } });
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Tagline slides up and fades in
  const taglineProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14, mass: 0.6 },
  });
  const taglineY = interpolate(taglineProgress, [0, 1], [40, 0]);
  const taglineOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtle background glow pulse
  const glowOpacity = interpolate(
    frame,
    [0, 45, 90],
    [0, 0.6, 0.3],
    { extrapolateRight: "clamp" }
  );

  return (
    <div style={baseContainer}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.primaryGlow}, transparent 70%)`,
          opacity: glowOpacity,
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* App Name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -2,
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            ...gradientText,
          }}
        >
          YourApp
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: theme.colors.textMuted,
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Reimagine What's Possible
        </div>
      </div>
    </div>
  );
};
