import { Box, Grid2 } from '@mui/material'
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
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
  </Box>
)

export default Contact
