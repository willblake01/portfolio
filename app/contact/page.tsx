import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AppBar from '../components/AppBar';
import Link from 'next/link';

const Contact = () => (
  <>
    <AppBar />
    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ marginBottom: '40px' }} variant={'h1'}>
        Contact
      </Typography>
      <Card sx={{ borderRadius: 2,  height: '800ox', width: '600px' }}>
        <CardMedia
          sx={{
            height: 240 }}
          image='https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/landing-background.jpg'
          title='Contact'
        />
        <CardContent sx={{ marginBottom: '60px' }}>
          <Typography component={'p'}>
          Phone: 512-560-4385
          </Typography>
          <Typography component={'p'}>
            Email: willblakebooking@gmail.com
          </Typography>
          <Typography component={'p'}>
            <Link target='blank' href='https://www.linkedin.com/in/william-blake/'>LinkedIn</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </>
)

export default Contact
