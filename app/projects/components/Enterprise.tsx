import { Box, Card, CardHeader, CardMedia, List, ListItem, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import projects from '../data/projects.json';

const Enterprise = () => (
  <>
    <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {
          projects.enterprise.map((project) => (
            <ListItem key={project.id}>
              <Card sx={{ borderRadius: 2,  width: '27.5rem' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={project.image}
                  title={project.title}
                />
                <CardHeader title={project.title} subheader={project.description} sx={{ textAlign: 'center' }} />
                <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
                  <List sx={{ listStyleType: 'disc' }}>
                    {project.contributions.map((item, index) => (
                      <ListItem key={index} sx={{ display: 'list-item' }}>{item}</ListItem>
                    ))}
                  </List>
                  <Typography component='div'>Technologies: {project.technologies.join(', ')}</Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))
        }
      </Box>
    </Box>
  </>
)

export default Enterprise
