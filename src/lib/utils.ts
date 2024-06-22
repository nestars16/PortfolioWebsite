import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MathUtils, Vector3 } from "three";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function generatePointsInFrustum(n: number, fov: number, depth: number) {
  const points = [];

  const aspect = window.innerWidth / window.innerHeight;
  const fovRad = MathUtils.degToRad(fov);
  const height = 2 * Math.tan(fovRad / 2) * depth;
  const width = height * aspect;
  let lastGenerated: Vector3 | null = null;
  for (let i = 0; i < n; i++) {
    const z = MathUtils.randFloat(-depth, depth);
    const x = MathUtils.randFloat(-width, width);
    const y = MathUtils.randFloat(-height, height);
    const newVector = new Vector3(x, y, z);

    if (
      lastGenerated &&
      isAnyComponentWithinThreshold(lastGenerated, newVector, 1)
    ) {
      continue;
    }

    points.push(newVector);
    lastGenerated = new Vector3(x, y, z);
  }

  return points;
}

export function isAnyComponentWithinThreshold(
  lhs: Vector3,
  rhs: Vector3,
  threshold = 0.5,
) {
  // Check if the absolute difference of any component is within the threshold
  return (
    Math.abs(lhs.x - rhs.x) <= threshold ||
    Math.abs(lhs.y - rhs.y) <= threshold ||
    Math.abs(lhs.z - rhs.z) <= threshold
  );
}
