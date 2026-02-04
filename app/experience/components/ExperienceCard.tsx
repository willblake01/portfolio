import {
  Box,
  Card,
  CardContent,
  CardHeader, CardMedia,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import type { Job } from '../../types'

interface ExperienceCardProps {
  job: Job
}

const ExperienceCard = ({ job }: ExperienceCardProps) => (
  <Card
    sx={{
      borderRadius: 2,
      color: 'text.secondary',
      width: '32.5rem',
      boxShadow: 3,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <CardMedia
      component="img"
      image={job.image}
      alt={job.title}
      sx={{
        width: '100%',
        height: 'clamp(220px, 34vw, 360px)',
        objectFit: 'cover',
        display: 'block',
      }}
    />
    <CardHeader title={job.team} sx={{ textAlign: 'center' }} />
    <CardContent
      sx={{
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
        {job.responsibilities.map((responsibility) => (
          <ListItem key={responsibility.id} sx={{ display: 'list-item' }}>
            {responsibility.text}
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginTop: 'auto' }}>
        <Typography component="div">
          Tech environment: <i>{job.technologies.join(', ')}</i>
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

export default ExperienceCard
