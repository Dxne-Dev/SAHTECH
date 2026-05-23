import { useEffect, useRef } from 'react'
import './About.css'

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Maintenance Matérielle',
    desc: 'Diagnostic, réparation et remplacement de composants : cartes mères, alimentations, disques durs, mémoire RAM et plus.',
    color: 'primary',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Support Logiciel',
    desc: 'Installation, configuration et dépannage de systèmes d\'exploitation, logiciels métiers et applications professionnelles.',
    color: 'secondary',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Sécurité & Réseaux',
    desc: 'Mise en place et sécurisation de vos réseaux locaux, Wi-Fi, VPN et protection contre les cybermenaces.',
    color: 'accent',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="glow-orb about-orb" />
      <div className="container">
        <div className="about-grid">
          {/* Left visual */}
          <div className="about-visual reveal">
            <div className="about-img-wrap">
              <div className="about-badge-float glass-card">
                <div className="abf-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--clr-primary)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <p className="abf-num">98%</p>
                  <p className="abf-label">Taux de satisfaction</p>
                </div>
              </div>
              <div className="about-badge-float2 glass-card">
                <div className="abf-icon accent">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="abf-num accent">10+</p>
                  <p className="abf-label">Ans d'expérience</p>
                </div>
              </div>
              <div className="about-card-main glass-card">
                <div className="acm-row">
                  <span className="acm-dot primary" />
                  <span className="acm-label">Soft (Logiciel)</span>
                  <span className="acm-pct">60%</span>
                </div>
                <div className="acm-bar"><div className="acm-fill primary" /></div>
                <div className="acm-row" style={{marginTop: '16px'}}>
                  <span className="acm-dot secondary" />
                  <span className="acm-label">Hard (Matériel)</span>
                  <span className="acm-pct">40%</span>
                </div>
                <div className="acm-bar"><div className="acm-fill secondary" /></div>
                <p className="acm-footer">Double expertise complète</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="about-content">
            <div className="reveal">
              <span className="section-label">À Propos de Nous</span>
              <h2 className="section-title">
                L'expertise <span>SOFT & HARD</span><br/>au service de votre IT
              </h2>
              <p className="section-desc">
                Fondée avec la vision d'offrir une maintenance informatique complète et fiable,
                SAHTECH combine une expertise matérielle (hardware) et logicielle (software) unique.
                Nous intervenons chez les particuliers, TPE, PME et grandes entreprises.
              </p>
            </div>

            <div className="about-pillars">
              {pillars.map((p, i) => (
                <div key={p.title} className={`pillar-card glass-card reveal reveal-delay-${i + 1}`}>
                  <div className={`pillar-icon icon-${p.color}`}>{p.icon}</div>
                  <div>
                    <h3 className="pillar-title">{p.title}</h3>
                    <p className="pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4">
              <a href="#services" className="btn btn-primary">
                Découvrir tous nos services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
