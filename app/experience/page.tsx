import { Box, Card, CardContent, CardHeader, List, ListItem, Typography } from '@mui/material';
import AppBar from '../components/AppBar';
import experience from './data/experience.json';

const Experience = () => (
  <>
    <AppBar />
    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '2.5rem' }}>
      <Typography sx={{ marginBottom: '2.5rem' }} component={'h2'} variant={'h1'}>Experience</Typography>
      <Box sx={{ justifyContent: 'space-around', display: 'flex', padding: '1.25rem', width: '100%' }}>
        {
          experience.map((job) => (
            <Card key={job.id} sx={{ borderRadius: 2, color: 'text.secondary', padding: '0.625rem', textAlign: 'center', width: '32.5rem' }}>
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
                <List sx={{ listStyleType: 'disc' }}>
                  {job.responsibilities.map((item, index) => (
                      <ListItem key={index} sx={{ display: 'list-item' }}>{item}</ListItem>
                    ))}
                </List>
              </CardContent>
            </Card>
          ))
        }
      </Box>
    </Box>
  </>
)

export default Experience
