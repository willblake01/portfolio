'use client'
import { Grid2, Card, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import about from './data/about.json'
import PageHeader from '../components/PageHeader'

const About = () => (
  <>
    <AppBar />
    <PageHeader title="About" />
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
          boxShadow: 3,
          padding: '1.5rem',
          height: 'max-content',
          width: '50rem',
        }}
      >
        {about.paragraphs.map((paragraph) => (
          <Typography
            key={paragraph.id}
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
