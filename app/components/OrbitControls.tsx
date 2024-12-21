import React from 'react'
import { extend, useThree } from '@react-three/fiber'
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

function Controls() {
  const { camera, gl } = useThree()

  return (
    <primitive
      object={new OrbitControls(camera, gl.domElement)}
      attach={'orbitControls'}
    />
  )
}

export default Controls
