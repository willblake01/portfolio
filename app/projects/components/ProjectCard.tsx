import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const CardComponents = () => (
    <>
      <CardMedia
        sx={{ height: 300 }}
        image={project.image}
        title={project.title}
      />
      <CardHeader
        title={project.title}
        subheader={project.description}
        sx={{ textAlign: 'center' }}
      />
      <CardContent sx={{ color: 'text.secondary' }}>
        <List sx={{ listStyleType: 'disc', padding: '1rem' }}>
          {project.contributions.map((contribution) => (
            <ListItem key={contribution.id} sx={{ display: 'list-item' }}>
              {contribution.text}
            </ListItem>
          ))}
        </List>
        <Typography component="div">
          Technologies: <i>{project.technologies.join(', ')}</i>
        </Typography>
        <CardActions>
          {project?.gitHub ? (
            <Link href={project.gitHub} target="_blank">
              <GitHubIcon />
            </Link>
          ) : null}
        </CardActions>
      </CardContent>
    </>
  )

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        width: '35rem',
      }}
    >
      {project.url ? (
        <CardActionArea href={project.url} target="_blank">
          <CardComponents />
        </CardActionArea>
      ) : (
        <CardComponents />
      )}
    </Card>
  )
}

export default ProjectCard
