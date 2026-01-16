'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Avatar } from './components'
import { Controls, Light } from './components'

const AvatarScene = () => {
  return (
    <Canvas shadows className="canvas" camera={{ position: [0, 0, 2] }}>
      <Suspense fallback={null}>
        <Light position={[2, 3, 2]} />
        <Controls />
        <Avatar />
      </Suspense>
      <ambientLight color="white" intensity={4} />
    </Canvas>
  )
}

export default AvatarScene
