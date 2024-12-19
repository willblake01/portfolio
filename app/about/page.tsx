import { Box, Card, Grid2, Typography } from '@mui/material';
import AppBar from '../components/AppBar';

const About = () => (
  <>
    <AppBar />
    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ marginBottom: '2.5rem' }} variant={'h1'}>
        About
      </Typography>
    </Box>
    <Grid2 container sx={{ display: 'flex' }}>
    <Grid2 size={7} spacing={2} sx={{ display: 'flex', height: 'max-content', justifyContent: 'center' }}>
      <Card sx={{ borderRadius: 2, padding: '1.5rem', width: '50rem' }}>
        <Typography component={'p'} sx={{ textIndent: '4em' }}>
          William Blake is an Intuitive Seeker who is never satisfied in his intellectual pursuits and whose curiosity knows no bounds. He is a prolific full stack web developer with a passion for metrics and beating former “best-yets”. He leverages strong business acumen with a background in finance and sales to meld engineering and business interests. He was previously a software engineer on the commerce platform Subscriptions, Notifications, and Payments (SNaP) team at Unity Technologies. He loves to help people help people and is currently seeking a position on an empowered product team. Web development quenches his thirst as an ENTP, who rarely pass up the opportunity to learn something new.<br></br><br></br>
        </Typography>
        <Typography component={'p'} sx={{ textIndent: '4em' }}>
          When he isn’t making computers dance, you can find him spending his time playing guitar, learning Spanish, running marathons, and trying not to fall down on the soccer field. He loves his native Austin but also enjoys traveling!
        </Typography>
      </Card>
    </Grid2>
    <Grid2 size={5} spacing={2} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex' }}>
        <img src='https://res.cloudinary.com/willblake01/image/upload/v1732640647/profile-pic.jpg' alt='profile-pic' style={{ height: 'max-content', width: '25rem' }} />
      </Box>
    </Grid2>
  </Grid2>
  </>
)

export default About
