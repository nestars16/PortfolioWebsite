import { Canvas } from "@react-three/fiber";
import { Outlet } from "react-router-dom";
import { SiteBackdrop } from "../pages/SiteBackdrop";

export function Scene() {
  const FOV = 70;
  return (
    <div
      id="canvas-container"
      className="h-full w-full flex justify-center items-center"
    >
      <Canvas camera={{ fov: FOV, position: [0, -30, 0], focus: 0.4 }}>
        <Outlet />
        <SiteBackdrop />
      </Canvas>
    </div>
  );
}
