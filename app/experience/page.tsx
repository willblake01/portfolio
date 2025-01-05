'use client'
import { Box, Typography } from '@mui/material'
import AppBar from '../components/AppBar'
import experience from './data/experience.json'
import ExperienceCard from './components/ExperienceCard'

const Experience = () => (
  <>
    <AppBar />
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '2.5rem',
      }}
    >
      <Typography
        sx={{ marginBottom: '2.5rem' }}
        component={'h2'}
        fontFamily="FingerPaint"
        variant={'h1'}
      >
        Experience
      </Typography>
      <Box
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
      </Box>
    </Box>
  </>
)

export default Experience
