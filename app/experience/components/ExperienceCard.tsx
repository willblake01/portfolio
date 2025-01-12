import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
} from '@mui/material'

interface Job {
  id: string
  image: string
  team: string
  responsibilities: string[]
}

interface ExperienceCardProps {
  job: Job
}

const ExperienceCard = ({ job }: ExperienceCardProps) => (
  <Card
    key={job.id}
    sx={{
      borderRadius: 2,
      color: 'text.secondary',
      textAlign: 'center',
      width: '32.5rem',
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
        {job.responsibilities.map((item, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            {item}
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
)

export default ExperienceCard
