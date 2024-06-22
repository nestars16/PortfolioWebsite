import { Home } from "./components/pages/Home";
import { Canvas } from "@react-three/fiber";

function App() {
  const FOV = 70;

  return (
    <div
      id="canvas-container"
      className="h-full w-full flex justify-center items-center"
    >
      <Canvas camera={{ fov: FOV, position: [0, -30, 0], focus: 0.4 }}>
        <Home />
      </Canvas>
    </div>
  );
}

export default App;
