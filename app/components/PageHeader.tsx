import { ThemeProvider, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Grid2 } from '@mui/material'

interface PageHeaderProps {
  title: string
}

let theme = createTheme()
theme = responsiveFontSizes(theme)

const PageHeader = ({ title }: PageHeaderProps) => (
  <Grid2
    container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mb: '2.5rem',
    }}
  >
    <ThemeProvider theme={theme}>
      <Typography
        component={'h2'}
        dangerouslySetInnerHTML={{ __html: title }}
        fontFamily="FingerPaint"
        variant={'h1'}
      />
    </ThemeProvider>
  </Grid2>
)

export default PageHeader
