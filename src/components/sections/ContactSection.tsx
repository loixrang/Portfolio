import { ArrowUpRight, Check, Copy, Github, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { useClipboard } from '../../hooks/useClipboard'

export function ContactSection() {
  const { copied, copyError, copy } = useClipboard()
  const copyEmail = () => copy(profile.email)
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div>
          <span className="section-kicker">
            <span /> Start a conversation
          </span>
          <h2>
            Have something
            <br />
            in mind<span>?</span>
          </h2>
          <p>
            A product to build. A problem to solve.
            <br />
            Or just a good conversation about technology.
          </p>
        </div>
        <div className="contact-actions">
          {profile.email ? (
            <>
              <a className="contact-link" href={`mailto:${profile.email}`}>
                Let’s make it happen{' '}
                <ArrowUpRight aria-hidden="true" size={32} />
              </a>
              <div className="email-row">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button
                  className="icon-button"
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  onClick={copyEmail}
                >
                  {copied ? (
                    <Check aria-hidden="true" size={18} />
                  ) : (
                    <Copy aria-hidden="true" size={18} />
                  )}
                </button>
              </div>
              <span className="copy-status" role="status">
                {copied
                  ? 'Email copied to clipboard.'
                  : copyError
                    ? 'Could not copy. Select the email address above.'
                    : ''}
              </span>
            </>
          ) : (
            <div className="contact-pending">
              <span className="contact-symbol">
                <Mail aria-hidden="true" size={30} strokeWidth={1.3} />
              </span>
              <h3>Good things start with a hello.</h3>
              <p>Samuel’s contact details will be available here soon.</p>
              <a className="text-link" href="#stack">
                Explore the toolkit{' '}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          )}
          {(profile.github || profile.linkedin) && (
            <div className="social-links">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" size={17} />
                  GitHub
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
