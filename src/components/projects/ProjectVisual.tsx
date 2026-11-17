import craftlinkPreview from './previews/craftlink.png'
import everybuyPreview from './previews/everybuy.png'
import loixrangBankPreview from './previews/loixrang-bank.png'

const previews: Record<string, string> = {
  craftlink: craftlinkPreview,
  everybuy: everybuyPreview,
  'loixrang-bank': loixrangBankPreview,
}

type ProjectVisualProps = {
  kind: string
  name?: string
}

export function ProjectVisual({ kind, name }: ProjectVisualProps) {
  const src = previews[kind]
  if (!src) {
    return <div className="project-art">Project preview coming soon</div>
  }
  return (
    <div className="project-art project-shot">
      <img src={src} alt={name ? `${name} preview` : 'Project preview'} />
    </div>
  )
}
