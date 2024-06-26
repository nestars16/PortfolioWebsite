import {
  Icosahedron,
  Box,
  Dodecahedron,
  Octahedron,
  MeshWobbleMaterial,
  RoundedBox,
  Environment,
} from "@react-three/drei";
import { generatePointsInFrustum, getRandomColor } from "../../lib/utils";
import { Color, MathUtils } from "three";
import { Rotate } from "../3d/Rotate";

export type SiteBackdropProps = {
  home_page_object_count?: number;
  fov?: number;
  max_depth?: number;
};

export function SiteBackdrop({
  home_page_object_count = 500,
  fov = 100,
  max_depth = 10,
}: SiteBackdropProps) {
  const possibleShapes = [
    Icosahedron,
    Box,
    Dodecahedron,
    Octahedron,
    RoundedBox,
  ];

  const bgObjectPoints = generatePointsInFrustum(
    home_page_object_count,
    fov,
    max_depth,
  );

  return (
    <>
      <Environment
        backgroundIntensity={1}
        backgroundRotation={[0, Math.PI / 2, 0]}
        environmentIntensity={1}
        environmentRotation={[0, Math.PI / 2, 0]}
        preset={"dawn"}
      />
      <Rotate>
        {bgObjectPoints.map((vector, index) => {
          const ChosenShape =
            possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
          return (
            <ChosenShape position={vector.toArray()} key={index}>
              <MeshWobbleMaterial
                color={new Color(getRandomColor())}
                factor={MathUtils.randFloat(0.5, 2)}
                speed={MathUtils.randFloat(2, 4)}
              />
            </ChosenShape>
          );
        })}
      </Rotate>
    </>
  );
}
