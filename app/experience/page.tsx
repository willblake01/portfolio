import { Box, Grid2 } from '@mui/material'
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
  </Box>
)

export default Experience
