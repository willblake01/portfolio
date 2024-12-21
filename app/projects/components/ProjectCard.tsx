import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  Typography,
} from '@mui/material'

interface Project {
  id: string
  link: string
  image: string
  title: string
  description: string
  contributions: string[]
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Card sx={{ borderRadius: 2, width: '35rem' }}>
    <CardActionArea href={project.link} target="_blank">
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
      <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
        <List sx={{ listStyleType: 'disc' }}>
          {project.contributions.map((item, index) => (
            <ListItem key={index} sx={{ display: 'list-item' }}>
              {item}
            </ListItem>
          ))}
        </List>
        <Typography component="div">
          Technologies: <i>{project.technologies.join(', ')}</i>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default ProjectCard
