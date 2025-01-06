import * as React from 'react'
import Box from '@mui/material/Box'
import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ChecklistIcon from '@mui/icons-material/Checklist'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import InfoIcon from '@mui/icons-material/Info'
import DashboardIcon from '@mui/icons-material/Dashboard'

interface DrawerListProps {
  open: boolean
  toggleDrawer: (open: boolean) => () => void
}

const drawerOptions = [
  { text: 'Home', icon: <HomeIcon />, route: '/' },
  { text: 'Experience', icon: <ChecklistIcon />, route: '/experience' },
  { text: 'Projects', icon: <DashboardIcon />, route: '/projects' },
  { text: 'About', icon: <InfoIcon />, route: '/about' },
  { text: 'Contact', icon: <ContactMailIcon />, route: '/contact' },
]

const DrawerList: React.FC<DrawerListProps> = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerOptions.map((section, index) => (
          <Link
            color="inherit"
            href={section.route}
            key={section.text}
            underline="none"
          >
            <ListItem key={section.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default DrawerList
