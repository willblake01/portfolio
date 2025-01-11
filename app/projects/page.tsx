'use client'
import { Grid2, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import Enterprise from './components/Enterprise'
import Toy from './components/Toy'

const Projects = () => (
  <>
    <AppBar />
    <Grid2 sx={{ justifyContent: 'center', display: 'flex' }}>
      <Typography
        fontFamily="FingerPaint"
        sx={{ marginBottom: '2.5rem' }}
        variant={'h1'}
      >
        Projects
      </Typography>
    </Grid2>
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
        <Grid2 sx={{ display: 'flex', flexDirection: 'column' }}>
          <Enterprise />
        </Grid2>
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
        <Grid2 sx={{ display: 'flex', flexDirection: 'column' }}>
          <Toy />
        </Grid2>
      </Grid2>
    </Grid2>
  </>
)

export default Projects
