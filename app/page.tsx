'use client'

import dynamic from 'next/dynamic'
import { Box, Grid2 } from '@mui/material'
import { AppBar } from './components'
import HeroHeading, { heroTechStackDelay } from './components/HeroHeading'
import TechStack from './components/TechStack'

const AvatarScene = dynamic(
  () => import('./components/AvatarScene').then((mod) => mod.AvatarScene),
  { ssr: false },
)

const Home = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <AppBar />
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flex: 1,
        height: '100%',
      }}
    >
      <Grid2
        container
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          height: '100%',
          flexDirection: { xs: 'column', lg: 'row' },
          flexWrap: { xs: 'wrap', lg: 'wrap' },
        }}
      >
        <Grid2
          size={{ xs: 12, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: 'max-content',
            padding: { xs: '0 1rem', lg: '1rem 2rem' },
          }}
        >
          <HeroHeading />
          <TechStack startDelay={heroTechStackDelay} />
        </Grid2>
        <Grid2
          size={{ xs: 12, lg: 4 }}
          sx={{
            display: 'flex',
            flex: { xs: 1, lg: 'unset' },
            height: { xs: 'unset', lg: '100%' },
            overflowY: { xs: 'auto', lg: 'unset' },
          }}
        >
          <AvatarScene />
        </Grid2>
      </Grid2>
    </Box>
  </Box>
)

export default Home
