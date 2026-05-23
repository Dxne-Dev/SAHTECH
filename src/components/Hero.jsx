import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const onMouseMove = (e) => {
      const { clientX, clientY } = e
      const { width, height, left, top } = hero.getBoundingClientRect()
      const x = ((clientX - left) / width - 0.5) * 30
      const y = ((clientY - top) / height - 0.5) * 30
      hero.style.setProperty('--mouse-x', `${x}px`)
      hero.style.setProperty('--mouse-y', `${y}px`)
    }
    hero.addEventListener('mousemove', onMouseMove)
    return () => hero.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background elements */}
      <div className="grid-bg" />
      <div className="glow-orb hero-orb-1" />
      <div className="glow-orb hero-orb-2" />
      <div className="glow-orb hero-orb-3" />

      {/* Floating tech words */}
      <div className="hero-float-words" aria-hidden="true">
        {['Python', 'Linux', 'Windows', 'TCP/IP', 'BIOS', 'SSD', 'RAM', 'Wi-Fi', 'RAID', 'VPN', 'Firewall', 'Driver'].map((w, i) => (
          <span key={w} className="float-word" style={{ '--i': i }}>{w}</span>
        ))}
      </div>

      <div className="container hero-inner">
        {/* Badge */}
        <div className="hero-badge reveal visible">
          <span className="badge badge-primary">
            <span className="badge-dot" />
            Disponible 24h/7j
          </span>
          <span className="badge badge-accent">Intervention Rapide</span>
        </div>

        {/* Heading */}
        <h1 className="hero-title reveal visible reveal-delay-1">
          <span className="hero-title-line">Votre Expert</span>
          <span className="hero-title-gradient">Maintenance IT</span>
          <span className="hero-title-line">À Votre Service</span>
        </h1>

        {/* Description */}
        <p className="hero-desc reveal visible reveal-delay-2">
          SAHTECH (Soft And Hard Technologies) assure la maintenance, le dépannage et l'optimisation
          de vos systèmes informatiques. Matériel ou logiciel — nous intervenons vite et bien.
        </p>

        {/* CTAs */}
        <div className="hero-actions reveal visible reveal-delay-3">
          <a href="#services" className="btn btn-primary hero-btn-main">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Nos Services
          </a>
          <a href="#contact" className="btn btn-outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            Devis Gratuit
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-trust reveal visible reveal-delay-4">
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Certifié & Agréé</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>+500 Interventions</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Garantie Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Hero visual panel */}
      <div className="hero-visual">
        <div className="hero-screen glass-card">
          <div className="screen-header">
            <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
            <span className="screen-title">Diagnostic Système</span>
          </div>
          <div className="screen-body">
            <div className="diag-row">
              <span className="diag-label">CPU</span>
              <div className="diag-bar"><div className="diag-fill cpu" /></div>
              <span className="diag-value ok">72%</span>
            </div>
            <div className="diag-row">
              <span className="diag-label">RAM</span>
              <div className="diag-bar"><div className="diag-fill ram" /></div>
              <span className="diag-value ok">58%</span>
            </div>
            <div className="diag-row">
              <span className="diag-label">Disque</span>
              <div className="diag-bar"><div className="diag-fill disk" /></div>
              <span className="diag-value warn">89%</span>
            </div>
            <div className="diag-row">
              <span className="diag-label">Réseau</span>
              <div className="diag-bar"><div className="diag-fill net" /></div>
              <span className="diag-value ok">Stable</span>
            </div>
            <div className="diag-log">
              <p><span className="log-ok">✔</span> Système opérationnel</p>
              <p><span className="log-warn">⚠</span> Nettoyage disque requis</p>
              <p><span className="log-ok">✔</span> Pilotes à jour</p>
              <p className="log-typing"><span className="log-info">›</span> Analyse en cours<span className="cursor-blink">_</span></p>
            </div>
          </div>
        </div>

        {/* Floating chips */}
        <div className="hero-chip chip-1 glass-card">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Sécurité Renforcée</span>
        </div>
        <div className="hero-chip chip-2 glass-card">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--clr-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Réponse &lt; 2h</span>
        </div>
        <div className="hero-chip chip-3 glass-card">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--clr-secondary)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          <span>+200 Clients</span>
        </div>
      </div>
    </section>
  )
}
