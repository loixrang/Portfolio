import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import type { Project } from '../../types/project'
import { projects } from '../../data/projects'
import { categories } from '../../data/projectCategories'
import { useProjectFilter } from '../../hooks/useProjectFilter'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectDialog } from '../projects/ProjectDialog'

export function WorkSection() {
  const { filter, changeFilter } = useProjectFilter()
  const [selected, setSelected] = useState<Project | null>(null)
  const reduced = useReducedMotion()
  const shownProjects = projects.filter(
    (project) => filter === 'All projects' || project.category === filter,
  )
  return (
    <>
      <section className="work section container" id="work">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span /> The project shelf
            </span>
            <h2>Built with purpose.</h2>
          </div>
          <p>
            A few ways ideas can become useful software.
            <br />
            From what you see to what makes it work.
          </p>
        </div>
        <div className="work-toolbar">
          <div className="filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? 'chosen' : ''}
                aria-pressed={filter === category}
                onClick={() => changeFilter(category)}
              >
                {category}
                {category === 'All projects' && (
                  <span>{String(projects.length).padStart(2, '0')}</span>
                )}
              </button>
            ))}
          </div>
          <span className="concept-note">Illustrative project concepts</span>
        </div>
        <motion.div layout={!reduced} className="project-grid">
          <AnimatePresence mode="popLayout">
            {shownProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                filtered={filter !== 'All projects'}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="work-footnote" aria-live="polite">
          {shownProjects.length}{' '}
          {shownProjects.length === 1 ? 'concept' : 'concepts'} on the shelf.
          Real project case studies coming soon.
        </p>
      </section>
      <ProjectDialog selected={selected} onClose={() => setSelected(null)} />
    </>
  )
}
