'use client'

import { motion, type Variants } from 'motion/react'
import { Box, Typography } from '@mui/material'

const LINE_1 = "Where there's a Will,"
const LINE_2 = "there's a way"
const SUBTEXT =
  'Full-stack engineer building real-time interfaces, 3D, and performance-focused web experiences'

// How long after mount (i.e. after the avatar's wave begins, since both
// now start together) the word reveal should wait before starting. Tune
// this one value to shift the text earlier/later relative to the wave.
const WORD_REVEAL_DELAY = 3

const WORD_STAGGER = 0.2
const WORD_DURATION = 2.0
const PAUSE_BETWEEN_LINES = 0
const SUBTEXT_PAUSE = 0.3

// Roughly how long it takes line 1's words to finish revealing, so line 2
// can start right after — rather than both lines staggering as one
// continuous run.
const line1WordCount = LINE_1.split(' ').length
const line1FinishOffset = (line1WordCount - 1) * WORD_STAGGER + WORD_DURATION

const line2WordCount = LINE_2.split(' ').length
const line2FinishOffset = (line2WordCount - 1) * WORD_STAGGER + WORD_DURATION

const line2StartDelay =
  WORD_REVEAL_DELAY + line1FinishOffset + PAUSE_BETWEEN_LINES

const subtextDelay = line2StartDelay + line2FinishOffset + SUBTEXT_PAUSE
const SUBTEXT_DURATION = 0.6
const TECH_STACK_BREATHER = 0.3

// Exported so sibling components (e.g. the tech-stack row rendered
// alongside this heading) can start right after the subtext finishes,
// without duplicating or guessing at these timing constants themselves.
export const heroTechStackDelay =
  subtextDelay + SUBTEXT_DURATION + TECH_STACK_BREATHER

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

// Starts revealing on its own as soon as it mounts — no longer waits on a
// signal from the avatar's wave animation, since both now begin together
// at page load. Use WORD_REVEAL_DELAY to shift the text's start time
// relative to that shared moment.
interface HeroHeadingProps {
  start?: boolean
}

const HeroHeading = ({ start }: HeroHeadingProps) => (
  <Box>
    <Typography
      component={motion.h1}
      initial="hidden"
      animate="show"
      fontFamily="var(--font-finger-paint)"
      variant="h1"
    >
      <AnimatedLine text={LINE_1} delayChildren={WORD_REVEAL_DELAY} />
      <AnimatedLine text={LINE_2} delayChildren={line2StartDelay} />
    </Typography>
    <Typography
      component={motion.p}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: SUBTEXT_DURATION, ease: 'easeOut', delay: subtextDelay }}
      variant="body1"
      sx={{ mt: 4, color: 'var(--foreground)', opacity: 0.75 }}
    >
      {SUBTEXT}
    </Typography>
  </Box>
)

export default HeroHeading
