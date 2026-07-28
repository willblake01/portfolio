import Image from 'next/image'
import { Box, Grid2, Card, Typography } from '@mui/material'
import { HexFloat } from '@/components/canvas-ui/hex-float'

import { AppBar, PageHeader } from '../components'
import about from '../data/about.json'

const About = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <AppBar />
    <PageHeader title="About" />
    <Grid2
      container
      size={7}
      spacing={4}
      sx={{
        display: 'flex',
        justifyContent: 'center',
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
        <Image
          src={about.image}
          alt="profile-pic"
          priority
          width={400}
          height={400}
          style={{
            borderRadius: '8px',
            height: 'auto',
            width: '100%',
          }}
        />
      </Grid2>
    </Grid2>
  </Box>
)

export default About
