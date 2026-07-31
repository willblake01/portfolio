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
import {
  MdHome,
  MdChecklist,
  MdContactMail,
  MdInfo,
  MdDashboard,
  MdViewInAr,
} from 'react-icons/md'

interface DrawerListProps {
  open: boolean
  toggleDrawer: (open: boolean) => () => void
}

const drawerOptions = [
  { id: 1, text: 'Home', icon: <MdHome size={24} />, route: '/' },
  { id: 2, text: 'Experience', icon: <MdChecklist size={24} />, route: '/experience' },
  { id: 3, text: 'Projects', icon: <MdDashboard size={24} />, route: '/projects' },
  { id: 4, text: 'VR', icon: <MdViewInAr size={24} />, route: '/vr' },
  { id: 5, text: 'About', icon: <MdInfo size={24} />, route: '/about' },
  { id: 6, text: 'Contact', icon: <MdContactMail size={24} />, route: '/contact' },
]

const DrawerList: React.FC<DrawerListProps> = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerOptions.map((section) => (
          <Link
            color="inherit"
            href={section.route}
            key={section.id}
            underline="none"
          >
            <ListItem key={section.id} disablePadding>
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
