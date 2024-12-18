import { Box, Card, CardContent, CardHeader, List, ListItem, Typography } from '@mui/material';
import AppBar from '../components/AppBar';

const Experience = () => (
  <>
    <AppBar />
    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ marginBottom: '40px' }} component={'h2'} variant={'h1'}>Experience</Typography>
      <Box sx={{ justifyContent: 'space-around', display: 'flex', padding: '20px', width: '100%' }}>
        <Card sx={{ borderRadius: 2, color: 'text.secondary', padding: '10px', textAlign: 'center', width: '520px' }}>
          <CardHeader title='Spectrum Trail Racing' sx={{ textAlign: 'center' }} />
            <CardContent>
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  Worked under Senior Engineer on Ruby on Rails application utilizing Pivotal Tracker, Haml, Sass, Postgres, Redis, RSpec, Codeship, Heroku, AWS
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Effectively translated client requirements into application designs and system requirements utilizing Scrum framework
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Planned, developed, tested, deployed, and maintained new features from Agile product backlog
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Stabilized application by taking test coverage from 9.22% to 54.49%
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Worked well independently and remotely within a team setting using Slack, Pivotal Tracker, and Google Meet
                </ListItem>
              </List>
            </CardContent>
        </Card>
        <Card sx={{ borderRadius: 2, color: 'text.secondary', padding: '10px', textAlign: 'center', width: '520px' }}>
          <CardHeader title='Under Armour' sx={{ textAlign: 'center' }} />
          <CardContent>
            <List sx={{ listStyleType: 'disc' }}>
              <ListItem sx={{ display: 'list-item' }}>
                Started on an internal tools team and quickly moved up the engineering ladder to work on MapMy Run (10M user base) and Seabiscuit mobile speed team building a GraphQL, Typescript, and NextJS frontend for the e-commerce shopping application focusing on performance
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Primary developer and Product Owner for Jackfruit challenges admin tool
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Created NPM package with unit conversion tables for duration, distance, and time to be used across suite of applications
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Excelled in identifying elegant codebase refactors resulting in faster programs with less lines of code
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Implemented test driven development to maintain clean and manageable code, unit testing with Jest
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Worked with QA and support teammates to diagnose and fix bugs
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 2, color: 'text.secondary', padding: '10px', textAlign: 'center', width: '520px' }}>
          <CardHeader title='Unity' sx={{ textAlign: 'center' }} />
          <CardContent>
            <List sx={{ listStyleType: 'disc' }}>
              <ListItem sx={{ display: 'list-item' }}>
                Created TDDs, contributed to PRDs, and drove for alignment to ensure successful completion of team initiatives
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Developed features in admin protected segments of Unity Services Dashboard in agile scrums with product manager for OneCommerce initiative
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Migrated components from Unity One (MUI 4 base) component library to Cloud Foundation design system (MUI 5 base) Storybook components
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Refactored notifications service and email templates to support OneCommerce Unity Cloud launch
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Completed Unity Leadership training and was a Unity “Certified Interviewer” heavily involved in the intern program
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  </>
)

export default Experience
