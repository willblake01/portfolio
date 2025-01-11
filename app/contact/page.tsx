'use client'
import { Grid2, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import ContactCard from './components/ContactCard'

const Contact = () => (
  <>
    <AppBar />
    <Grid2
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '2.5rem',
      }}
    >
      <Typography fontFamily="FingerPaint" variant={'h1'}>
        Contact
      </Typography>
    </Grid2>
    <Grid2 container sx={{ display: 'flex', justifyContent: 'center' }}>
      <ContactCard />
    </Grid2>
  </>
)

export default Contact
