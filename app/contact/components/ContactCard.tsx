import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

const ContactCard = () => (
  <Card sx={{ borderRadius: 2, height: '800ox', width: '37.5rem' }}>
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
