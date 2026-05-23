import { useEffect, useRef, useState } from 'react'
import './Pricing.css'

const plans = [
  {
    id: 'basic',
    name: 'Essentiel',
    price: '25 000',
    period: '/intervention',
    desc: 'Idéal pour les particuliers et les besoins ponctuels.',
    color: 'primary',
    features: [
      { text: 'Diagnostic complet', included: true },
      { text: 'Dépannage logiciel de base', included: true },
      { text: 'Nettoyage & optimisation', included: true },
      { text: 'Installation OS', included: true },
      { text: 'Intervention sur site', included: false },
      { text: 'Support prioritaire', included: false },
      { text: 'Rapport d\'intervention', included: false },
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Professionnel',
    price: '95 000',
    period: '/mois',
    desc: 'Pour les TPE/PME qui ont besoin de disponibilité continue.',
    color: 'secondary',
    features: [
      { text: 'Tout du plan Essentiel', included: true },
      { text: 'Intervention sur site', included: true },
      { text: 'Support prioritaire 24h/7j', included: true },
      { text: 'Maintenance préventive', included: true },
      { text: 'Gestion réseau & sécurité', included: true },
      { text: 'Rapport mensuel détaillé', included: true },
      { text: 'Gestionnaire dédié', included: false },
    ],
    cta: 'Choisir ce plan',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Entreprise',
    price: '240 000',
    period: '/mois',
    desc: 'Solution complète pour les structures de taille importante.',
    color: 'accent',
    features: [
      { text: 'Tout du plan Professionnel', included: true },
      { text: 'Gestionnaire dédié', included: true },
      { text: 'SLA garanti (< 1h)', included: true },
      { text: 'Audit de sécurité annuel', included: true },
      { text: 'Formation des équipes', included: true },
      { text: 'Migration cloud incluse', included: true },
      { text: 'Contrat sur mesure', included: true },
    ],
    cta: 'Nous contacter',
    popular: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)
  const [yearly, setYearly] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const getPrice = (p) => {
    if (p === '25 000') return yearly ? '20 000' : '25 000'
    if (p === '95 000') return yearly ? '76 000' : '95 000'
    if (p === '240 000') return yearly ? '192 000' : '240 000'
    return p
  }

  return (
    <section id="pricing" className="section pricing" ref={sectionRef}>
      <div className="grid-bg" />
      <div className="glow-orb pricing-orb" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Tarification</span>
          <h2 className="section-title">
            Des tarifs <span>transparents</span><br/>sans mauvaise surprise
          </h2>
          <p className="section-desc">
            Choisissez la formule adaptée à vos besoins. Tous nos tarifs sont clairs et sans frais cachés.
          </p>

          <div className="billing-toggle reveal">
            <span className={!yearly ? 'active' : ''}>Mensuel</span>
            <button
              className={`toggle-btn ${yearly ? 'yearly' : ''}`}
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle billing period"
            >
              <span className="toggle-knob" />
            </button>
            <span className={yearly ? 'active' : ''}>
              Annuel
              <span className="badge badge-accent save-badge">-20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`pricing-card glass-card reveal reveal-delay-${i + 1} ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">⭐ Le plus populaire</div>
              )}
              <div className={`pricing-top color-${plan.color}`}>
                <p className="plan-name">{plan.name}</p>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price">
                  <span className="price-currency">Dès</span>
                  <span className="price-num">{getPrice(plan.price)}</span>
                  <span className="price-currency">FCFA</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f.text} className={f.included ? 'included' : 'excluded'}>
                    {f.included
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--clr-text-dim)" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    }
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} plan-cta`}
              >
                {plan.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--clr-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Besoin d'une solution sur mesure ? <a href="#contact">Contactez-nous</a> pour un devis personnalisé gratuit.
        </p>
      </div>
    </section>
  )
}
