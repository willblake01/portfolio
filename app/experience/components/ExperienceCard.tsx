import Image from 'next/image'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
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
      border: '1px solid',
      borderColor: 'divider',
      color: 'text.secondary',
      width: '32.5rem',
      boxShadow: 3,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
      <Image
        src={job.image}
        alt={job.title}
        fill
        sizes="(max-width: 600px) 100vw, 520px"
        style={{ objectFit: 'contain' }}
      />
    </Box>
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
