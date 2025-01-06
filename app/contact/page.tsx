'use client'
import { Box, Typography } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import ContactCard from './components/ContactCard'

const Contact = () => (
  <>
    <AppBar />
    <Box
      sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
    >
      <Typography
        fontFamily="FingerPaint"
        sx={{ mb: '2.5rem' }}
        component={'h2'}
        variant={'h1'}
      >
        Contact
      </Typography>
      <ContactCard />
    </Box>
  </>
)

export default Contact
