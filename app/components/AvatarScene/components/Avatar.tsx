'use client'

import * as THREE from 'three'
import React, { useEffect, useImperativeHandle, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

const AVATAR_URL =
  'https://res.cloudinary.com/willblake01/raw/upload/v1777653389/portfolio/3D/models/avatar.glb'

// Confirm clip names from the console log and update if needed
type ActionName = 'waving_gesture' | 'idle'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Boy01_Body_Geo: THREE.SkinnedMesh
    Boy01_Brows_Geo: THREE.SkinnedMesh
    Boy01_Brows_Geo001: THREE.SkinnedMesh
    Boy01_Eyes_Geo: THREE.SkinnedMesh
    Boy01_Eyes_Geo001: THREE.SkinnedMesh
    h_Geo: THREE.SkinnedMesh
    h_Geo001: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
    mixamorigHips_1: THREE.Bone
  }
  materials: {
    Boy01_Body_MAT1: THREE.MeshStandardMaterial
    Boy01_Mouth_MAT2: THREE.MeshStandardMaterial
    Boy01_Eyes_MAT2: THREE.MeshStandardMaterial
    Boy01_Brows_MAT2: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export interface AvatarHandle {
  triggerWave: () => void
}

export const Avatar = React.forwardRef<AvatarHandle, JSX.IntrinsicElements['group']>(
  function Avatar(props, ref) {
    const group = useRef<THREE.Group>(null)
    const { scene, animations } = useGLTF(AVATAR_URL)
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes } = useGraph(clone) as GLTFResult
    const { actions, mixer } = useAnimations(animations, group)

    // Stable refs to current actions so triggerWave can access them without stale closure
    const waveRef  = useRef<THREE.AnimationAction | null>(null)
    const wave1Ref = useRef<THREE.AnimationAction | null>(null)
    const idleRef  = useRef<THREE.AnimationAction | null>(null)
    const idle0Ref = useRef<THREE.AnimationAction | null>(null)
    const isWaving = useRef(false)

    useImperativeHandle(ref, () => ({
      triggerWave: () => {
        const wave  = waveRef.current
        const wave1 = wave1Ref.current
        const idle  = idleRef.current
        const idle0 = idle0Ref.current
        if (!wave || !wave1 || isWaving.current) return

        isWaving.current = true
        idle?.fadeOut(0.3)
        idle0?.fadeOut(0.3)
        ;[wave, wave1].forEach(a => {
          a.repetitions = 1
          a.clampWhenFinished = true
          a.reset().fadeIn(0.3).play()
        })
      },
    }))

    useEffect(() => {
      if (!group.current) return

      const wave = actions['waving_gesture']
      const idle = actions['idle']
      if (!wave || !idle) return

      const waveClip = animations.find(a => a.name === 'waving_gesture')
      const idleClip = animations.find(a => a.name === 'idle')
      if (!waveClip || !idleClip) return

      // Remap wave tracks → _1 bones (drives eyes/mouth during wave)
      const waveClip1 = waveClip.clone()
      waveClip1.name  = 'waving_gesture_1'
      waveClip1.tracks.forEach(t => {
        const dot = t.name.lastIndexOf('.')
        if (dot > -1) t.name = t.name.slice(0, dot) + '_1' + t.name.slice(dot)
      })
      const wave1 = mixer.clipAction(waveClip1, group.current)

      // Remap idle tracks — strip _1 (drives body during idle)
      const idleClip0 = idleClip.clone()
      idleClip0.name  = 'idle_0'
      idleClip0.tracks.forEach(t => {
        const dot = t.name.lastIndexOf('.')
        if (dot > -1) {
          const bone = t.name.slice(0, dot)
          if (bone.endsWith('_1')) t.name = bone.slice(0, -2) + t.name.slice(dot)
        }
      })
      const idle0 = mixer.clipAction(idleClip0, group.current)

      // Store refs for external access
      waveRef.current  = wave
      wave1Ref.current = wave1
      idleRef.current  = idle
      idle0Ref.current = idle0

      const startIdle = () => {
        isWaving.current = false
        ;[idle, idle0].forEach(a => {
          a.reset()
          a.repetitions = Infinity
          a.fadeIn(0.3).play()
        })
      }

      // Initial wave on mount
      isWaving.current = true
      ;[wave, wave1].forEach(a => {
        a.repetitions = 1
        a.clampWhenFinished = true
        a.reset().play()
      })

      const onFinished = (e: THREE.Event & { action?: THREE.AnimationAction }) => {
        if (e.action !== wave) return
        wave.fadeOut(0.3)
        wave1.fadeOut(0.3)
        startIdle()
      }

      mixer.addEventListener('finished', onFinished)
      return () => {
        mixer.removeEventListener('finished', onFinished)
        wave1.stop()
        idle0.stop()
      }
    }, [actions, mixer, animations])

    return (
      <group ref={group} {...props} dispose={null}>
        <group name='Scene' scale={0.013} rotation={[Math.PI / 2, 0, 0]}>
          {/* Both armature roots — meshes are split across Armature and Armature001 */}
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.mixamorigHips_1} />
          <skinnedMesh
            name='body'
            geometry={nodes.Boy01_Body_Geo.geometry}
            material={nodes.Boy01_Body_Geo.material}
            skeleton={nodes.Boy01_Body_Geo.skeleton}
          />
          <skinnedMesh
            name='mouth'
            geometry={nodes.h_Geo001.geometry}
            material={nodes.h_Geo001.material}
            skeleton={nodes.h_Geo001.skeleton}
            renderOrder={1}
          />
          <skinnedMesh
            name='eyes'
            geometry={nodes.Boy01_Eyes_Geo001.geometry}
            material={nodes.Boy01_Eyes_Geo001.material}
            skeleton={nodes.Boy01_Eyes_Geo001.skeleton}
            renderOrder={1}
          />
          <skinnedMesh
            name='brows'
            geometry={nodes.Boy01_Brows_Geo001.geometry}
            material={nodes.Boy01_Brows_Geo001.material}
            skeleton={nodes.Boy01_Brows_Geo001.skeleton}
            renderOrder={1}
          />
        </group>
      </group>
    )
  }
)

export default Avatar

