import { Box, Card, CardContent, Grid2, IconButton, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import contact from '../../data/contact.json'

const SOCIAL_LINKS = [
  { href: contact.linkedInURL, label: 'LinkedIn', icon: LinkedInIcon },
  { href: contact.githubURL, label: 'GitHub', icon: GitHubIcon },
  { href: `mailto:${contact.email}`, label: 'Email', icon: EmailIcon },
]

const ContactCard = () => (
  <Grid2 container direction="column" alignItems="center">
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        padding: '0.5rem',
        height: 'max-content',
      }}
    >
      <CardContent>
        <Typography component="p">{`Phone: ${contact.phone}`}</Typography>
        <Typography component="p">{`Email: ${contact.email}`}</Typography>
      </CardContent>
    </Card>

    <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
      {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
        <IconButton
          key={label}
          component="a"
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          sx={{
            color: 'var(--foreground)',
            border: '1px solid',
            borderColor: 'divider',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <Icon />
        </IconButton>
      ))}
    </Box>
  </Grid2>
)

export default ContactCard
