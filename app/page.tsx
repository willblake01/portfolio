
import dynamic from 'next/dynamic'
import { Box, Grid2 } from '@mui/material'
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
      overflow: 'hidden',
      mb: -12,
    }}
  >
    <AppBar />
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
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
  </Box>
)

export default Home
