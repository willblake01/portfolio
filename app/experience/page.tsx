import { Box, Grid2 } from '@mui/material'
import experience from '../data/experience.json'
import { AppBar, PageHeader } from '../components'
import ExperienceCard from './components/ExperienceCard'

const Experience = () => (
  <>
    <AppBar />
    <PageHeader title="Experience" />
    <Box sx={{ mb: '6rem' }}>
      <Grid2
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
        spacing={6}
      >
        {experience.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </Grid2>
    </Box>
  </>
)

export default Experience
