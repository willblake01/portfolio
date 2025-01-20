import { Card, CardContent, Grid2, Typography } from '@mui/material'
import Link from 'next/link'

const ContactCard = () => (
  <Grid2 container>
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        padding: '0.5rem',
      }}
    >
      <CardContent>
        <Typography component={'p'}>Phone: 510-394-5710</Typography>
        <Typography component={'p'}>
          Email: willblakebooking@gmail.com
        </Typography>
        <Typography component={'p'}>
          <Link
            target="blank"
            href="https://www.linkedin.com/in/william-blake/"
          >
            LinkedIn
          </Link>
        </Typography>
      </CardContent>
    </Card>
  </Grid2>
)

export default ContactCard
