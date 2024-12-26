'use client'
import { Suspense } from 'react'
import { Box, Typography } from '@mui/material'
import AppBar from './components/AppBar'
import { Canvas } from '@react-three/fiber'
import Avatar from './components/Avatar'
import Light from './components/Light'
import Controls from './components/OrbitControls'

const Home = () => (
  <>
    <AppBar />
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'max-content',
          padding: '2.5rem',
          width: 'max-content',
        }}
      >
        <Typography variant={'h1'}>Where there's a Will,</Typography>
        <Typography variant={'h1'}>there's a way</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          padding: '2.5rem',
          width: '37.5rem',
        }}
      >
        <Canvas
          shadows
          className="canvas"
          camera={{
            position: [0, 0, 6],
          }}
        >
          <Suspense fallback={null}>
            <Light position={[2, 3, 2]} />
            <Controls />
            <Avatar />
          </Suspense>
          <ambientLight color={'white'} intensity={4} />
        </Canvas>
      </Box>
    </Box>
  </>
)

export default Home
