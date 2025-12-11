"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import LightRays from "./LightRays";
const BG = () => {
  const ismobile = useIsMobile();
  return (
    <div className="w-full h-screen absolute top-0 left-0">
      <LightRays
        raysOrigin="top-center"
        raysSpeed={0.5}
        lightSpread={1}
        rayLength={ismobile ? 5 : 1.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays -z-10 absolute top-0 left-0 "
      />
    </div>
  );
};

export default BG;
