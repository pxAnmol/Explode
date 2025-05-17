import { useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Rock(props) {
  const { nodes, materials } = useGLTF("/Rock1-com.glb");

  const group = useRef();

  const groupWorldPosition = new THREE.Vector3();

  useEffect(() => {
    if (!group.current) return;

    group.current.getWorldPosition(groupWorldPosition);
    group.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      mesh.originalRotation = mesh.rotation.clone();
      mesh.targetRotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(3.25));
    });
  }, []);

  const scrollData = useScroll();

  useFrame(() => {
    const SCROLL_THRESHOLD = 0.001;
    const showOnlyOrigin = scrollData.offset < SCROLL_THRESHOLD;

    group.current.children.forEach((mesh) => {
      if (!mesh.originalPosition || !mesh.targetPosition) return;

      if (showOnlyOrigin) {
        mesh.visible = mesh.name === "origin";
      } else {
        mesh.visible = mesh.name !== "origin";
      }

      if (!showOnlyOrigin) {
        mesh.position.x = THREE.MathUtils.lerp(
          mesh.originalPosition.x,
          mesh.targetPosition.x,
          scrollData.offset
        );
        mesh.position.y = THREE.MathUtils.lerp(
          mesh.originalPosition.y,
          mesh.targetPosition.y,
          scrollData.offset
        );
        mesh.position.z = THREE.MathUtils.lerp(
          mesh.originalPosition.z,
          mesh.targetPosition.z,
          scrollData.offset
        );

        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.originalRotation.x,
          mesh.targetRotation.x,
          scrollData.offset
        );
        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.originalRotation.y,
          mesh.targetRotation.y,
          scrollData.offset
        );
        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.originalRotation.z,
          mesh.targetRotation.z,
          scrollData.offset
        );
      }
    });
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh
        name="origin"
        castShadow
        receiveShadow
        geometry={nodes.origin.geometry}
        material={materials.moss}
      />
      <mesh
        name="origin_cell"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell.geometry}
        material={materials.moss}
        position={[0.03, -0.532, -0.453]}
      />
      <mesh
        name="origin_cell001"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell001.geometry}
        material={materials.moss}
        position={[-0.07, -1.584, 0.141]}
      />
      <mesh
        name="origin_cell002"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell002.geometry}
        material={materials.moss}
        position={[-0.281, 0.764, -0.281]}
      />
      <mesh
        name="origin_cell003"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell003.geometry}
        material={materials.moss}
        position={[0.236, -0.311, 0.515]}
      />
      <mesh
        name="origin_cell004"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell004.geometry}
        material={materials.moss}
        position={[0.013, 1.134, -0.302]}
      />
      <mesh
        name="origin_cell005"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell005.geometry}
        material={materials.moss}
        position={[-0.692, -0.438, 0.03]}
      />
      <mesh
        name="origin_cell006"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell006.geometry}
        material={materials.moss}
        position={[0.409, -0.11, 0.416]}
      />
      <mesh
        name="origin_cell007"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell007.geometry}
        material={materials.moss}
        position={[-0.419, -0.226, 0.35]}
      />
      <mesh
        name="origin_cell008"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell008.geometry}
        material={materials.moss}
        position={[0.481, -0.193, -0.399]}
      />
      <mesh
        name="origin_cell009"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell009.geometry}
        material={materials.moss}
        position={[0.14, 1.24, 0.003]}
      />
      <mesh
        name="origin_cell010"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell010.geometry}
        material={materials.moss}
        position={[0.286, -0.51, 0.148]}
      />
      <mesh
        name="origin_cell011"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell011.geometry}
        material={materials.moss}
        position={[-0.419, 0.827, 0.286]}
      />
      <mesh
        name="origin_cell012"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell012.geometry}
        material={materials.moss}
        position={[-0.504, 0.593, -0.261]}
      />
      <mesh
        name="origin_cell013"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell013.geometry}
        material={materials.moss}
        position={[0.842, 0.826, 0.054]}
      />
      <mesh
        name="origin_cell014"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell014.geometry}
        material={materials.moss}
        position={[0.344, -0.947, 0.051]}
      />
      <mesh
        name="origin_cell015"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell015.geometry}
        material={materials.moss}
        position={[0.23, 0.777, -0.381]}
      />
      <mesh
        name="origin_cell016"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell016.geometry}
        material={materials.moss}
        position={[-0.534, -0.853, 0.324]}
      />
      <mesh
        name="origin_cell017"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell017.geometry}
        material={materials.moss}
        position={[0.079, -0.234, 0.495]}
      />
      <mesh
        name="origin_cell018"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell018.geometry}
        material={materials.moss}
        position={[0.492, 0.237, 0.45]}
      />
      <mesh
        name="origin_cell019"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell019.geometry}
        material={materials.moss}
        position={[-0.329, -0.534, 0.349]}
      />
      <mesh
        name="origin_cell020"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell020.geometry}
        material={materials.moss}
        position={[-0.743, 0.854, -0.015]}
      />
      <mesh
        name="origin_cell021"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell021.geometry}
        material={materials.moss}
        position={[-0.177, 1.064, -0.208]}
      />
      <mesh
        name="origin_cell022"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell022.geometry}
        material={materials.moss}
        position={[-0.074, -0.338, 0.44]}
      />
      <mesh
        name="origin_cell023"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell023.geometry}
        material={materials.moss}
        position={[-0.251, -1.475, 0.101]}
      />
      <mesh
        name="origin_cell024"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell024.geometry}
        material={materials.moss}
        position={[0.217, -1.482, 0.092]}
      />
      <mesh
        name="origin_cell025"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell025.geometry}
        material={materials.moss}
        position={[0.011, 0.582, 0.49]}
      />
      <mesh
        name="origin_cell026"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell026.geometry}
        material={materials.moss}
        position={[-0.035, -0.546, 0.498]}
      />
      <mesh
        name="origin_cell027"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell027.geometry}
        material={materials.moss}
        position={[-0.5, -1.318, 0.247]}
      />
      <mesh
        name="origin_cell028"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell028.geometry}
        material={materials.moss}
        position={[-0.548, -1.092, 0.046]}
      />
      <mesh
        name="origin_cell029"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell029.geometry}
        material={materials.moss}
        position={[0.153, -1.501, 0.266]}
      />
      <mesh
        name="origin_cell030"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell030.geometry}
        material={materials.moss}
        position={[-0.1, 1.26, -0.23]}
      />
      <mesh
        name="origin_cell031"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell031.geometry}
        material={materials.moss}
        position={[0.487, -0.164, 0.036]}
      />
      <mesh
        name="origin_cell032"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell032.geometry}
        material={materials.moss}
        position={[-0.629, -0.069, -0.226]}
      />
      <mesh
        name="origin_cell033"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell033.geometry}
        material={materials.moss}
        position={[0.009, 1.155, 0.158]}
      />
      <mesh
        name="origin_cell034"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell034.geometry}
        material={materials.moss}
        position={[-0.277, -0.033, -0.42]}
      />
      <mesh
        name="origin_cell035"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell035.geometry}
        material={materials.moss}
        position={[-0.177, -0.787, 0.427]}
      />
      <mesh
        name="origin_cell036"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell036.geometry}
        material={materials.moss}
        position={[-0.655, 0.532, 0.175]}
      />
      <mesh
        name="origin_cell037"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell037.geometry}
        material={materials.moss}
        position={[0.557, 0.247, 0.068]}
      />
      <mesh
        name="origin_cell038"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell038.geometry}
        material={materials.moss}
        position={[-0.684, -0.645, 0.224]}
      />
      <mesh
        name="origin_cell039"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell039.geometry}
        material={materials.moss}
        position={[-0.69, -0.153, 0.23]}
      />
      <mesh
        name="origin_cell040"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell040.geometry}
        material={materials.moss}
        position={[-0.103, -1.136, 0.349]}
      />
      <mesh
        name="origin_cell041"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell041.geometry}
        material={materials.moss}
        position={[-0.38, 0.216, 0.301]}
      />
      <mesh
        name="origin_cell042"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell042.geometry}
        material={materials.moss}
        position={[0.256, -0.476, -0.492]}
      />
      <mesh
        name="origin_cell043"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell043.geometry}
        material={materials.moss}
        position={[-0.168, -0.479, -0.466]}
      />
      <mesh
        name="origin_cell044"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell044.geometry}
        material={materials.moss}
        position={[0.523, -0.307, -0.194]}
      />
      <mesh
        name="origin_cell045"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell045.geometry}
        material={materials.moss}
        position={[-0.39, -0.942, -0.222]}
      />
      <mesh
        name="origin_cell046"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell046.geometry}
        material={materials.moss}
        position={[0.348, 1.135, 0.296]}
      />
      <mesh
        name="origin_cell047"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell047.geometry}
        material={materials.moss}
        position={[0.227, -1.13, -0.314]}
      />
      <mesh
        name="origin_cell048"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell048.geometry}
        material={materials.moss}
        position={[-0.715, 0.085, 0.099]}
      />
      <mesh
        name="origin_cell049"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell049.geometry}
        material={materials.moss}
        position={[-0.375, -0.622, -0.414]}
      />
      <mesh
        name="origin_cell050"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell050.geometry}
        material={materials.moss}
        position={[0.353, 1.189, 0.081]}
      />
      <mesh
        name="origin_cell051"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell051.geometry}
        material={materials.moss}
        position={[0.105, -0.88, 0.341]}
      />
      <mesh
        name="origin_cell052"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell052.geometry}
        material={materials.moss}
        position={[0.684, 0.151, -0.237]}
      />
      <mesh
        name="origin_cell053"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell053.geometry}
        material={materials.moss}
        position={[-0.506, -0.257, -0.371]}
      />
      <mesh
        name="origin_cell054"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell054.geometry}
        material={materials.moss}
        position={[0.5, 0.026, -0.451]}
      />
      <mesh
        name="origin_cell055"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell055.geometry}
        material={materials.moss}
        position={[0.806, 0.968, 0.186]}
      />
      <mesh
        name="origin_cell056"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell056.geometry}
        material={materials.moss}
        position={[0.485, 1.163, -0.255]}
      />
      <mesh
        name="origin_cell057"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell057.geometry}
        material={materials.moss}
        position={[0.847, 0.961, -0.243]}
      />
      <mesh
        name="origin_cell058"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell058.geometry}
        material={materials.moss}
        position={[0.146, 0.255, -0.473]}
      />
      <mesh
        name="origin_cell059"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell059.geometry}
        material={materials.moss}
        position={[0.069, -1.35, 0.309]}
      />
      <mesh
        name="origin_cell060"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell060.geometry}
        material={materials.moss}
        position={[0.328, -0.631, -0.089]}
      />
      <mesh
        name="origin_cell061"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell061.geometry}
        material={materials.moss}
        position={[0.525, 1.171, 0.009]}
      />
      <mesh
        name="origin_cell062"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell062.geometry}
        material={materials.moss}
        position={[-0.581, -0.509, -0.156]}
      />
      <mesh
        name="origin_cell063"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell063.geometry}
        material={materials.moss}
        position={[0.648, 0.751, 0.317]}
      />
      <mesh
        name="origin_cell064"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell064.geometry}
        material={materials.moss}
        position={[0.122, -1.418, -0.084]}
      />
      <mesh
        name="origin_cell065"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell065.geometry}
        material={materials.moss}
        position={[0.408, 0.835, 0.464]}
      />
      <mesh
        name="origin_cell066"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell066.geometry}
        material={materials.moss}
        position={[0.101, -0.662, 0.418]}
      />
      <mesh
        name="origin_cell067"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell067.geometry}
        material={materials.moss}
        position={[0.007, -1.587, 0.251]}
      />
      <mesh
        name="origin_cell068"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell068.geometry}
        material={materials.moss}
        position={[-0.165, 0.083, 0.388]}
      />
      <mesh
        name="origin_cell069"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell069.geometry}
        material={materials.moss}
        position={[-0.492, 1.068, -0.046]}
      />
      <mesh
        name="origin_cell070"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell070.geometry}
        material={materials.moss}
        position={[-0.233, -1.436, 0.325]}
      />
      <mesh
        name="origin_cell071"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell071.geometry}
        material={materials.moss}
        position={[-0.678, 0.586, -0.199]}
      />
      <mesh
        name="origin_cell072"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell072.geometry}
        material={materials.moss}
        position={[0.207, -0.678, -0.487]}
      />
      <mesh
        name="origin_cell073"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell073.geometry}
        material={materials.moss}
        position={[-0.568, -1.121, 0.335]}
      />
      <mesh
        name="origin_cell074"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell074.geometry}
        material={materials.moss}
        position={[0.066, -0.239, -0.472]}
      />
      <mesh
        name="origin_cell075"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell075.geometry}
        material={materials.moss}
        position={[-0.037, -0.753, -0.487]}
      />
      <mesh
        name="origin_cell076"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell076.geometry}
        material={materials.moss}
        position={[-0.415, -1.326, 0.127]}
      />
      <mesh
        name="origin_cell077"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell077.geometry}
        material={materials.moss}
        position={[-0.074, -1.144, -0.303]}
      />
      <mesh
        name="origin_cell078"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell078.geometry}
        material={materials.moss}
        position={[0.036, 0.877, 0.453]}
      />
      <mesh
        name="origin_cell079"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell079.geometry}
        material={materials.moss}
        position={[-0.686, 0.232, -0.237]}
      />
      <mesh
        name="origin_cell080"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell080.geometry}
        material={materials.moss}
        position={[0.297, 0.492, 0.542]}
      />
      <mesh
        name="origin_cell081"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell081.geometry}
        material={materials.moss}
        position={[0.384, -0.894, -0.294]}
      />
      <mesh
        name="origin_cell082"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell082.geometry}
        material={materials.moss}
        position={[0.188, -0.823, -0.456]}
      />
      <mesh
        name="origin_cell083"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell083.geometry}
        material={materials.moss}
        position={[-0.314, -1.279, -0.07]}
      />
      <mesh
        name="origin_cell084"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell084.geometry}
        material={materials.moss}
        position={[0.773, 0.327, -0.334]}
      />
      <mesh
        name="origin_cell085"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell085.geometry}
        material={materials.moss}
        position={[0.419, -0.589, -0.394]}
      />
      <mesh
        name="origin_cell086"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell086.geometry}
        material={materials.moss}
        position={[0.745, 0.62, -0.031]}
      />
      <mesh
        name="origin_cell087"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell087.geometry}
        material={materials.moss}
        position={[0.576, 0.942, -0.364]}
      />
      <mesh
        name="origin_cell088"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell088.geometry}
        material={materials.moss}
        position={[0.784, 0.543, -0.325]}
      />
      <mesh
        name="origin_cell089"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell089.geometry}
        material={materials.moss}
        position={[0.049, 0.093, 0.548]}
      />
      <mesh
        name="origin_cell090"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell090.geometry}
        material={materials.moss}
        position={[0.241, 1.254, -0.146]}
      />
      <mesh
        name="origin_cell091"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell091.geometry}
        material={materials.moss}
        position={[-0.523, 0.305, -0.376]}
      />
      <mesh
        name="origin_cell092"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell092.geometry}
        material={materials.moss}
        position={[0.3, -1.258, 0.122]}
      />
      <mesh
        name="origin_cell093"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell093.geometry}
        material={materials.moss}
        position={[0.292, -0.464, 0.401]}
      />
      <mesh
        name="origin_cell094"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell094.geometry}
        material={materials.moss}
        position={[-0.199, 1.098, 0.331]}
      />
      <mesh
        name="origin_cell095"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell095.geometry}
        material={materials.moss}
        position={[0.598, 0.418, -0.5]}
      />
      <mesh
        name="origin_cell096"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell096.geometry}
        material={materials.moss}
        position={[0.607, 0.521, 0.475]}
      />
      <mesh
        name="origin_cell097"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell097.geometry}
        material={materials.moss}
        position={[-0.23, 0.459, -0.354]}
      />
      <mesh
        name="origin_cell098"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell098.geometry}
        material={materials.moss}
        position={[0.624, 0.516, 0.313]}
      />
      <mesh
        name="origin_cell099"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell099.geometry}
        material={materials.moss}
        position={[0.699, 1.065, 0.149]}
      />
    </group>
  );
}

useGLTF.preload("/Rock1-com.glb");
