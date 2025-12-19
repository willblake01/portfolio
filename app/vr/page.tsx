'use client'
import { Grid2 } from '@mui/material'
import { AppBar, PageHeader } from '../components'
import { ProjectCard } from '../components'
import projects from '../data/vr.json'

const VR = () => (
  <>
    <AppBar />
    <PageHeader title="VR" />
    <Grid2
      container
      spacing={6}
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        mb: '2.5rem',
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid2>
  </>
)

export default VR
