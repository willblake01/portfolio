import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

const ContactCard = () => (
  <Card sx={{ borderRadius: 2, height: '800ox', width: '37.5rem' }}>
    <CardMedia
      sx={{
        height: 440,
        marginBottom: 4,
      }}
      image="https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/landing-background.jpg"
      title="Contact"
    />
    <CardContent>
      <Typography component={'p'}>Email: willblakebooking@gmail.com</Typography>
      <Typography component={'p'}>
        <Link target="blank" href="https://www.linkedin.com/in/william-blake/">
          LinkedIn
        </Link>
      </Typography>
    </CardContent>
  </Card>
)

export default ContactCard
