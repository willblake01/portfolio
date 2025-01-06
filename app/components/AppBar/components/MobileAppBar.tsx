'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DrawerList from './DrawerList'

const MobileAppBar = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <DrawerList open={open} toggleDrawer={toggleDrawer} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MobileAppBar
