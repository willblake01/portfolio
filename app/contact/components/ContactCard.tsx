import { Card, CardContent, Grid2, Typography } from '@mui/material'
import Link from 'next/link'
import contact from '../data/contact.json'

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
        <Typography component={'p'}>{`Phone: ${contact.phone}`}</Typography>
        <Typography component={'p'}>{`Email: ${contact.email}`}</Typography>
        <Typography component={'p'}>
          <Link target="blank" href={`${contact.linkedInURL}`}>
            LinkedIn
          </Link>
        </Typography>
      </CardContent>
    </Card>
  </Grid2>
)

export default ContactCard
