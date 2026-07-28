import { Box, Grid2 } from '@mui/material'
import { HexFloat } from '@/components/canvas-ui/hex-float'
import { AppBar, PageHeader } from '../components'
import { ProjectCard } from '../components'
import projects from '../data/vr.json'

const VR = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <AppBar />
    <Box sx={{ minHeight: '100%', width: '100%', pb: 6 }}>
      <PageHeader title="VR" />
      <Grid2
        container
        sx={{ display: 'flex', justifyContent: 'space-evenly' }}
        spacing={6}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid2>
    </Box>
  </Box>
)

export default VR
