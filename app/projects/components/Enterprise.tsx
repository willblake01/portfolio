import { Box, Card, CardHeader, CardMedia, List, ListItem, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

const Enterprise = () => (
  <>
    <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ListItem>
          <Card sx={{ borderRadius: 2,  width: '440px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://res.cloudinary.com/willblake01/image/upload/v1734223151/under-armour-logo.png'
              title='Jackfruit Challenges Admin'
            />
            <CardHeader title='Jackfruit Challenges Admin'  subheader='Under Armour admin tool for creating challenges for MapMy Run' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: React, React Context, React Query</Typography>
            </CardContent>
          </Card>
        </ListItem>
        <ListItem>
          <Card sx={{ borderRadius: 2,  width: '440px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://res.cloudinary.com/willblake01/image/upload/v1734222530/map-my-run.png'
              title='MapMy Run'
            />
            <CardHeader title='MapMy Run' subheader='Under Armour GPS workout logging and Social Media app' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: React, Redux</Typography>
            </CardContent>
          </Card>
        </ListItem>
        <ListItem>
          <Card sx={{ borderRadius: 2,  width: '440px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://res.cloudinary.com/willblake01/image/upload/v1734222388/under-armour.png'
              title='Seabiscuit'
            />
            <CardHeader title='Seabiscuit' subheader='Performance clone for product description pages on underarmour.com' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: Next, React, React Query, GraphQL</Typography>
            </CardContent>
          </Card>
        </ListItem>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ListItem>
          <Card sx={{ borderRadius: 2,  width: '440px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://res.cloudinary.com/willblake01/image/upload/v1734222998/unity-logo.png'
              title='OneCommerce Notifications'
            />
            <CardHeader title='OneCommerce Notifications' subheader='Unity notification service for new commerce platform' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: Go, HTML, CSS</Typography>
            </CardContent>
          </Card>
        </ListItem>
        <ListItem>
          <Card sx={{ borderRadius: 2,  width: '440px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://res.cloudinary.com/willblake01/image/upload/v1734222779/unity-dashboard.png'
              title='Unity'
            />
            <CardHeader title='Unity Services Dashboard' subheader='All in one dashboard for users and admins to manage Unity services' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: </Typography>
            </CardContent>
          </Card>
        </ListItem>
      </Box>
    </Box>
  </>
)

export default Enterprise
