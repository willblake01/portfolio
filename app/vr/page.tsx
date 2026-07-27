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
    <HexFloat
      tilt={10}
      float={0.3}
      iridescence={0.4}
      grain={0.4}
      style={{ flex: 1, minHeight: 0 }}
    >
      <Box sx={{ minHeight: '100%', pb: 6 }}>
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
    </HexFloat>
  </Box>
)

export default VR
