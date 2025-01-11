'use client'
import { Suspense } from 'react'
import { Grid2, Typography } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import AppBar from './components/AppBar/AppBar'
import Avatar from './components/Avatar/Avatar'
import Light from './components/Avatar/components/Light'
import Controls from './components/Avatar/components/OrbitControls'

const Home = () => (
  <>
    <AppBar />
    <Grid2 container sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Grid2
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'max-content',
          padding: '2.5rem',
          width: 'max-content',
        }}
      >
        <Typography fontFamily="FingerPaint" variant={'h1'}>
          Where there's a Will,
          <br />
          there's a way
        </Typography>
      </Grid2>
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
