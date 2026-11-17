import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Ref } from 'react'
import type { Project } from '../../types/project'
import { ProjectVisual } from './ProjectVisual'
import { TagList } from '../ui/TagList'

type ProjectCardProps = {
  project: Project
  filtered: boolean
  onSelect: (project: Project) => void
  ref?: Ref<HTMLElement>
}
export function ProjectCard({
  project,
  filtered,
  onSelect,
  ref,
}: ProjectCardProps) {
  const reduced = useReducedMotion()
  return (
    <motion.article
      layout={!reduced}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.22 }}
      ref={ref}
      className={`project-card ${project.color} ${filtered ? 'filtered-card' : ''}`}
    >
      <button
        className="project-open"
        aria-label={`Explore ${project.name} project concept`}
        onClick={() => onSelect(project)}
      >
        <ProjectVisual kind={project.id} name={project.name} />
        <span className="preview-corner">
          <ArrowUpRight aria-hidden="true" size={20} />
        </span>
      </button>
      <div className="project-info">
        <div className="project-title">
          <h3>
            <a href={project.url} target="blank">
              {project.name} <ArrowUpRight aria-hidden="true" size={20} />
            </a>{' '}
          </h3>
          <span>{project.category} / Concept</span>
        </div>
        <p>{project.tagline}</p>
        <TagList tags={project.stack.slice(0, 3)} />
      </div>
    </motion.article>
  )
}
