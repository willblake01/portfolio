'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Box, Grid2 } from '@mui/material'
import NetBackground from '@/components/vanta/NetBackground'
import { AppBar } from './components'
import HeroHeading, { heroTechStackDelay } from './components/HeroHeading'
import TechStack from './components/TechStack'

const AvatarScene = dynamic(
  () => import('./components/AvatarScene').then((mod) => mod.AvatarScene),
  { ssr: false },
)

// theme.palette.mode is always 'light' in this app (no dark-mode
// ThemeProvider is wired up) — actual light/dark state comes purely from
// the CSS prefers-color-scheme media query, so detect it directly here
// rather than through MUI's theme.
const useIsDarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isDark
}

const Home = () => {
  const isDark = useIsDarkMode()

  return (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <AppBar />
    <NetBackground color={isDark ? '#ff3f81' : '#c2185b'} />
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flex: 1,
        height: '100%',
      }}
    >
      <Grid2
        container
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          height: '100%',
          flexDirection: { xs: 'column', lg: 'row' },
          flexWrap: { xs: 'wrap', lg: 'wrap' },
        }}
      >
        <Grid2
          size={{ xs: 12, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: 'max-content',
            padding: { xs: '0 1rem', lg: '1rem 2rem' },
          }}
        >
          <HeroHeading />
          <TechStack startDelay={heroTechStackDelay} />
        </Grid2>
        <Grid2
          size={{ xs: 12, lg: 4 }}
          sx={{
            display: 'flex',
            flex: { xs: 1, lg: 'unset' },
            height: { xs: 'unset', lg: '100%' },
            overflowY: { xs: 'auto', lg: 'unset' },
          }}
        >
          <AvatarScene />
        </Grid2>
      </Grid2>
    </Box>
  </Box>
  )
}

export default Home
