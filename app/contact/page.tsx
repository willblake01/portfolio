'use client'

import { motion } from 'motion/react'
import { Box, Grid2 } from '@mui/material'
import { AppBar, PageHeader } from '../components'
import { ContactCard } from './components'

const Contact = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <AppBar />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <PageHeader title="Contact" />
      <Grid2
        container
        sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <ContactCard />
        </motion.div>
      </Grid2>
    </Box>
  </Box>
)

export default Contact
