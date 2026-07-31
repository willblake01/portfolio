'use client'

import { motion, type Variants } from 'motion/react'
import { Box } from '@mui/material'
import {
  SiReact,
  SiTypescript,
  SiMui,
  SiGraphql,
  SiExpress,
  SiNodedotjs,
} from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

const ICONS = [
  { Icon: SiReact, label: 'React' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiMui, label: 'MUI' },
  { Icon: RiNextjsFill, label: 'Next.js' },
  { Icon: SiGraphql, label: 'GraphQL' },
  { Icon: SiExpress, label: 'Express' },
  { Icon: SiNodedotjs, label: 'Node' },
]

const ICON_STAGGER = 0.08

const container = (delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: ICON_STAGGER,
      delayChildren,
    },
  },
})

const icon: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export interface TechStackProps {
  // Pass the same delay used for the subtext's own animation, plus
  // however long that takes, so this row starts right after it settles.
  startDelay?: number
}

const TechStack = ({ startDelay = 0.4 }: TechStackProps) => (
  <Box
    component={motion.div}
    variants={container(startDelay)}
    initial="hidden"
    animate="show"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2.5,
      mt: 3,
    }}
  >
    {ICONS.map(({ Icon, label }) => (
      <Box
        key={label}
        component={motion.div}
        variants={icon}
        title={label}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--foreground)',
          opacity: 0.8,
        }}
      >
        <Icon size={28} />
      </Box>
    ))}
  </Box>
)

export default TechStack
