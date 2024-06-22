import { useGLTF } from "@react-three/drei";
export function JazzBass(props: any) {
  const { nodes, materials }: { nodes: any; materials: any } = useGLTF(
    "/fender_jazz_bass_relic.glb",
  );

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body005_JazzBass_0.geometry}
              material={materials.JazzBass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body005_JazzBass_0_1.geometry}
              material={materials.JazzBass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body005_JazzBass_0_2.geometry}
              material={materials.JazzBass}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/fender_jazz_bass_relic.glb");
