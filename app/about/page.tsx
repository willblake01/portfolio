'use client'
import { Box, Card, Grid2, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import about from './data/about.json'

const About = () => (
  <>
    <AppBar />
    <Box
      sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
    >
      <Typography
        fontFamily="FingerPaint"
        sx={{ marginBottom: '2.5rem' }}
        variant={'h1'}
      >
        About
      </Typography>
    </Box>
    <Grid2 container sx={{ display: 'flex' }}>
      <Grid2
        size={7}
        sx={{
          display: 'flex',
          height: 'max-content',
          justifyContent: 'center',
        }}
      >
        <Card sx={{ borderRadius: 2, padding: '1.5rem', width: '50rem' }}>
          {about.paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              component={'p'}
              dangerouslySetInnerHTML={{ __html: paragraph.text }}
              sx={{ textIndent: '4em' }}
            />
          ))}
        </Card>
      </Grid2>
      <Grid2 size={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex' }}>
          <img
            src="https://res.cloudinary.com/willblake01/image/upload/v1732640647/profile-pic.jpg"
            alt="profile-pic"
            style={{
              borderRadius: '8px',
              height: 'max-content',
              width: '25rem',
            }}
          />
        </Box>
      </Grid2>
    </Grid2>
  </>
)

export default About
