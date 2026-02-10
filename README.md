# App Promo Video

A sleek, dark-themed marketing video built with [Remotion](https://www.remotion.dev/) — designed to showcase app screen recordings with animated text overlays and zoom effects.

## What's Inside

The video is a ~22 second Full HD (1920x1080) composition at 30fps, broken into four scenes:

1. **Intro** — App name and tagline fade in with spring animations and a pulsing background glow
2. **App Demo** — A mock dashboard UI with slow zoom and pan effects, plus a floating annotation label
3. **Feature Highlights** — Three feature cards slide in with staggered timing
4. **Outro** — Call-to-action text with gradient glow orbs and a fade-out

All scenes use a dark background (`#0a0a0a`) with blue/purple gradient accents and glow effects.

## Project Structure

```
src/
├── index.ts                     # Remotion entry point
├── Root.tsx                     # Composition registration
├── styles/theme.ts              # Colors, fonts, glow helpers
├── compositions/AppPromo.tsx    # Main composition (scene sequencing)
└── scenes/
    ├── IntroScene.tsx
    ├── AppDemoScene.tsx
    ├── FeatureHighlights.tsx
    └── OutroScene.tsx
public/                          # Place your screen recordings here
out/                             # Rendered videos output here
```

## Prerequisites

- Node.js 18+ (this project uses Node 22 via nvm)
- npm

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Preview in Remotion Studio

```bash
npx remotion preview src/index.ts
```

This opens a browser-based studio where you can scrub through the timeline, inspect scenes, and tweak props in real time.

### 3. Render the final video

```bash
npx remotion render src/index.ts AppPromo out/app-promo.mp4
```

The rendered `.mp4` will be saved to `out/app-promo.mp4`.

## Using Your Own Screen Recordings

The project currently uses a mock dashboard UI as a placeholder. To swap in real footage:

1. Drop your `.mp4` files into the `public/` directory
2. In `src/scenes/AppDemoScene.tsx`, replace the mock UI `<div>` with:
   ```tsx
   import { Video, staticFile } from "remotion";

   <Video src={staticFile("your-clip.mp4")} />
   ```
3. Adjust zoom timestamps and durations in the scene to match your footage

## Customization

- **Text & branding** — Edit scene files in `src/scenes/` to change app name, tagline, features, and CTA
- **Colors & fonts** — Update `src/styles/theme.ts`
- **Timing** — Adjust `Sequence` offsets and durations in `src/compositions/AppPromo.tsx`
- **Resolution/FPS** — Change the `Composition` props in `src/Root.tsx`
