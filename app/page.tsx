'use client'

import { Grid2 } from '@mui/material'
import { AppBar } from './components'
import PageHeader from './components/PageHeader'
import { AvatarScene } from './components/AvatarScene'

const Home = () => (
  <>
    <AppBar />
    <Grid2 container sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <PageHeader title="Where there's a Will, <br /> there's a way" />
      <Grid2
        container
        sx={{
          display: 'flex',
          height: '100vh',
          width: '37.5rem',
        }}
      >
        <AvatarScene />
      </Grid2>
    </Grid2>
  </>
)

export default Home
