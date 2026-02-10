import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { IntroScene } from "../scenes/IntroScene";
import { AppDemoScene } from "../scenes/AppDemoScene";
import { FeatureHighlights } from "../scenes/FeatureHighlights";
import { OutroScene } from "../scenes/OutroScene";

// Scene timing (in frames at 30fps)
const INTRO_START = 0;
const INTRO_DURATION = 90; // 3 seconds

const DEMO_START = 80; // slight overlap for transition
const DEMO_DURATION = 270; // 9 seconds

const FEATURES_START = 340;
const FEATURES_DURATION = 210; // 7 seconds

const OUTRO_START = 540;
const OUTRO_DURATION = 110; // ~3.7 seconds

export const AppPromo: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Sequence from={INTRO_START} durationInFrames={INTRO_DURATION} name="Intro">
        <IntroScene />
      </Sequence>

      <Sequence from={DEMO_START} durationInFrames={DEMO_DURATION} name="App Demo">
        <AppDemoScene />
      </Sequence>

      <Sequence from={FEATURES_START} durationInFrames={FEATURES_DURATION} name="Features">
        <FeatureHighlights />
      </Sequence>

      <Sequence from={OUTRO_START} durationInFrames={OUTRO_DURATION} name="Outro">
        <OutroScene />
      </Sequence>
    </div>
  );
};
