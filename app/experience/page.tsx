'use client'
import { Grid2 } from '@mui/material'
import experience from '../data/experience.json'
import { AppBar, PageHeader } from '../components'
import ExperienceCard from './components/ExperienceCard'

const Experience = () => (
  <>
    <AppBar />
    <PageHeader title="Experience" />
    <Grid2
      container
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        mb: '6rem',
      }}
    >
      {experience.map((job) => (
        <ExperienceCard key={job.id} job={job} />
      ))}
    </Grid2>
  </>
)

export default Experience
