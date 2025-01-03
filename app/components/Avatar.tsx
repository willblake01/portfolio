import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useAnimations, useGLTF } from '@react-three/drei'

interface AvatarProps {
  [key: string]: any
}

const Avatar = (props: AvatarProps) => {
  const groupRef = useRef<THREE.Group>(null)

  const { animations, nodes } = useGLTF(
    '/models/avatar/waving_avatar_Anim.gltf',
  )
  const {
    waving_avatar,
    waving_avatar_1,
    waving_avatar_2,
    waving_avatar_3,
    Hips,
  } = nodes
  const { geometry, material, skeleton } = waving_avatar as THREE.SkinnedMesh
  // Mouth
  const {
    geometry: waving_avatar_1_geometry,
    material: waving_avatar_1_material,
    skeleton: waving_avatar_1_skeleton,
  } = waving_avatar_1 as THREE.SkinnedMesh
  // Eyes
  const {
    geometry: waving_avatar_2_geometry,
    material: waving_avatar_2_material,
    skeleton: waving_avatar_2_skeleton,
  } = waving_avatar_2 as THREE.SkinnedMesh
  // Not sure what part this is
  const {
    geometry: waving_avatar_3_geometry,
    material: waving_avatar_3_material,
    skeleton: waving_avatar_3_skeleton,
  } = waving_avatar_3 as THREE.SkinnedMesh
  const { actions } = useAnimations(animations, groupRef)

  useEffect(() => {
    const wave = actions['waving_avatar_Anim_0']

    if (wave) {
      wave.repetitions = 1
      wave.clampWhenFinished = true

      wave.reset().play()
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="scene">
        <group name="avatar" position={[0, -0.75, 0]}>
          <skinnedMesh
            name="waving avatar"
            geometry={geometry}
            material={material}
            skeleton={skeleton}
          />
          <skinnedMesh
            name="mouth"
            geometry={waving_avatar_1_geometry}
            material={waving_avatar_1_material}
            skeleton={waving_avatar_1_skeleton}
          />
          <skinnedMesh
            name="eyes"
            geometry={waving_avatar_2_geometry}
            material={waving_avatar_2_material}
            skeleton={waving_avatar_2_skeleton}
          />
          <skinnedMesh
            name="waving avatar 3"
            geometry={waving_avatar_3_geometry}
            material={waving_avatar_3_material}
            skeleton={waving_avatar_3_skeleton}
          />
          <primitive object={Hips} />
        </group>
      </group>
    </group>
  )
}

export default Avatar
