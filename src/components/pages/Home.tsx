import {
  Icosahedron,
  Box,
  Dodecahedron,
  Octahedron,
  MeshWobbleMaterial,
  RoundedBox,
  Environment,
  Html,
} from "@react-three/drei";
import { generatePointsInFrustum, getRandomColor } from "../../lib/utils";
import { Color, MathUtils } from "three";
import { Rotate } from "../3d/Rotate";

export type HomePageProps = {
  home_page_object_count?: number;
  fov?: number;
  max_depth?: number;
};

function Backdrop({
  home_page_object_count = 500,
  fov = 100,
  max_depth = 10,
}: HomePageProps) {
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
        backgroundIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
        backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
        environmentIntensity={1} // optional intensity factor (default: 1, only works with three 0.163 and up)
        environmentRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./../ui/card";

export function Home({
  home_page_object_count = 500,
  fov = 100,
  max_depth = 10,
}: HomePageProps) {
  return (
    <>
      <Html center={true}>
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>We did it!</CardTitle>
            <CardDescription>Its a start</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter>
            <p>Portfolio coming soon...</p>
          </CardFooter>
        </Card>
      </Html>
      <Backdrop
        home_page_object_count={home_page_object_count}
        fov={fov}
        max_depth={max_depth}
      />
    </>
  );
}
