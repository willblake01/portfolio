'use client'
import { Grid2, Card, Typography } from '@mui/material'
import { AppBar, PageHeader } from '../components'
import about from '../data/about.json'

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
            sx={{ textIndent: '2rem' }}
          />
        ))}
      </Card>
      <Grid2
        size={{ sm: 1, lg: 3 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <img
          src={about.image}
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
