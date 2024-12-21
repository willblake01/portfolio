import { ListItem } from '@mui/material';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  link: string;
  image: string;
  title: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

const Enterprise = () => (
  projects.enterprise.map((project: Project) => (
    <ListItem key={project.id}>
      <ProjectCard project={project} />
    </ListItem>
  ))
)

export default Enterprise
