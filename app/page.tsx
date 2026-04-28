
import dynamic from 'next/dynamic'
import { Box, Grid2 } from '@mui/material'
import { AppBar } from './components'
import PageHeader from './components/PageHeader'

const AvatarScene = dynamic(
  () => import('./components/AvatarScene').then((mod) => mod.AvatarScene),
  { ssr: false },
)

const Home = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <AppBar />
    <Grid2
      container
      sx={{ display: 'flex', justifyContent: 'space-around', flex: 1, overflow: 'hidden' }}
    >
      <PageHeader title="Where there's a Will, <br /> there's a way" />
      <Grid2
        container
        sx={{
          display: 'flex',
          height: '100%',
          width: '37.5rem',
        }}
      >
        <AvatarScene />
      </Grid2>
    </Grid2>
  </Box>
)

export default Home
