
import dynamic from 'next/dynamic'
import { Box, Grid2 } from '@mui/material'
import { HexFloat } from '@/components/canvas-ui/hex-float'
import { AppBar } from './components'
import HeroHeading from './components/HeroHeading'

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
    }}
  >
    <AppBar />
    <HexFloat
      tilt={10}
      float={0.3}
      iridescence={0.4}
      grain={0.4}
      style={{ flex: 1, overflow: 'hidden' }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          height: '100%',
        }}
      >
        <Grid2
          container
          sx={{
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
              alignItems: 'center',
              justifyContent: 'center',
              height: 'max-content',
              padding: { xs: '0 1rem', lg: '1rem 2rem' },
            }}
          >
            <HeroHeading />
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
    </HexFloat>
  </Box>
)

export default Home
