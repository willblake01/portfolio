'use client'
import { Grid2 } from '@mui/material'
import { AppBar, PageHeader } from '../components'
import { VRCard } from './components'
import projects from '../data/vr.json'

const VR = () => (
  <>
    <AppBar />
    <PageHeader title="Virtual Reality" />
    <Grid2
      container
      spacing={6}
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        mb: '2.5rem',
      }}
    >
      {projects.map((project) => (
        <VRCard key={project.id} project={project} />
      ))}
    </Grid2>
  </>
)

export default VR
