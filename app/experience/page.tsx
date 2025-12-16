'use client'
import { Grid2 } from '@mui/material'
import experience from './data/experience.json'
import AppBar from '../components/AppBar/AppBar'
import ExperienceCard from './components/ExperienceCard'
import PageHeader from '../components/PageHeader'

const Experience = () => (
  <>
    <AppBar />
    <PageHeader title="Experience" />
    <Grid2
      container
      spacing={0}
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        mb: '2.5rem',
      }}
    >
      {experience.map((job) => (
        <ExperienceCard key={job.id} job={job} />
      ))}
    </Grid2>
  </>
)

export default Experience
