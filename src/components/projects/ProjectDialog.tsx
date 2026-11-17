import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronRight, ExternalLink, X } from 'lucide-react'
import type { Project } from '../../types/project'
import { ProjectVisual } from './ProjectVisual'
import { TagList } from '../ui/TagList'

type ProjectDialogProps = { selected: Project | null; onClose: () => void }
export function ProjectDialog({ selected, onClose }: ProjectDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!selected) {
      dialog.current?.close()
      return
    }
    dialog.current?.showModal()
    closeButton.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [selected])
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="dialog-title"
      onCancel={() => onClose()}
      onClose={() => onClose()}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {selected && (
        <div className="dialog-content">
          <button
            ref={closeButton}
            className="dialog-close icon-button"
            aria-label="Close project details"
            onClick={() => onClose()}
          >
            <X aria-hidden="true" />
          </button>
          <ProjectVisual kind={selected.id} name={selected.name} />
          <div className="dialog-copy">
            <span className="section-kicker">
              {selected.category} · Illustrative concept
            </span>
            <h2 id="dialog-title">{selected.name}</h2>
            <p>{selected.description}</p>
            <h3>The idea</h3>
            <ul>
              {selected.features.map((feature) => (
                <li key={feature}>
                  <ChevronRight aria-hidden="true" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <TagList tags={selected.stack} />
            <p className="dialog-note">
              <ExternalLink aria-hidden="true" size={16} />
              This is a portfolio layout concept, not a shipped product. Live
              demos and source links will appear with verified projects.
            </p>
            <button className="button primary" onClick={() => onClose()}>
              Back to projects <ArrowRight aria-hidden="true" size={17} />
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
