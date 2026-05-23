import { useEffect, useRef } from 'react'
import './Contact.css'

const contactItems = [
  {
    title: 'Assistance 24h/7j',
    desc: 'Une équipe prête à intervenir rapidement pour vos incidents et urgences IT.',
  },
  {
    title: 'Support technique pro',
    desc: 'Maintenance, audits et support sur site ou à distance, selon vos besoins.',
  },
  {
    title: 'Réponse claire',
    desc: 'Des réponses concrètes et un suivi personnalisé pour chaque demande.',
  },
]

export default function Contact() {
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
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="glow-orb contact-orb-1" />
      <div className="glow-orb contact-orb-2" />
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Besoin d'une <span>intervention rapide</span> ?
            </h2>
            <p className="section-desc">
              SAHTECH est disponible pour tous vos besoins informatiques, de la maintenance aux interventions urgentes.
              Retrouvez nos coordonnées complètes et notre localisation dans le footer.
            </p>
          </div>

          <div className="contact-cards reveal reveal-delay-2">
            {contactItems.map((item) => (
              <div key={item.title} className="contact-card glass-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
