'use client'
import { Grid2, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import ContactCard from './components/ContactCard'

const Contact = () => (
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
        Contact
      </Typography>
      <ContactCard />
    </Grid2>
  </>
)

export default Contact
