import { Box, Grid2, Typography } from '@mui/material'
import AppBar from '../components/AppBar'
import Enterprise from './components/Enterprise'
import Toy from './components/Toy'

const Projects = () => (
  <>
    <AppBar />
    <Box sx={{ justifyContent: 'center', display: 'flex' }}>
      <Typography sx={{ marginBottom: '2.5rem' }} variant={'h1'}>
        Projects
      </Typography>
    </Box>
    <Grid2 container sx={{ marginBottom: '2.5rem' }}>
      <Grid2
        size={6}
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <Typography
          component="div"
          sx={{ marginBottom: '2.5rem' }}
          variant="h5"
        >
          Enterprise
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Enterprise />
        </Box>
      </Grid2>
      <Grid2
        size={6}
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <Typography
          component="div"
          sx={{ marginBottom: '2.5rem' }}
          variant="h5"
        >
          Toy
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Toy />
        </Box>
      </Grid2>
    </Grid2>
  </>
)

export default Projects
