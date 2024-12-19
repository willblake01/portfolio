import { Box, Grid2, Typography } from '@mui/material';
import AppBar from '../components/AppBar';
import Enterprise from './components/Enterprise';
import Toy from './components/Toy';

const Projects = () => (
  <>
    <AppBar />
    <Box sx={{ justifyContent: 'center', display: 'flex' }}>
      <Typography sx={{ marginBottom: '2.5rem' }} variant={'h1'}>
        Projects
      </Typography>
    </Box>
    <Grid2 container>
      <Grid2 size={8} spacing={2} sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5' component='div'>Enterprise</Typography>
        <Enterprise />
      </Grid2>
      <Grid2 size={4} spacing={2} sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5' component='div'>Toy</Typography>
        <Toy />
      </Grid2>
    </Grid2>
  </>
);

export default Projects
