import { Html } from "@react-three/drei";
import Navbar from "./../ui/navbar";

export function Home() {
  return (
    <Html
      className="w-screen h-screen"
      center
      as="div"
      style={{ backdropFilter: "blur(3px)" }}
    >
      <Navbar />
      <div className="w-full h-full flex flex-row items-center justify-content"></div>
    </Html>
  );
}
