import { useEffect, useRef } from 'react'
import './Contact.css'
import { contactDetails, contactHighlights } from '../data/contactData'

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
              Retrouvez nos coordonnées complètes et notre localisation ici.
            </p>

            <div className="contact-details">
              <div className="contact-meta glass-card">
                <h4>Coordonnées</h4>
                <a href={`tel:${contactDetails.phoneHref}`}>{contactDetails.phone}</a>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </div>
              <div className="contact-meta glass-card">
                <h4>Adresse & horaires</h4>
                {contactDetails.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                {contactDetails.hours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-cards reveal reveal-delay-2">
            {contactHighlights.map((item) => (
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
