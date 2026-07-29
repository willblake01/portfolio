'use client'

import { motion, type Variants } from 'motion/react'
import { Typography } from '@mui/material'

const LINE_1 = "Where there's a Will,"
const LINE_2 = "there's a way"

const WORD_STAGGER = 0.15
const WORD_DURATION = 1.0
const PAUSE_BETWEEN_LINES = 0.25
const DELAY_AFTER_WAVE = 0.5

// Roughly how long it takes line 1's words to finish revealing, so line 2
// can start right after — rather than both lines staggering as one
// continuous run.
const line1WordCount = LINE_1.split(' ').length
const line1FinishOffset =
  (line1WordCount - 1) * WORD_STAGGER + WORD_DURATION

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: WORD_DURATION, ease: 'easeOut' },
  },
}

const lineContainer = (delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: WORD_STAGGER,
      delayChildren,
    },
  },
})

const AnimatedLine = ({
  text,
  delayChildren,
}: {
  text: string
  delayChildren: number
}) => (
  <motion.span
    variants={lineContainer(delayChildren)}
    style={{ display: 'flex', flexWrap: 'wrap' }}
  >
    {text.split(' ').map((w, i) => (
      <motion.span
        key={i}
        variants={wordVariants}
        style={{ display: 'inline-block', marginRight: '0.35ch' }}
      >
        {w}
      </motion.span>
    ))}
  </motion.span>
)

export interface HeroHeadingProps {
  // When false, the heading stays hidden and waits — set true once the
  // avatar's entrance wave completes so the two feel choreographed together.
  start: boolean
}

const HeroHeading = ({ start }: HeroHeadingProps) => (
  <Typography
    component={motion.h1}
    initial="hidden"
    animate={start ? 'show' : 'hidden'}
    fontFamily="var(--font-finger-paint)"
    variant="h1"
  >
    <AnimatedLine text={LINE_1} delayChildren={DELAY_AFTER_WAVE} />
    <AnimatedLine
      text={LINE_2}
      delayChildren={DELAY_AFTER_WAVE + line1FinishOffset + PAUSE_BETWEEN_LINES}
    />
  </Typography>
)

export default HeroHeading
