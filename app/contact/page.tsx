'use client'
import { Grid2 } from '@mui/material'
import AppBar from '../components/AppBar/AppBar'
import ContactCard from './components/ContactCard'
import PageHeader from '../components/PageHeader'

const Contact = () => (
  <>
    <AppBar />
    <PageHeader title="Contact" />
    <Grid2 container sx={{ display: 'flex', justifyContent: 'center' }}>
      <ContactCard />
    </Grid2>
  </>
)

export default Contact
