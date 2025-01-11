'use client'
import { Grid2, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import experience from './data/experience.json'
import ExperienceCard from './components/ExperienceCard'

const Experience = () => (
  <>
    <AppBar />
    <Grid2
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '2.5rem',
      }}
    >
      <Typography component={'h2'} fontFamily="FingerPaint" variant={'h1'}>
        Experience
      </Typography>
    </Grid2>
    <Grid2
      container
      spacing={2}
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
