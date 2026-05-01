'use client'

import * as THREE from 'three'
import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

const AVATAR_URL =
  'https://res.cloudinary.com/willblake01/raw/upload/v1777403253/portfolio/3D/models/avatar/Waving_Avatar_Anim.glb'

type ActionName = 'waving_avatar_Anim_0'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    waving_avatar_1: THREE.SkinnedMesh
    waving_avatar_2: THREE.SkinnedMesh
    waving_avatar_3: THREE.SkinnedMesh
    waving_avatar_4: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    Boy01_Body_MAT1: THREE.MeshStandardMaterial
    Boy01_Mouth_MAT2: THREE.MeshStandardMaterial
    Boy01_Eyes_MAT2: THREE.MeshStandardMaterial
    Boy01_Brows_MAT2: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Avatar(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(AVATAR_URL)
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const wave = actions['waving_avatar_Anim_0']
    if (wave) {
      wave.repetitions = 1
      wave.clampWhenFinished = true
      wave.reset().play()
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='waving_avatar'>
          <primitive object={nodes.Hips} />
          <group name='waving_avatar001'>
            <skinnedMesh
              name='body'
              geometry={nodes.waving_avatar_1.geometry}
              material={materials.Boy01_Body_MAT1}
              skeleton={nodes.waving_avatar_1.skeleton}
            />
            <skinnedMesh
              name='mouth'
              geometry={nodes.waving_avatar_2.geometry}
              material={materials.Boy01_Mouth_MAT2}
              skeleton={nodes.waving_avatar_2.skeleton}
            />
            <skinnedMesh
              name='eyes'
              geometry={nodes.waving_avatar_3.geometry}
              material={materials.Boy01_Eyes_MAT2}
              skeleton={nodes.waving_avatar_3.skeleton}
            />
            <skinnedMesh
              name='brows'
              geometry={nodes.waving_avatar_4.geometry}
              material={materials.Boy01_Brows_MAT2}
              skeleton={nodes.waving_avatar_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}


export default Avatar