import { Grid2, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MobileAppBar from './components/MobileAppBar'

const AppBar = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return mobile ? (
    <MobileAppBar />
  ) : (
    <Grid2 container sx={{ display: 'flex', mb: '2.5rem' }}>
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
    </Grid2>
  )
}
export default AppBar
