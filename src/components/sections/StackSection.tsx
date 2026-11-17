import { GitBranch } from 'lucide-react'
import { techGroups } from '../../data/technologies'

export function StackSection() {
  return (
    <section className="stack-section section" id="stack">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span /> My toolkit
            </span>
            <h2>
              The right tools.
              <br />
              The whole stack.
            </h2>
          </div>
          <p>
            Different problems call for different tools.
            <br />
            Here’s what I bring to the workbench.
          </p>
        </div>
        <div className="technology-list">
          {techGroups.map(({ title, description, icon: Icon, tech }) => (
            <div className="technology-row" key={title}>
              <div className="technology-title">
                <span className="category-icon">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
              <div className="technology-chips">
                {tech.map(({ name, Icon: TechIcon }) => (
                  <span key={name}>
                    <TechIcon aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="stack-footnote">
          <GitBranch aria-hidden="true" size={16} />
          <span>
            From <code>git init</code> to production.
          </span>
          <span>Built thoughtfully. Shipped deliberately.</span>
        </div>
      </div>
    </section>
  )
}
