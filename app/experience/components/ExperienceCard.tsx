import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
} from '@mui/material'
import type { Job } from '../../types/experience'

interface ExperienceCardProps {
  job: Job
}

const ExperienceCard = ({ job }: ExperienceCardProps) => (
  <Card
    sx={{
      borderRadius: 2,
      color: 'text.secondary',
      textAlign: 'center',
      width: '32.5rem',
      boxShadow: 3,
    }}
  >
    <Box
      component="img"
      sx={{
        height: 233,
        width: 350,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
        marginTop: 4,
      }}
      alt="The house from the offer."
      src={job.image}
    />
    <CardHeader subheader={job.team} sx={{ textAlign: 'center' }} />
    <CardContent>
      <List sx={{ listStyleType: 'disc', padding: '1rem' }}>
        {job.responsibilities.map((responsibility) => (
          <ListItem key={responsibility.id} sx={{ display: 'list-item' }}>
            {responsibility.text}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
)

export default ExperienceCard
