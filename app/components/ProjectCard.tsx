import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const CardBody = () => (
    <>
      <CardMedia
        component="img"
        height="300"
        image={project.image}
        alt={project.title}
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
        <CardActionArea
          component="a"
          href={project.url}
          target="_blank"
          rel="roopener noreferrer"
        >
          <CardBody />
        </CardActionArea>
      ) : (
        <CardBody />
      )}

      {project?.apk ? (
        <CardActions sx={{ justifyContent: 'center' }}>
          <a
            href={project.apk}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download .apk file
          </a>
        </CardActions>
      ) : null}

      {project?.gitHub ? (
        <CardActions sx={{ justifyContent: 'center' }}>
          <IconButton
            component="a"
            href={project.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </CardActions>
      ) : null}
    </Card>
  )
}

export default ProjectCard
