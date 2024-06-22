import { useFrame } from "@react-three/fiber";
import React from "react";
import { Group } from "three";

export type RotateProps = {
  children: React.ReactNode;
  factor?: number;
};

export function Rotate({ children, factor = 0.05 }: RotateProps) {
  const parent = React.useRef<Group>() as React.MutableRefObject<Group>;
  useFrame(({ clock }) => {
    const dt = clock.getElapsedTime();
    parent.current.rotation.set(
      Math.cos(dt) * factor,
      Math.sin(dt) * factor,
      Math.cos(dt) * factor,
    );
  });

  return <group ref={parent}>{children}</group>;
}
