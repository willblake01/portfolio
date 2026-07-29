'use client'

import * as THREE from 'three'
import React, { JSX, useEffect, useImperativeHandle, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

const AVATAR_URL =
  'https://res.cloudinary.com/willblake01/raw/upload/v1777653389/portfolio/3D/models/avatar.glb'

type ActionName = 'waving_gesture' | 'idle'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = {
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
}

export interface AvatarHandle {
  triggerWave: () => void
}

interface AvatarProps {
  // Fires once, the first time the initial mount-wave animation finishes —
  // lets a parent (e.g. the hero heading) sequence its own entrance off of it,
  // rather than guessing the clip's duration with a hardcoded delay.
  onInitialWaveComplete?: () => void
}

export const Avatar = React.forwardRef<
  AvatarHandle,
  JSX.IntrinsicElements['group'] & AvatarProps
>(function Avatar({ onInitialWaveComplete, ...props }, ref) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(AVATAR_URL)
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone) as unknown as GLTFResult
  const { actions, mixer } = useAnimations(animations, group)

  const waveRef = useRef<THREE.AnimationAction | null>(null)
  const wave1Ref = useRef<THREE.AnimationAction | null>(null)
  const idleRef = useRef<THREE.AnimationAction | null>(null)
  const idle0Ref = useRef<THREE.AnimationAction | null>(null)
  const isWaving = useRef(false)
  const hasFiredInitialComplete = useRef(false)

  // Keep the latest callback in a ref rather than the effect's dependency
  // array — an inline arrow function from the parent gets a new identity
  // on every render, and including it as a dep would tear down and re-run
  // this whole wave-setup effect (replaying the mount animation) every
  // time the parent re-renders, e.g. right after this very callback fires.
  const onInitialWaveCompleteRef = useRef(onInitialWaveComplete)
  useEffect(() => {
    onInitialWaveCompleteRef.current = onInitialWaveComplete
  }, [onInitialWaveComplete])

  useImperativeHandle(ref, () => ({
    triggerWave: () => {
      const wave = waveRef.current
      const wave1 = wave1Ref.current
      const idle = idleRef.current
      const idle0 = idle0Ref.current
      if (!wave || !wave1 || isWaving.current) return

      isWaving.current = true
      idle?.fadeOut(0.3)
      idle0?.fadeOut(0.3)
      ;[wave, wave1].forEach((a) => {
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

    const waveClip = animations.find((a) => a.name === 'waving_gesture')
    const idleClip = animations.find((a) => a.name === 'idle')
    if (!waveClip || !idleClip) return

    const waveClip1 = waveClip.clone()
    waveClip1.name = 'waving_gesture_1'
    waveClip1.tracks.forEach((t) => {
      const dot = t.name.lastIndexOf('.')
      if (dot > -1) t.name = t.name.slice(0, dot) + '_1' + t.name.slice(dot)
    })
    const wave1 = mixer.clipAction(waveClip1, group.current)

    const idleClip0 = idleClip.clone()
    idleClip0.name = 'idle_0'
    idleClip0.tracks.forEach((t) => {
      const dot = t.name.lastIndexOf('.')
      if (dot > -1) {
        const bone = t.name.slice(0, dot)
        if (bone.endsWith('_1')) t.name = bone.slice(0, -2) + t.name.slice(dot)
      }
    })
    const idle0 = mixer.clipAction(idleClip0, group.current)

    waveRef.current = wave
    wave1Ref.current = wave1
    idleRef.current = idle
    idle0Ref.current = idle0

    const startIdle = () => {
      isWaving.current = false
      ;[idle, idle0].forEach((a) => {
        a.reset()
        a.repetitions = Infinity
        a.fadeIn(0.3).play()
      })
    }

    isWaving.current = true
    ;[wave, wave1].forEach((a) => {
      a.repetitions = 1
      a.clampWhenFinished = true
      a.reset().play()
    })

    const onFinished = (
      e: THREE.Event & { action?: THREE.AnimationAction },
    ) => {
      if (e.action !== wave) return
      wave.fadeOut(0.3)
      wave1.fadeOut(0.3)
      startIdle()

      if (!hasFiredInitialComplete.current) {
        hasFiredInitialComplete.current = true
        onInitialWaveCompleteRef.current?.()
      }
    }

    mixer.addEventListener('finished', onFinished)
    return () => {
      mixer.removeEventListener('finished', onFinished)
      wave1.stop()
      idle0.stop()
      mixer.uncacheClip(waveClip1)
      mixer.uncacheClip(idleClip0)
    }
  }, [mixer, animations])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={0.013} rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.mixamorigHips} />
        <primitive object={nodes.mixamorigHips_1} />
        <skinnedMesh
          name="body"
          geometry={nodes.Boy01_Body_Geo.geometry}
          material={nodes.Boy01_Body_Geo.material}
          skeleton={nodes.Boy01_Body_Geo.skeleton}
        />
        <skinnedMesh
          name="mouth"
          geometry={nodes.h_Geo001.geometry}
          material={nodes.h_Geo001.material}
          skeleton={nodes.h_Geo001.skeleton}
          renderOrder={1}
        />
        <skinnedMesh
          name="eyes"
          geometry={nodes.Boy01_Eyes_Geo001.geometry}
          material={nodes.Boy01_Eyes_Geo001.material}
          skeleton={nodes.Boy01_Eyes_Geo001.skeleton}
          renderOrder={1}
        />
        <skinnedMesh
          name="brows"
          geometry={nodes.Boy01_Brows_Geo001.geometry}
          material={nodes.Boy01_Brows_Geo001.material}
          skeleton={nodes.Boy01_Brows_Geo001.skeleton}
          renderOrder={1}
        />
      </group>
    </group>
  )
})

export default Avatar
