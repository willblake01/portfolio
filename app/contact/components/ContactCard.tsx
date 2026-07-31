import { Box, Card, CardContent, Grid2, IconButton, Typography } from '@mui/material'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import contact from '../../data/contact.json'

const SOCIAL_LINKS = [
  { href: contact.linkedInURL, label: 'LinkedIn', icon: FaLinkedin },
  { href: contact.githubURL, label: 'GitHub', icon: SiGithub },
  { href: `mailto:${contact.email}`, label: 'Email', icon: MdEmail },
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
          <Icon size={22} />
        </IconButton>
      ))}
    </Box>
  </Grid2>
)

export default ContactCard
