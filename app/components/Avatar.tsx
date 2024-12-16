import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAnimations, useGLTF } from '@react-three/drei';

interface AvatarProps {
  [key: string]: any;
}

const Avatar = (props: AvatarProps) => {
  const groupRef = useRef<THREE.Group>(null);

  const { animations, nodes } = useGLTF('/models/avatar/waving_avatar_Anim.gltf');
  const { waving_avatar, Hips } = nodes;
  const { geometry, material, skeleton } = waving_avatar as THREE.SkinnedMesh;
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    const wave = actions['waving_avatar_Anim_0'];

    if (wave) {
      wave.repetitions = 1;
      wave.clampWhenFinished = true;
      
      wave.reset().play();
    }
  });
  
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name='scene'>
        <group name='avatar'  position={[0, -3.5, 0]} scale={4}>
          <skinnedMesh
            name='avatar'
            geometry={geometry}
            material={material}
            skeleton={skeleton}
          />
          <primitive object={Hips} />
        </group>
      </group>
    </group>
  );
}

export default Avatar;
