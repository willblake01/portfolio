import { Box, Grid2 } from '@mui/material'
import { HexFloat } from '@/components/canvas-ui/hex-float'
import { AppBar, PageHeader } from '../components'
import { ContactCard } from './components'

const Contact = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <AppBar />
    <HexFloat
      tilt={15}
      float={0.3}
      iridescence={0.4}
      grain={0.4}
      style={{ flex: 1, overflow: 'hidden' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: 'background.default',
        }}
      >
        <PageHeader title="Contact" />
        <Grid2
          container
          sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          <ContactCard />
        </Grid2>
      </Box>
    </HexFloat>

  </Box>
)

export default Contact
