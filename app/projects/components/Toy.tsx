import { Box, Card, CardActionArea, CardHeader, CardMedia, List, ListItem, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

const Toy = () => (
  <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <ListItem>
        <Card sx={{ borderRadius: 2, width: '440px' }}>
          <CardActionArea href='https://train-time-i1818sb62-will-blakes-projects.vercel.app' target='_blank'>
            <CardMedia
              sx={{ height: 140 }}
              image='https://res.cloudinary.com/willblake01/image/upload/v1734560561/train-time.png'
              title='simpsons memory challenge'
            />
            <CardHeader title='Train Time' subheader='Train scheduler I built as a companion when I play Trainz 2019' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: Next, React, Typescript</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ListItem>
      <ListItem>
        <Card sx={{ borderRadius: 2,  width: '440px' }}>
          <CardActionArea href='https://willblake01.github.io/simpsons-memory-challenge' target='_blank'>
            <CardMedia
              sx={{
                height: 140 }}
              image='https://res.cloudinary.com/willblake01/image/upload/v1733191086/simpsons-memory-game.png'
              title='simpsons memory challenge'
            />
            <CardHeader title='Simpsons Memory Challenge' subheader='Memory challenge game to see how many Simpsons characters you can name' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: Next, React, Typescript, MaterialUI</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ListItem>
      <ListItem>
        <Card sx={{ borderRadius: 2,  width: '440px' }}>
          <CardActionArea href='https://willblake01.github.io/simpsons-memory-challenge' target='_blank'>
            <CardMedia
            sx={{ height: 140 }}
            image='https://res.cloudinary.com/willblake01/image/upload/v1538510166/react-portfolio/range-front.png'
            title='simpsons memory challenge'
          />
            <CardHeader title='Range Front' subheader='Faux eCommerce app similar to rei.com' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ color: 'text.secondary', textAlign: 'left' }}>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>Item 1</ListItem>
              </List>
              <Typography component='div'>Technologies used: Next, React, Typescript, GraphQL, Apollo, Prisma</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ListItem>
    </Box>
  </>
)

export default Toy
