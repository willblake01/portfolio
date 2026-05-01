'use client'
import { ThemeProvider, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Grid2 } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

interface PageHeaderProps {
  title: string
  sx?: SxProps<Theme>
}

let theme = createTheme()
theme = responsiveFontSizes(theme)

const PageHeader = ({ title, sx }: PageHeaderProps) => (
  <Grid2
    container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mb: '2.5rem',
      ...sx,
    }}
  >
    <ThemeProvider theme={theme}>
      <Typography
        component={'h2'}
        dangerouslySetInnerHTML={{ __html: title }}
        fontFamily='var(--font-finger-paint)'
        variant={'h1'}
      />
    </ThemeProvider>
  </Grid2>
)

export default PageHeader
