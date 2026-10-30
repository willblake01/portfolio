'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { SiGithub } from 'react-icons/si'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import type { ContributionItem, Project } from '../types'

interface ProjectCardProps {
  project: Project
}

const ContributionList = ({
  items,
  dense = false,
}: {
  items: ContributionItem[]
  dense?: boolean
}) => (
  <List
    sx={{
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
      paddingY: dense ? 0 : '1rem',
    }}
  >
    {items.map((item) => (
      <ListItem
        key={item.id}
        sx={{ display: 'list-item', paddingY: dense ? '0.15rem' : undefined }}
      >
        {item.label && (
          <Box component="strong" sx={{ color: 'text.primary' }}>
            {item.label}:{' '}
          </Box>
        )}
        {item.text}
      </ListItem>
    ))}
  </List>
)

const Contributions = ({ project }: ProjectCardProps) => {
  if (project.sections?.length) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          flexGrow: 1,
          paddingY: '0.5rem',
        }}
      >
        {project.sections.map((section) => (
          <Box key={section.title}>
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                marginBottom: '0.25rem',
              }}
            >
              {section.title}
            </Typography>
            <ContributionList items={section.items} dense />
          </Box>
        ))}
      </Box>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ContributionList items={project.contributions ?? []} />
    </Box>
  )
}

const CardBody = ({ project }: ProjectCardProps) => (
  <>
    <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 600px) 100vw, 512px"
        style={{ objectFit: 'cover' }}
      />
    </Box>
    <CardHeader
      title={project.title}
      subheader={project.description}
      slotProps={{
        title: {
          sx: { textAlign: 'center', marginBottom: '0.5rem' },
        },
        subheader: {
          sx: { textAlign: 'left' },
        },
      }}
      sx={{ paddingBottom: '0.5rem' }}
    />
    <CardContent
      sx={{
        color: 'text.secondary',
        paddingTop: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <Contributions project={project} />
      <Typography
        component="div"
        sx={{ marginTop: 'auto', paddingTop: '1rem' }}
      >
        Technologies: <i>{project.technologies.join(', ')}</i>
      </Typography>
    </CardContent>
  </>
)

const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-15% 0px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        width: '30rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {project.url ? (
        <CardActionArea
          component="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardBody project={project} />
        </CardActionArea>
      ) : (
        <CardBody project={project} />
      )}

      {(project?.apk || project?.gitHub) && (
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 'auto',
            gap: 2,
          }}
        >
          {project?.apk && (
            <a
              href={project.apk}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download .apk file
            </a>
          )}
          {project?.gitHub && (
            <IconButton
              component="a"
              href={project.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <SiGithub size={22} />
            </IconButton>
          )}
        </CardActions>
      )}
    </Card>
  </motion.div>
)

export default ProjectCard
