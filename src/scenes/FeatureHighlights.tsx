import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { theme, gradientText, glowShadow, baseContainer } from "../styles/theme";

const features = [
  { icon: "⚡", title: "Lightning Fast", desc: "Sub-second response times" },
  { icon: "🔒", title: "Secure by Default", desc: "Enterprise-grade security" },
  { icon: "📊", title: "Real-time Analytics", desc: "Insights at a glance" },
];

export const FeatureHighlights: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section title
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={baseContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 60,
          position: "relative",
        }}
      >
        {/* Section title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            ...gradientText,
          }}
        >
          Why Choose Us
        </div>

        {/* Feature cards */}
        <div style={{ display: "flex", gap: 40 }}>
          {features.map((feature, i) => {
            const delay = 25 + i * 20;
            const cardSpring = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, mass: 0.8 },
            });
            const cardOpacity = interpolate(frame, [delay, delay + 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const cardY = interpolate(cardSpring, [0, 1], [60, 0]);

            return (
              <div
                key={i}
                style={{
                  width: 320,
                  padding: "48px 32px",
                  borderRadius: 16,
                  background: `linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  opacity: cardOpacity,
                  transform: `translateY(${cardY}px)`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
                }}
              >
                <div style={{ fontSize: 48 }}>{feature.icon}</div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: theme.colors.text,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: theme.colors.textMuted,
                    fontFamily: theme.fonts.body,
                    textAlign: "center",
                  }}
                >
                  {feature.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
