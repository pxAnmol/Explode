import { useRef, useEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Hammer(props) {
  const { nodes, materials } = useGLTF("/hammer-com.glb");
  const group = useRef();

  const minScale = 0.35;
  const maxScale = 2;

  const startScrollOffset = 0.1;
  const endScrollOffset = 1;

  const scrollData = useScroll();

  useEffect(() => {
    if (group.current) {
      group.current.scale.set(minScale, minScale, minScale);
    }
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;

    const scrollProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollData.offset - startScrollOffset) /
          (endScrollOffset - startScrollOffset)
      )
    );

    const currentScale = minScale + scrollProgress * (maxScale - minScale);

    group.current.scale.set(currentScale, currentScale, currentScale);

    group.current.rotation.y += delta / 2;
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_1_Layer_1_mtl_0.geometry}
        material={materials.Layer_1_mtl}
        position={[0, 0.142, 0.001]}
        rotation={[-1.529, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_3_Layer_3_mtl_0.geometry}
        material={materials.Layer_3_mtl}
        position={[0, 0.142, 0.001]}
        rotation={[-1.529, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_4_Layer_4_mtl_0.geometry}
        material={materials.Layer_4_mtl}
        position={[0, 0.142, 0.001]}
        rotation={[-1.529, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_5_Layer_5_mtl_0.geometry}
        material={materials.Layer_5_mtl}
        position={[0, 0.142, 0.001]}
        rotation={[-1.529, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_6_Layer_6_mtl_0.geometry}
        material={materials.Layer_6_mtl}
        position={[0, 0.142, 0.001]}
        rotation={[-1.529, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/hammer-com.glb");
