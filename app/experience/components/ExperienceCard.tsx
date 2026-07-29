'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import type { Job } from '../../types'

interface ExperienceCardProps {
  job: Job
}

const ExperienceCard = ({ job }: ExperienceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-15% 0px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        color: 'text.secondary',
        width: '32.5rem',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
        <Image
          src={job.image}
          alt={job.title}
          fill
          sizes="(max-width: 600px) 100vw, 520px"
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <CardHeader title={job.team} sx={{ textAlign: 'center' }} />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <List
          sx={{
            listStyleType: 'disc',
            padding: '1rem',
            flexGrow: 1,
          }}
        >
          {job.responsibilities.map((responsibility) => (
            <ListItem key={responsibility.id} sx={{ display: 'list-item' }}>
              {responsibility.text}
            </ListItem>
          ))}
        </List>
        <Box sx={{ marginTop: 'auto' }}>
          <Typography component="div">
            Tech environment: <i>{job.technologies.join(', ')}</i>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </motion.div>
)

export default ExperienceCard
