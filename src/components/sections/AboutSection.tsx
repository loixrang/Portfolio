import { Blocks, Code2, Send, Terminal } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="about section container" id="about">
      <div className="about-visual">
        <div className="about-label">
          <Terminal aria-hidden="true" size={16} /> a little about the developer
        </div>
        <div className="monogram" aria-hidden="true">
          s<span>a</span>
          <span className="monogram-dot">.</span>
        </div>
        <div className="about-visual-bottom">
          <span>
            Samuel Akpabio
            <br />
            <small>Fullstack developer</small>
          </span>
          <Code2 aria-hidden="true" size={32} />
        </div>
        <span className="about-cross" aria-hidden="true">
          +
        </span>
      </div>
      <div className="about-copy">
        <span className="section-kicker">
          <span /> Beyond the code
        </span>
        <h2>
          Curious by nature.
          <br />
          Builder by choice.
        </h2>
        <p>
          I’m Samuel, a fullstack developer who enjoys connecting the dots
          between a good idea and a working product.
        </p>
        <p>
          My toolkit spans JavaScript, TypeScript, Java, and Kotlin. I’m
          interested in the whole journey: the interface someone touches, the
          services behind it, and the data that keeps it moving.
        </p>
        <div className="approach">
          <div>
            <Blocks aria-hidden="true" size={20} />
            <span>
              <strong>Think in systems</strong>See how the pieces fit before
              building them.
            </span>
          </div>
          <div>
            <Code2 aria-hidden="true" size={20} />
            <span>
              <strong>Care about the details</strong>Readable code. Considered
              interactions.
            </span>
          </div>
          <div>
            <Send aria-hidden="true" size={20} />
            <span>
              <strong>Build to be used</strong>Keep real people at the heart of
              the work.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
