'use client'
import { Grid2, Card, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import about from './data/about.json'

const About = () => (
  <>
    <AppBar />
    <Grid2
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography fontFamily="FingerPaint" sx={{ mb: '2.5rem' }} variant={'h1'}>
        About
      </Typography>
    </Grid2>
    <Grid2
      container
      size={7}
      spacing={4}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '2.5rem',
      }}
    >
      <Card
        sx={{
          borderRadius: 2,
          padding: '1.5rem',
          height: 'max-content',
          width: '50rem',
        }}
      >
        {about.paragraphs.map((paragraph, index) => (
          <Typography
            key={index}
            component={'p'}
            dangerouslySetInnerHTML={{ __html: paragraph.text }}
            sx={{ textIndent: '4em' }}
          />
        ))}
      </Card>
      <Grid2
        size={{ sm: 1, lg: 3 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <img
          src="https://res.cloudinary.com/willblake01/image/upload/v1732640647/profile-pic.jpg"
          alt="profile-pic"
          style={{
            borderRadius: '8px',
            height: 'auto',
            width: '100%',
          }}
        />
      </Grid2>
    </Grid2>
  </>
)

export default About
