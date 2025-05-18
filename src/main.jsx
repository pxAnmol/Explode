import { StrictMode, Suspense, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

const MobileBlocker = () => {
  return (
    <div className="mobile-blocker">
      <p>This experience is only available on desktop</p>
    </div>
  );
};

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(userAgent);
      const isNarrowScreen = window.innerWidth < 768;

      setIsMobile(isMobileDevice || isNarrowScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileBlocker />;
  }

  return (
    <Canvas
      camera={{ fov: 60, position: [0, 0, 4.5] }}
      gl={{ powerPreference: "high-performance", antialias: true }}
    >
      <StrictMode>
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={1}>
            <App />
          </ScrollControls>
        </Suspense>
      </StrictMode>
    </Canvas>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
