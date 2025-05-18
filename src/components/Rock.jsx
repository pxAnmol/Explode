import { useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Rock(props) {
  const { nodes, materials } = useGLTF("/Rock2-com.glb");

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
        .add(mesh.directionVector.clone().multiplyScalar(3));
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
        position={[-0.016, -0.596, -0.477]}
      />
      <mesh
        name="origin_cell001"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell001.geometry}
        material={materials.moss}
        position={[0.102, 0.895, 0.387]}
      />
      <mesh
        name="origin_cell002"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell002.geometry}
        material={materials.moss}
        position={[-0.073, 0.724, -0.334]}
      />
      <mesh
        name="origin_cell003"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell003.geometry}
        material={materials.moss}
        position={[-0.15, 1.201, -0.17]}
      />
      <mesh
        name="origin_cell004"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell004.geometry}
        material={materials.moss}
        position={[-0.676, 0.995, -0.062]}
      />
      <mesh
        name="origin_cell005"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell005.geometry}
        material={materials.moss}
        position={[-0.642, -0.159, -0.124]}
      />
      <mesh
        name="origin_cell006"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell006.geometry}
        material={materials.moss}
        position={[-0.103, 1.048, 0.424]}
      />
      <mesh
        name="origin_cell007"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell007.geometry}
        material={materials.moss}
        position={[-0.025, -0.006, 0.513]}
      />
      <mesh
        name="origin_cell008"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell008.geometry}
        material={materials.moss}
        position={[-0.732, -0.192, -0.004]}
      />
      <mesh
        name="origin_cell009"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell009.geometry}
        material={materials.moss}
        position={[0.156, -1.279, -0.202]}
      />
      <mesh
        name="origin_cell010"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell010.geometry}
        material={materials.moss}
        position={[-0.28, 1.027, 0.318]}
      />
      <mesh
        name="origin_cell011"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell011.geometry}
        material={materials.moss}
        position={[0.272, -1.405, 0.243]}
      />
      <mesh
        name="origin_cell012"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell012.geometry}
        material={materials.moss}
        position={[0.288, -0.873, -0.428]}
      />
      <mesh
        name="origin_cell013"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell013.geometry}
        material={materials.moss}
        position={[-0.332, 1.127, 0.139]}
      />
      <mesh
        name="origin_cell014"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell014.geometry}
        material={materials.moss}
        position={[0.19, 1.272, -0.075]}
      />
      <mesh
        name="origin_cell015"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell015.geometry}
        material={materials.moss}
        position={[0.24, 1.027, 0.38]}
      />
      <mesh
        name="origin_cell016"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell016.geometry}
        material={materials.moss}
        position={[-0.688, -0.389, 0.293]}
      />
      <mesh
        name="origin_cell017"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell017.geometry}
        material={materials.moss}
        position={[0.324, -0.551, 0.017]}
      />
      <mesh
        name="origin_cell018"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell018.geometry}
        material={materials.moss}
        position={[0.314, -0.209, 0.387]}
      />
      <mesh
        name="origin_cell019"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell019.geometry}
        material={materials.moss}
        position={[-0.721, 0.203, -0.217]}
      />
      <mesh
        name="origin_cell020"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell020.geometry}
        material={materials.moss}
        position={[-0.282, -0.104, 0.422]}
      />
      <mesh
        name="origin_cell021"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell021.geometry}
        material={materials.moss}
        position={[-0.497, 0.284, -0.375]}
      />
      <mesh
        name="origin_cell022"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell022.geometry}
        material={materials.moss}
        position={[-0.474, 0.429, -0.333]}
      />
      <mesh
        name="origin_cell023"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell023.geometry}
        material={materials.moss}
        position={[-0.189, -0.776, -0.526]}
      />
      <mesh
        name="origin_cell024"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell024.geometry}
        material={materials.moss}
        position={[-0.517, 1.109, 0.007]}
      />
      <mesh
        name="origin_cell025"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell025.geometry}
        material={materials.moss}
        position={[0.303, -1.283, -0.147]}
      />
      <mesh
        name="origin_cell026"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell026.geometry}
        material={materials.moss}
        position={[-0.503, 0.981, -0.208]}
      />
      <mesh
        name="origin_cell027"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell027.geometry}
        material={materials.moss}
        position={[-0.179, -0.744, 0.459]}
      />
      <mesh
        name="origin_cell028"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell028.geometry}
        material={materials.moss}
        position={[0.284, -0.848, 0.126]}
      />
      <mesh
        name="origin_cell029"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell029.geometry}
        material={materials.moss}
        position={[0.75, 0.674, 0.122]}
      />
      <mesh
        name="origin_cell030"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell030.geometry}
        material={materials.moss}
        position={[-0.295, 1.004, -0.27]}
      />
      <mesh
        name="origin_cell031"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell031.geometry}
        material={materials.moss}
        position={[-0.253, 0.061, -0.442]}
      />
      <mesh
        name="origin_cell032"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell032.geometry}
        material={materials.moss}
        position={[0.346, 1.199, 0.198]}
      />
      <mesh
        name="origin_cell033"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell033.geometry}
        material={materials.moss}
        position={[-0.639, -0.972, 0.239]}
      />
      <mesh
        name="origin_cell034"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell034.geometry}
        material={materials.moss}
        position={[0.209, 0.685, 0.522]}
      />
      <mesh
        name="origin_cell035"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell035.geometry}
        material={materials.moss}
        position={[0.026, 1.207, -0.33]}
      />
      <mesh
        name="origin_cell036"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell036.geometry}
        material={materials.moss}
        position={[-0.729, -0.075, 0.17]}
      />
      <mesh
        name="origin_cell037"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell037.geometry}
        material={materials.moss}
        position={[-0.45, 1.092, -0.143]}
      />
      <mesh
        name="origin_cell039"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell039.geometry}
        material={materials.moss}
        position={[0.609, 1.084, -0.289]}
      />
      <mesh
        name="origin_cell040"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell040.geometry}
        material={materials.moss}
        position={[0.209, 1.147, -0.277]}
      />
      <mesh
        name="origin_cell041"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell041.geometry}
        material={materials.moss}
        position={[-0.021, -1.149, -0.336]}
      />
      <mesh
        name="origin_cell042"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell042.geometry}
        material={materials.moss}
        position={[0.731, 0.707, -0.047]}
      />
      <mesh
        name="origin_cell043"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell043.geometry}
        material={materials.moss}
        position={[0.592, 0.06, -0.114]}
      />
      <mesh
        name="origin_cell044"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell044.geometry}
        material={materials.moss}
        position={[0.858, 1.06, -0.1]}
      />
      <mesh
        name="origin_cell045"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell045.geometry}
        material={materials.moss}
        position={[-0.716, -0.253, 0.198]}
      />
      <mesh
        name="origin_cell046"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell046.geometry}
        material={materials.moss}
        position={[0.147, -1.013, -0.396]}
      />
      <mesh
        name="origin_cell047"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell047.geometry}
        material={materials.moss}
        position={[-0.772, 0.679, -0.086]}
      />
      <mesh
        name="origin_cell048"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell048.geometry}
        material={materials.moss}
        position={[-0.74, -0.566, 0.191]}
      />
      <mesh
        name="origin_cell049"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell049.geometry}
        material={materials.moss}
        position={[-0.181, -1.287, -0.148]}
      />
      <mesh
        name="origin_cell050"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell050.geometry}
        material={materials.moss}
        position={[-0.641, -0.635, 0.011]}
      />
      <mesh
        name="origin_cell051"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell051.geometry}
        material={materials.moss}
        position={[0.067, -1.386, 0.31]}
      />
      <mesh
        name="origin_cell052"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell052.geometry}
        material={materials.moss}
        position={[0.566, 0.308, 0.119]}
      />
      <mesh
        name="origin_cell053"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell053.geometry}
        material={materials.moss}
        position={[-0.093, 1.315, -0.307]}
      />
      <mesh
        name="origin_cell054"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell054.geometry}
        material={materials.moss}
        position={[-0.344, 0.829, -0.262]}
      />
      <mesh
        name="origin_cell055"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell055.geometry}
        material={materials.moss}
        position={[0.054, 1.219, 0.081]}
      />
      <mesh
        name="origin_cell056"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell056.geometry}
        material={materials.moss}
        position={[0.108, 1, 0.066]}
      />
      <mesh
        name="origin_cell057"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell057.geometry}
        material={materials.moss}
        position={[-0.538, -0.68, 0.353]}
      />
      <mesh
        name="origin_cell058"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell058.geometry}
        material={materials.moss}
        position={[-0.152, -0.153, 0.211]}
      />
      <mesh
        name="origin_cell059"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell059.geometry}
        material={materials.moss}
        position={[0.406, -0.391, -0.467]}
      />
      <mesh
        name="origin_cell060"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell060.geometry}
        material={materials.moss}
        position={[0.341, 0.897, -0.392]}
      />
      <mesh
        name="origin_cell061"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell061.geometry}
        material={materials.moss}
        position={[0.855, 0.945, 0.108]}
      />
      <mesh
        name="origin_cell062"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell062.geometry}
        material={materials.moss}
        position={[-0.769, 0.843, -0.004]}
      />
      <mesh
        name="origin_cell063"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell063.geometry}
        material={materials.moss}
        position={[0.053, 1.285, -0.249]}
      />
      <mesh
        name="origin_cell064"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell064.geometry}
        material={materials.moss}
        position={[0.529, -0.108, 0.064]}
      />
      <mesh
        name="origin_cell065"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell065.geometry}
        material={materials.moss}
        position={[-0.169, 1.073, -0.296]}
      />
      <mesh
        name="origin_cell066"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell066.geometry}
        material={materials.moss}
        position={[-0.117, 0.209, 0.48]}
      />
      <mesh
        name="origin_cell067"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell067.geometry}
        material={materials.moss}
        position={[-0.612, 0.514, 0.229]}
      />
      <mesh
        name="origin_cell068"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell068.geometry}
        material={materials.moss}
        position={[-0.148, -0.384, -0.479]}
      />
      <mesh
        name="origin_cell069"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell069.geometry}
        material={materials.moss}
        position={[-0.511, -0.35, -0.308]}
      />
      <mesh
        name="origin_cell070"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell070.geometry}
        material={materials.moss}
        position={[-0.438, -0.968, 0.428]}
      />
      <mesh
        name="origin_cell071"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell071.geometry}
        material={materials.moss}
        position={[-0.53, 0.595, -0.276]}
      />
      <mesh
        name="origin_cell072"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell072.geometry}
        material={materials.moss}
        position={[0.326, -1.128, -0.291]}
      />
      <mesh
        name="origin_cell073"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell073.geometry}
        material={materials.moss}
        position={[-0.569, 0.791, -0.21]}
      />
      <mesh
        name="origin_cell074"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell074.geometry}
        material={materials.moss}
        position={[0.299, -0.715, -0.485]}
      />
      <mesh
        name="origin_cell075"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell075.geometry}
        material={materials.moss}
        position={[0.057, -1.209, -0.255]}
      />
      <mesh
        name="origin_cell076"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell076.geometry}
        material={materials.moss}
        position={[-0.347, 1.084, -0.23]}
      />
      <mesh
        name="origin_cell077"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell077.geometry}
        material={materials.moss}
        position={[-0.368, 0.231, 0.303]}
      />
      <mesh
        name="origin_cell078"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell078.geometry}
        material={materials.moss}
        position={[0.436, 1.035, 0.376]}
      />
      <mesh
        name="origin_cell079"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell079.geometry}
        material={materials.moss}
        position={[0, -0.767, -0.517]}
      />
      <mesh
        name="origin_cell080"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell080.geometry}
        material={materials.moss}
        position={[-0.449, -0.394, 0.067]}
      />
      <mesh
        name="origin_cell081"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell081.geometry}
        material={materials.moss}
        position={[0.193, -0.498, -0.492]}
      />
      <mesh
        name="origin_cell082"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell082.geometry}
        material={materials.moss}
        position={[0.621, 0.802, -0.423]}
      />
      <mesh
        name="origin_cell083"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell083.geometry}
        material={materials.moss}
        position={[0.816, 0.664, -0.341]}
      />
      <mesh
        name="origin_cell084"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell084.geometry}
        material={materials.moss}
        position={[-0.026, -0.244, 0.491]}
      />
      <mesh
        name="origin_cell085"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell085.geometry}
        material={materials.moss}
        position={[-0.524, 0.846, 0.233]}
      />
      <mesh
        name="origin_cell086"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell086.geometry}
        material={materials.moss}
        position={[0.24, 0.756, -0.423]}
      />
      <mesh
        name="origin_cell087"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell087.geometry}
        material={materials.moss}
        position={[-0.681, 0.34, -0.293]}
      />
      <mesh
        name="origin_cell088"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell088.geometry}
        material={materials.moss}
        position={[-0.726, -0.426, 0.073]}
      />
      <mesh
        name="origin_cell089"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell089.geometry}
        material={materials.moss}
        position={[0.611, 0.919, 0.385]}
      />
      <mesh
        name="origin_cell090"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell090.geometry}
        material={materials.moss}
        position={[0.42, -0.082, 0.431]}
      />
      <mesh
        name="origin_cell091"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell091.geometry}
        material={materials.moss}
        position={[-0.331, -0.499, 0.325]}
      />
      <mesh
        name="origin_cell092"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell092.geometry}
        material={materials.moss}
        position={[0.422, -0.589, -0.197]}
      />
      <mesh
        name="origin_cell093"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell093.geometry}
        material={materials.moss}
        position={[0.19, -1.476, 0.121]}
      />
      <mesh
        name="origin_cell094"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell094.geometry}
        material={materials.moss}
        position={[-0.375, 0.236, -0.435]}
      />
      <mesh
        name="origin_cell095"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell095.geometry}
        material={materials.moss}
        position={[0.072, 1.066, 0.39]}
      />
      <mesh
        name="origin_cell096"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell096.geometry}
        material={materials.moss}
        position={[0.559, -0.063, -0.384]}
      />
      <mesh
        name="origin_cell097"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell097.geometry}
        material={materials.moss}
        position={[0.072, -0.745, 0.412]}
      />
      <mesh
        name="origin_cell098"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell098.geometry}
        material={materials.moss}
        position={[0.384, -0.827, -0.196]}
      />
      <mesh
        name="origin_cell099"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell099.geometry}
        material={materials.moss}
        position={[-0.321, -1.294, 0.314]}
      />
      <mesh
        name="origin_cell100"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell100.geometry}
        material={materials.moss}
        position={[-0.417, -0.504, -0.374]}
      />
      <mesh
        name="origin_cell101"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell101.geometry}
        material={materials.moss}
        position={[0.354, -1.162, 0.071]}
      />
      <mesh
        name="origin_cell102"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell102.geometry}
        material={materials.moss}
        position={[0.282, -0.431, 0.354]}
      />
      <mesh
        name="origin_cell103"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell103.geometry}
        material={materials.moss}
        position={[0.001, 1, -0.341]}
      />
      <mesh
        name="origin_cell104"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell104.geometry}
        material={materials.moss}
        position={[-0.195, -1.507, 0.174]}
      />
      <mesh
        name="origin_cell105"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell105.geometry}
        material={materials.moss}
        position={[0.377, 1.095, -0.285]}
      />
      <mesh
        name="origin_cell106"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell106.geometry}
        material={materials.moss}
        position={[0.476, -0.374, -0.134]}
      />
      <mesh
        name="origin_cell107"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell107.geometry}
        material={materials.moss}
        position={[0.283, 0.385, 0.59]}
      />
      <mesh
        name="origin_cell108"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell108.geometry}
        material={materials.moss}
        position={[0.46, 0.272, 0.462]}
      />
      <mesh
        name="origin_cell109"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell109.geometry}
        material={materials.moss}
        position={[0.427, -0.63, -0.403]}
      />
      <mesh
        name="origin_cell110"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell110.geometry}
        material={materials.moss}
        position={[-0.099, 0.699, 0.468]}
      />
      <mesh
        name="origin_cell111"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell111.geometry}
        material={materials.moss}
        position={[-0.465, -0.818, -0.134]}
      />
      <mesh
        name="origin_cell112"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell112.geometry}
        material={materials.moss}
        position={[-0.197, 0.484, -0.244]}
      />
      <mesh
        name="origin_cell113"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell113.geometry}
        material={materials.moss}
        position={[-0.576, -1.175, 0.364]}
      />
      <mesh
        name="origin_cell114"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell114.geometry}
        material={materials.moss}
        position={[-0.104, 0.411, 0.479]}
      />
      <mesh
        name="origin_cell117"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell117.geometry}
        material={materials.moss}
        position={[-0.516, -0.081, 0.322]}
      />
      <mesh
        name="origin_cell118"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell118.geometry}
        material={materials.moss}
        position={[0.802, 1.064, -0.227]}
      />
      <mesh
        name="origin_cell119"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell119.geometry}
        material={materials.moss}
        position={[0.114, -1.009, 0.318]}
      />
      <mesh
        name="origin_cell120"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell120.geometry}
        material={materials.moss}
        position={[-0.523, -1.316, 0.256]}
      />
      <mesh
        name="origin_cell121"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell121.geometry}
        material={materials.moss}
        position={[-0.725, 0.243, 0.065]}
      />
      <mesh
        name="origin_cell122"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell122.geometry}
        material={materials.moss}
        position={[-0.725, 0.46, -0.103]}
      />
      <mesh
        name="origin_cell123"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell123.geometry}
        material={materials.moss}
        position={[-0.473, -1.133, 0.017]}
      />
      <mesh
        name="origin_cell124"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell124.geometry}
        material={materials.moss}
        position={[0.589, 1.155, 0.027]}
      />
      <mesh
        name="origin_cell127"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell127.geometry}
        material={materials.moss}
        position={[0.713, 0.292, -0.31]}
      />
      <mesh
        name="origin_cell128"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell128.geometry}
        material={materials.moss}
        position={[0.467, 0.655, -0.241]}
      />
      <mesh
        name="origin_cell129"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell129.geometry}
        material={materials.moss}
        position={[0.583, 0.598, 0.437]}
      />
      <mesh
        name="origin_cell130"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell130.geometry}
        material={materials.moss}
        position={[-0.672, -0.598, 0.294]}
      />
      <mesh
        name="origin_cell131"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell131.geometry}
        material={materials.moss}
        position={[0.052, -1.428, -0.083]}
      />
      <mesh
        name="origin_cell132"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell132.geometry}
        material={materials.moss}
        position={[-0.098, -0.957, -0.395]}
      />
      <mesh
        name="origin_cell133"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell133.geometry}
        material={materials.moss}
        position={[0.263, 0.484, -0.46]}
      />
      <mesh
        name="origin_cell134"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell134.geometry}
        material={materials.moss}
        position={[-0.137, -0.456, 0.47]}
      />
      <mesh
        name="origin_cell136"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell136.geometry}
        material={materials.moss}
        position={[-0.012, -0.093, -0.305]}
      />
      <mesh
        name="origin_cell137"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell137.geometry}
        material={materials.moss}
        position={[-0.546, -0.219, -0.382]}
      />
      <mesh
        name="origin_cell138"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell138.geometry}
        material={materials.moss}
        position={[-0.71, 0.121, 0.237]}
      />
      <mesh
        name="origin_cell139"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell139.geometry}
        material={materials.moss}
        position={[0.271, 0.199, -0.505]}
      />
      <mesh
        name="origin_cell140"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell140.geometry}
        material={materials.moss}
        position={[-0.341, -0.746, -0.414]}
      />
      <mesh
        name="origin_cell141"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell141.geometry}
        material={materials.moss}
        position={[0.09, 0.342, 0.58]}
      />
      <mesh
        name="origin_cell142"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell142.geometry}
        material={materials.moss}
        position={[-0.658, 0.708, -0.218]}
      />
      <mesh
        name="origin_cell143"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell143.geometry}
        material={materials.moss}
        position={[0.05, 1.169, 0.298]}
      />
      <mesh
        name="origin_cell144"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell144.geometry}
        material={materials.moss}
        position={[-0.596, -0.056, -0.331]}
      />
      <mesh
        name="origin_cell145"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell145.geometry}
        material={materials.moss}
        position={[0.642, 0.171, -0.183]}
      />
      <mesh
        name="origin_cell146"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell146.geometry}
        material={materials.moss}
        position={[0.211, -0.136, -0.513]}
      />
      <mesh
        name="origin_cell147"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell147.geometry}
        material={materials.moss}
        position={[0.199, 0.104, 0.592]}
      />
      <mesh
        name="origin_cell148"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell148.geometry}
        material={materials.moss}
        position={[0.584, 0.374, 0.486]}
      />
      <mesh
        name="origin_cell149"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell149.geometry}
        material={materials.moss}
        position={[-0.34, -1.023, -0.302]}
      />
      <mesh
        name="origin_cell038"
        castShadow
        receiveShadow
        geometry={nodes.origin_cell038.geometry}
        material={materials.moss}
        position={[-0.679, 0.791, -0.168]}
      />
    </group>
  );
}

useGLTF.preload("/Rock2-com.glb");
