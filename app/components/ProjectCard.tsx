import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

const CardBody = ({ project }: ProjectCardProps) => (
  <>
    <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 600px) 100vw, 512px"
        style={{ objectFit: 'cover' }}
      />
    </Box>
    <CardHeader
      title={project.title}
      subheader={project.description}
      titleTypographyProps={{
        sx: { textAlign: 'center', marginBottom: '0.5rem' },
      }}
      subheaderTypographyProps={{ sx: { textAlign: 'left' } }}
      sx={{ paddingBottom: '0.5rem' }}
    />
    <CardContent
      sx={{
        color: 'text.secondary',
        paddingTop: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <List
        sx={{
          listStyleType: 'disc',
          padding: '1rem',
          flexGrow: 1,
        }}
      >
        {project.contributions.map((contribution) => (
          <ListItem key={contribution.id} sx={{ display: 'list-item' }}>
            {contribution.text}
          </ListItem>
        ))}
      </List>
      <Typography component="div" sx={{ marginTop: 'auto' }}>
        Technologies: <i>{project.technologies.join(', ')}</i>
      </Typography>
    </CardContent>
  </>
)

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Card
    sx={{
      borderRadius: 2,
      boxShadow: 3,
      width: '32rem',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {project.url ? (
      <CardActionArea
        component="a"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardBody project={project} />
      </CardActionArea>
    ) : (
      <CardBody project={project} />
    )}

    {(project?.apk || project?.gitHub) && (
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 'auto',
          gap: 2,
        }}
      >
        {project?.apk && (
          <a
            href={project.apk}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download .apk file
          </a>
        )}
        {project?.gitHub && (
          <IconButton
            component="a"
            href={project.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <GitHubIcon />
          </IconButton>
        )}
      </CardActions>
    )}
  </Card>
)

export default ProjectCard
