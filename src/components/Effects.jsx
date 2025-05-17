import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <Bloom
        intensity={2}
        blurPass={undefined}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.05}
        mipmapBlur={true}
      />
      <ChromaticAberration
        offset={[0.003, 0.003]}
        blendFunction={BlendFunction.NORMAL}
        radialModulation={true}
        modulationOffset={0.5}
      />
      <Vignette
        offset={0.3}
        darkness={0.8}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

export default Effects;
