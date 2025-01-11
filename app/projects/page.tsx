'use client'
import { Grid2, Typography } from '@mui/material'
import projects from './data/projects.json'
import AppBar from '../components/AppBar/AppBar'
import ProjectCard from './components/ProjectCard'

interface Project {
  id: string
  link: string
  image: string
  title: string
  description: string
  contributions: string[]
  technologies: string[]
}

const Projects = () => (
  <>
    <AppBar />
    <Grid2
      container
      sx={{ display: 'flex', justifyContent: 'center', mb: '2.5rem' }}
    >
      <Typography fontFamily="FingerPaint" variant={'h1'}>
        Projects
      </Typography>
    </Grid2>
    <Grid2 container sx={{ mb: '2.5rem' }}>
      <Grid2
        size={{ lg: 6 }}
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <Typography component="div" sx={{ mb: '2.5rem' }} variant="h5">
          Enterprise
        </Typography>
        <Grid2
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '1.25rem',
            width: '100%',
          }}
        >
          {projects.enterprise.map((project: Project) => (
            <ProjectCard project={project} />
          ))}
        </Grid2>
      </Grid2>
      <Grid2
        size={{ lg: 6 }}
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <Typography component="div" sx={{ mb: '2.5rem' }} variant="h5">
          Toy
        </Typography>
        <Grid2
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '1.25rem',
            width: '100%',
          }}
        >
          {projects.toy.map((project: Project) => (
            <ProjectCard project={project} />
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  </>
)

export default Projects
