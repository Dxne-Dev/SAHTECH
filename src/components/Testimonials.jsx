import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Mohamed Benali',
    role: 'Gérant, Benali Consulting',
    avatar: 'MB',
    color: 'primary',
    rating: 5,
    text: 'SAHTECH a remis sur pied tout notre parc informatique en un temps record. Intervention propre, rapide et professionnelle. Je recommande vivement !',
  },
  {
    name: 'Fatima Khelil',
    role: 'Directrice RH, TechPro SARL',
    avatar: 'FK',
    color: 'secondary',
    rating: 5,
    text: 'Service impeccable ! La mise en place du réseau local et de la sécurité Wi-Fi a été faite avec beaucoup de soin. Équipe très compétente et disponible.',
  },
  {
    name: 'Karim Ouadah',
    role: 'Responsable IT, LogiSud',
    avatar: 'KO',
    color: 'accent',
    rating: 5,
    text: "Contrat de maintenance depuis 2 ans, zéro faux pas. Toujours disponibles, les interventions sont efficaces. C'est rassurant d'avoir SAHTECH comme partenaire.",
  },
  {
    name: 'Amina Bouras',
    role: 'Architecte, Studio AB',
    avatar: 'AB',
    color: 'primary',
    rating: 5,
    text: 'Mon ordinateur de travail était totalement planté. SAHTECH l\'a récupéré en moins de 48h avec toutes mes données intactes. Merci infiniment !',
  },
  {
    name: 'Samy Larbi',
    role: 'Entrepreneur, E-shop Larbi',
    avatar: 'SL',
    color: 'secondary',
    rating: 5,
    text: 'Migration vers le cloud réalisée sans interruption d\'activité. L\'équipe SAHTECH est vraiment professionnelle. Site e-commerce en ligne 24/7 depuis !',
  },
  {
    name: 'Nadia Hamidi',
    role: 'Comptable, Cabinet NH',
    avatar: 'NH',
    color: 'accent',
    rating: 5,
    text: 'Installation et configuration complète de nos postes de travail. Tout fonctionne parfaitement. Prix très raisonnables pour la qualité du service rendu.',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 3) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="section testimonials" ref={sectionRef}>
      <div className="glow-orb test-orb" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Témoignages</span>
          <h2 className="section-title">
            Ce que disent <span>nos clients</span>
          </h2>
          <p className="section-desc">
            La satisfaction de nos clients est notre priorité absolue. Voici quelques témoignages de nos partenaires.
          </p>
        </div>

        <div className="testimonials-grid reveal">
          {visible.map((t, i) => (
            <div key={t.name + i} className="testimonial-card glass-card">
              <div className="tcard-top">
                <div className={`tcard-avatar avatar-${t.color}`}>{t.avatar}</div>
                <div>
                  <p className="tcard-name">{t.name}</p>
                  <p className="tcard-role">{t.role}</p>
                </div>
                <div className="tcard-quote">"</div>
              </div>
              <div className="tcard-stars">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="var(--clr-primary)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="tcard-text">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="tcard-dots reveal">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
            <button
              key={i}
              className={`tcard-dot ${Math.floor(current / 3) === i ? 'active' : ''}`}
              onClick={() => setCurrent(i * 3)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
