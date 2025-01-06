import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MobileAppBar from './components/MobileAppBar'

const AppBar = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return matches ? (
    <Box sx={{ display: 'flex' }}>
      <Button
        component="a"
        href="/"
        style={{
          background: 'none',
          color: 'var(--foreground)',
          margin: '0.625rem 0 0 0.625rem',
        }}
      >
        home
      </Button>
      <Button
        component="a"
        href="/experience"
        style={{
          background: 'none',
          color: 'var(--foreground)',
          margin: '0.625rem 0 0 0.625rem',
        }}
      >
        experience
      </Button>
      <Button
        component="a"
        href="/projects"
        style={{
          background: 'none',
          color: 'var(--foreground)',
          margin: '0.625rem 0 0 0.625rem',
        }}
      >
        projects
      </Button>
      <Button
        component="a"
        href="/about"
        style={{
          background: 'none',
          color: 'var(--foreground)',
          margin: '0.625rem 0 0 0.625rem',
        }}
      >
        about
      </Button>
      <Button
        component={'a'}
        href="/contact"
        style={{
          background: 'none',
          color: 'var(--foreground)',
          margin: '0.625rem 0 0 0.625rem',
        }}
      >
        contact
      </Button>
    </Box>
  ) : (
    <MobileAppBar />
  )
}
export default AppBar
