'use client'
import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { motion } from 'motion/react'
import { MobileAppBar } from './components'

interface NavLinkProps {
  href: string
  label: string
}

// Underline draws in from the left on hover, and recedes back out to the
// left on hover-out (rather than just fading), which reads as a more
// deliberate, tactile motion than a simple opacity fade.
const underlineVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
}

const NavLink = ({ href, label }: NavLinkProps) => (
  <motion.a
    href={href}
    initial="rest"
    whileHover="hover"
    style={{
      position: 'relative',
      display: 'inline-flex',
      textDecoration: 'none',
    }}
  >
    <Button
      component="span"
      style={{
        background: 'none',
        color: 'var(--foreground)',
      }}
    >
      {label}
    </Button>
    <motion.span
      variants={underlineVariants}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        left: '0.625rem',
        right: '0.625rem',
        bottom: '0.4rem',
        height: '2px',
        background: 'var(--foreground)',
        transformOrigin: 'left',
        pointerEvents: 'none',
      }}
    />
  </motion.a>
)

const NAV_ITEMS: NavLinkProps[] = [
  { href: '/', label: 'home' },
  { href: '/experience', label: 'experience' },
  { href: '/projects', label: 'projects' },
  { href: '/vr', label: 'vr' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
]

const AppBar = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

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
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.href} {...item} />
      ))}
    </Box>
  )
}
export default AppBar
