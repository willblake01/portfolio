'use client'
import { Grid2, Typography } from '@mui/material'
import projects from '../data/projects.json'
import { AppBar, PageHeader } from '../components'
import { ProjectCard } from './components'
import type { Project } from '../types'

const Projects = () => (
  <>
    <AppBar />
    <PageHeader title="Projects" />
    <Grid2 container>
      <Grid2
        size={{ lg: 6 }}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          mb: '2.5rem',
        }}
      >
        <Typography component="div" sx={{ mb: '2.5rem' }} variant="h5">
          Enterprise
        </Typography>
        <Grid2
          container
          spacing={6}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          {projects.enterprise.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid2>
      </Grid2>
      <Grid2
        size={{ lg: 6 }}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          mb: '2.5rem',
        }}
      >
        <Typography component="div" sx={{ mb: '2.5rem' }} variant="h5">
          Toy
        </Typography>
        <Grid2
          container
          spacing={6}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          {projects.toy.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  </>
)

export default Projects
