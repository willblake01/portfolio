'use client'
import { Typography } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

let theme = createTheme({
  typography: {
    h1: { fontFamily: 'var(--font-finger-paint)' },
    h2: { fontFamily: 'var(--font-finger-paint)' },
  },
})
theme = responsiveFontSizes(theme)

const HeroHeading = () => (
  <ThemeProvider theme={theme}>
    <Typography
      component='h1'
      variant='h1'
      sx={{ typography: { xs: 'h2', sm: 'h1' } }}
    >
      Where there&apos;s a Will, <br /> there&apos;s a way
    </Typography>
  </ThemeProvider>
)

export default HeroHeading

