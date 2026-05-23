import { useEffect, useRef } from 'react'
import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Prise de Contact',
    desc: 'Vous nous contactez par téléphone, email ou via notre formulaire. Nous vous répondons en moins de 2 heures.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>,
    color: 'primary',
  },
  {
    num: '02',
    title: 'Diagnostic',
    desc: 'Notre technicien analyse votre problème en détail — à distance ou sur site — pour établir un diagnostic précis.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    color: 'secondary',
  },
  {
    num: '03',
    title: 'Devis Gratuit',
    desc: 'Vous recevez un devis clair et transparent, sans surprise. Vous approuvez avant toute intervention.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    color: 'accent',
  },
  {
    num: '04',
    title: 'Intervention',
    desc: 'Nos techniciens certifiés interviennent rapidement et efficacement pour résoudre votre problème.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    color: 'primary',
  },
  {
    num: '05',
    title: 'Validation & Suivi',
    desc: 'Vous validez le travail effectué. Nous assurons un suivi post-intervention et restons disponibles.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    color: 'accent',
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="section process" ref={sectionRef}>
      <div className="glow-orb proc-orb" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Notre Méthode</span>
          <h2 className="section-title">
            Un processus <span>simple</span><br/>et efficace
          </h2>
          <p className="section-desc">
            De votre premier contact à la résolution complète, nous vous accompagnons à chaque étape avec transparence et professionnalisme.
          </p>
        </div>

        <div className="process-track">
          <div className="process-line" />
          {steps.map((s, i) => (
            <div key={s.num} className={`process-step reveal reveal-delay-${(i % 3) + 1}`}>
              <div className={`step-connector color-${s.color}`}>
                <div className={`step-num-wrap color-${s.color}`}>
                  <span className="step-num">{s.num}</span>
                </div>
              </div>
              <div className={`step-card glass-card`}>
                <div className={`step-icon icon-${s.color}`}>{s.icon}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                <div className={`step-tag badge badge-${s.color === 'primary' ? 'primary' : s.color === 'secondary' ? 'secondary' : 'accent'}`}>
                  Étape {s.num}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
