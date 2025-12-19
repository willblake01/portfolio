'use client'
import { Suspense } from 'react'
import { Grid2 } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { AppBar, Avatar } from './components'
import { Controls, Light } from './components/Avatar/components'
import PageHeader from './components/PageHeader'

const Home = () => (
  <>
    <AppBar />
    <Grid2 container sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <PageHeader title="Where there's a Will, <br /> there's a way" />
      <Grid2
        container
        sx={{
          display: 'flex',
          height: '100vh',
          width: '37.5rem',
        }}
      >
        <Canvas
          shadows
          className="canvas"
          camera={{
            position: [0, 0, 2],
          }}
        >
          <Suspense fallback={null}>
            <Light position={[2, 3, 2]} />
            <Controls />
            <Avatar />
          </Suspense>
          <ambientLight color={'white'} intensity={4} />
        </Canvas>
      </Grid2>
    </Grid2>
  </>
)

export default Home
