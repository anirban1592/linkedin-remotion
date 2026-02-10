import React from "react";
import { Composition } from "remotion";
import { AppPromo } from "./compositions/AppPromo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AppPromo"
        component={AppPromo}
        durationInFrames={650}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
