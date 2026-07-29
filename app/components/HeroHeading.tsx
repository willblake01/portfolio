'use client'

import { motion, type Variants } from 'motion/react'
import { Typography } from '@mui/material'

const LINE_1 = "Where there's a Will,"
const LINE_2 = "there's a way"

// How long after mount (i.e. after the avatar's wave begins, since both
// now start together) the word reveal should wait before starting. Tune
// this one value to shift the text earlier/later relative to the wave.
const WORD_REVEAL_DELAY = 2

const WORD_STAGGER = 0.15
const WORD_DURATION = 1.0
const PAUSE_BETWEEN_LINES = 0.25

// Roughly how long it takes line 1's words to finish revealing, so line 2
// can start right after — rather than both lines staggering as one
// continuous run.
const line1WordCount = LINE_1.split(' ').length
const line1FinishOffset = (line1WordCount - 1) * WORD_STAGGER + WORD_DURATION

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
  <Typography
    component={motion.h1}
    initial="hidden"
    animate="show"
    fontFamily="var(--font-finger-paint)"
    variant="h1"
  >
    <AnimatedLine text={LINE_1} delayChildren={WORD_REVEAL_DELAY} />
    <AnimatedLine
      text={LINE_2}
      delayChildren={
        WORD_REVEAL_DELAY + line1FinishOffset + PAUSE_BETWEEN_LINES
      }
    />
  </Typography>
)

export default HeroHeading
