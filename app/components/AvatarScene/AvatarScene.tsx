'use client'

import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar, AvatarHandle } from './components'
import { Light } from './components'

const AvatarScene = () => {
  const avatarRef = useRef<AvatarHandle>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-appbar]')) return
      avatarRef.current?.triggerWave()
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <Canvas shadows className='canvas' camera={{ position: [0, 1.5, 2.5], fov: 68 }}>
      <Suspense fallback={null}>
        <Light position={[2, 3, 2]} />
        <OrbitControls target={[0, 1, 0]} enableZoom={false} enablePan={false} />
        <Avatar ref={avatarRef} position={[0, -0.15, 0]} />
      </Suspense>
      <ambientLight color='white' intensity={4} />
    </Canvas>
  )
}

export default AvatarScene
