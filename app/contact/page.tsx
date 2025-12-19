'use client'
import { Grid2 } from '@mui/material'
import { AppBar, PageHeader } from '../components'
import { ContactCard } from './components'

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
