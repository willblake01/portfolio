'use client'
import { Grid2, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import experience from './data/experience.json'
import ExperienceCard from './components/ExperienceCard'
import { Grid } from '@react-three/drei'

const Experience = () => (
  <>
    <AppBar />
    <Grid2
      container
      spacing={2}
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        mb: '2.5rem',
      }}
    >
      <Typography
        sx={{ mb: '2.5rem' }}
        component={'h2'}
        fontFamily="FingerPaint"
        variant={'h1'}
      >
        Experience
      </Typography>
      <Grid2
        container
        spacing={2}
        sx={{
          justifyContent: 'space-around',
          display: 'flex',
          padding: '1.25rem',
          width: '100%',
        }}
      >
        {experience.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </Grid2>
    </Grid2>
  </>
)

export default Experience
