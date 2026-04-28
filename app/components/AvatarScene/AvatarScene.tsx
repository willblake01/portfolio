'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from './components'
import { Light } from './components'

const AvatarScene = () => {
  return (
    <Canvas shadows className="canvas" camera={{ position: [0, 0.9, 2], fov: 68 }}>
      <Suspense fallback={null}>
        <Light position={[2, 3, 2]} />
        <OrbitControls target={[0, 0.9, 0]} enableZoom={false} enablePan={false} />
        <Avatar />
      </Suspense>
      <ambientLight color="white" intensity={4} />
    </Canvas>
  )
}

export default AvatarScene
