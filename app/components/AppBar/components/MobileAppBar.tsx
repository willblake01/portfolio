'use client'
import * as React from 'react'
import { AppBar, Grid2, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { DrawerList } from '.'

const MobileAppBar = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Grid2 container sx={{ flexGrow: 1, mb: '1.5rem' }}>
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
    </Grid2>
  )
}

export default MobileAppBar
