'use client'
import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { MobileAppBar } from './components'

const AppBar = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const buttonStyle = {
    background: 'none',
    color: 'var(--foreground)',
  }

  return mobile ? (
    <MobileAppBar />
  ) : (
    <Box
      data-appbar
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.625rem',
        pl: '0.625rem',
        height: '4rem',
      }}
    >
      <Button component="a" href="/" style={buttonStyle}>
        home
      </Button>
      <Button component="a" href="/experience" style={buttonStyle}>
        experience
      </Button>
      <Button component="a" href="/projects" style={buttonStyle}>
        projects
      </Button>
      <Button component="a" href="/vr" style={buttonStyle}>
        vr
      </Button>
      <Button component="a" href="/about" style={buttonStyle}>
        about
      </Button>
      <Button component="a" href="/contact" style={buttonStyle}>
        contact
      </Button>
    </Box>
  )
}
export default AppBar
