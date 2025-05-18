import {
  Environment,
  Float,
  OrbitControls,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { Color } from "three";
import Rock from "./components/Rock";
import Hammer from "./components/Hammer";
import { Perf } from "r3f-perf";
import Effects from "./components/Effects";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const App = () => {
  const rimLightRef = useRef();
  const spotLightRef = useRef();

  useFrame((state) => {
    if (rimLightRef.current) {
      rimLightRef.current.intensity =
        15 + Math.sin(state.clock.elapsedTime) * 5;
    }
    if (spotLightRef.current) {
      const hue = (state.clock.elapsedTime * 0.1) % 1;
      spotLightRef.current.color = new Color().setHSL(hue, 0.8, 0.5);
    }
  });
  return (
    <>
      <color attach="background" args={["#050523"]} />

      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Rock rotation={[Math.PI / 8, Math.PI / 3, 0]} scale={1.5} />
        <Hammer scale={1} position={[0, 0.25, 0]} />
      </Float>

      <spotLight
        position={[0, 3.5, 0]}
        ref={spotLightRef}
        angle={0.4}
        penumbra={1}
        intensity={15}
        color="#9900ff"
        distance={10}
        decay={2}
        castShadow
      />

      <pointLight
        ref={rimLightRef}
        position={[3, 0, 3]}
        intensity={20}
        color="#ff00ff"
        distance={8}
      />
      <pointLight
        position={[-3, 1, -2]}
        intensity={6}
        color="#00ffff"
        distance={6}
      />
      <pointLight
        position={[0, -3, 0]}
        intensity={4}
        color="#ff3300"
        distance={5}
      />

      <ambientLight intensity={0.2} color="#222233" />

      <Stars radius={100} depth={100} count={750} factor={4} fade speed={1.5} />

      <Environment preset="sunset" environmentIntensity={0.15} />

      <Effects />

      <OrbitControls enableZoom={false} enablePan={false} />

      {/* <Perf position="top-left" /> */}
    </>
  );
};

export default App;
