import { useEffect, useRef, useState } from 'react'
import {
  about,
  awards,
  certifications,
  contact,
  education,
  moreProjects,
  profile,
  projects,
  skills,
  stats,
  ticker,
} from './content'
import './App.css'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#lab', label: 'Lab' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  const [active, setActive] = useState('about')
  const [openProject, setOpenProject] = useState<string | null>(projects[0]?.title ?? null)
  const [progress, setProgress] = useState(0)
  const [navSolid, setNavSolid] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const ids = ['about', 'skills', 'work', 'lab', 'journey', 'contact']
    const observers: IntersectionObserver[] = []

    for (const id of ids) {
      const el = document.getElementById(id)
      if (!el) continue
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -45% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    }

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setNavSolid(window.scrollY > window.innerHeight * 0.72)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      setPointer({ x, y })
    }

    hero.addEventListener('pointermove', onMove)
    return () => hero.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="page">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className={`nav ${navSolid ? 'nav-solid' : ''}`}>
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? 'is-active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={profile.links.resume} download>
          Resume
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction" ref={heroRef}>
          <div className="hero-media" aria-hidden="true">
            <div
              className="hero-image"
              style={{
                transform: `scale(1.08) translate(${(pointer.x - 50) * -0.04}%, ${(pointer.y - 50) * -0.04}%)`,
              }}
            />
            <div
              className="hero-glow"
              style={{
                background: `radial-gradient(520px circle at ${pointer.x}% ${pointer.y}%, rgba(94,196,180,0.2), transparent 55%)`,
              }}
            />
            <div className="hero-veil" />
          </div>

          <div className="hero-content">
            <p className="hero-brand reveal-child" style={{ ['--d' as string]: '0ms' }}>
              {profile.name}
            </p>
            <h1 className="hero-title reveal-child" style={{ ['--d' as string]: '90ms' }}>
              {profile.role}
            </h1>
            <p className="hero-lede reveal-child" style={{ ['--d' as string]: '160ms' }}>
              {profile.tagline}
            </p>
            <div className="hero-actions reveal-child" style={{ ['--d' as string]: '240ms' }}>
              <a className="btn btn-primary" href="#work">
                Explore projects
              </a>
              <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-ghost" href={profile.links.resume} download>
                Download PDF
              </a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="section reveal about" id="about">
          <div className="section-inner about-grid">
            <div>
              <p className="eyebrow">Profile</p>
              <h2>{about.heading}</h2>
              <p className="about-body">{about.body}</p>
              <p className="about-meta">
                {profile.location} · {profile.availability}
              </p>
            </div>
            <div className="focus-list">
              {about.focus.map((item, index) => (
                <article
                  key={item.title}
                  className="focus-item"
                  style={{ ['--i' as string]: index }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal stats-section" aria-label="Highlights">
          <div className="section-inner stats-row">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat" style={{ ['--i' as string]: index }}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal skills" id="skills">
          <div className="section-inner">
            <p className="eyebrow">Stack</p>
            <h2>Skills</h2>
            <div className="skill-groups">
              {skills.map((group, groupIndex) => (
                <div
                  key={group.label}
                  className="skill-group"
                  style={{ ['--i' as string]: groupIndex }}
                >
                  <h3>{group.label}</h3>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal work" id="work">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Featured projects</h2>
              </div>
              <a className="text-link" href={profile.links.github} target="_blank" rel="noreferrer">
                All on GitHub →
              </a>
            </div>

            <ul className="project-list">
              {projects.map((project, index) => {
                const isOpen = openProject === project.title
                return (
                  <li
                    key={project.title}
                    className={`project ${isOpen ? 'is-open' : ''}`}
                    style={{ ['--accent' as string]: project.accent, ['--i' as string]: index }}
                  >
                    <button
                      type="button"
                      className="project-toggle"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenProject(isOpen ? null : project.title)
                      }
                    >
                      <div className="project-top">
                        <div>
                          <span className="project-index">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="project-title">{project.title}</span>
                          <span className="project-subtitle">{project.subtitle}</span>
                        </div>
                        <span className="project-chevron" aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                      <p className="project-desc">{project.description}</p>
                    </button>

                    <div className={`project-panel ${isOpen ? 'is-open' : ''}`}>
                      <ul>
                        {project.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="project-foot">
                        <p className="project-tags">{project.tags.join(' · ')}</p>
                        <a
                          className="btn btn-ink"
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View repository
                        </a>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="section reveal lab" id="lab">
          <div className="section-inner">
            <p className="eyebrow">GitHub lab</p>
            <h2>More builds</h2>
            <ul className="lab-list">
              {moreProjects.map((project, index) => (
                <li key={project.title} style={{ ['--i' as string]: index }}>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <div className="lab-top">
                      <span className="lab-title">{project.title}</span>
                      <span className="lab-arrow">↗</span>
                    </div>
                    <p>{project.description}</p>
                    <span className="lab-tags">{project.tags.join(' · ')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section reveal journey" id="journey">
          <div className="section-inner journey-grid">
            <div>
              <p className="eyebrow">Path</p>
              <h2>Education</h2>
              <ul className="timeline">
                {education.map((item) => (
                  <li key={item.title}>
                    <span className="timeline-dot" aria-hidden="true" />
                    <div>
                      <div className="meta-top">
                        <span className="meta-title">{item.title}</span>
                        <span className="meta-period">{item.period}</span>
                      </div>
                      <p className="meta-detail">{item.place}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Recognition</p>
              <h2>Awards</h2>
              <ul className="meta-list compact">
                {awards.map((item) => (
                  <li key={item.title} className="meta-item">
                    <div className="meta-top">
                      <span className="meta-title">{item.title}</span>
                      <span className="meta-period">{item.period}</span>
                    </div>
                    <p className="meta-detail">{item.detail}</p>
                  </li>
                ))}
              </ul>

              <h2 className="subhead">Certifications</h2>
              <ul className="cert-grid">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <strong>{cert.name}</strong>
                    <span>{cert.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal contact" id="contact">
          <div className="section-inner contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>{contact.heading}</h2>
            <p className="contact-body">{contact.body}</p>

            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="contact-phone" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>

            <div className="contact-links">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.links.resume} download>
                Resume PDF
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          github.com/SIDDHARTH279
        </a>
      </footer>
    </div>
  )
}
