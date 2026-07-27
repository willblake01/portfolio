import { Box, Grid2 } from '@mui/material'
import { HexFloat } from '@/components/canvas-ui/hex-float'
import experience from '../data/experience.json'
import { AppBar, PageHeader } from '../components'
import ExperienceCard from './components/ExperienceCard'

const Experience = () => (
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
      <Box sx={{ minHeight: '100%', width: '100%', pb: 6 }}>
        <PageHeader title="Experience" />
        <Grid2
          container
          sx={{ display: 'flex', justifyContent: 'space-evenly' }}
          spacing={6}
        >
          {experience.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </Grid2>
      </Box>
    </HexFloat>
  </Box>
)

export default Experience
