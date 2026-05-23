import { useEffect, useRef } from 'react'
import './Services.css'

const services = [
  {
    id: 'hardware',
    category: 'Matériel',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    color: 'primary',
    title: 'Maintenance Matérielle',
    desc: 'Diagnostic complet, réparation et remplacement de tout composant informatique défaillant.',
    features: ['Diagnostic matériel complet', 'Remplacement composants', 'Nettoyage & optimisation', 'Upgrade & évolution PC', 'Récupération de données'],
    price: 'Dès 19 000 FCFA',
  },
  {
    id: 'software',
    category: 'Logiciel',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    color: 'secondary',
    title: 'Support Logiciel',
    desc: 'Installation, configuration et résolution de tous vos problèmes logiciels et système.',
    features: ["Installation d'OS (Windows/Linux)", 'Configuration logiciels métier', 'Suppression virus & malwares', 'Optimisation performances', 'Sauvegarde & restauration'],
    price: 'Dès 16 000 FCFA',
  },
  {
    id: 'network',
    category: 'Réseau',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v3M9.5 17.5l-2.5-5.5M14.5 17.5l2.5-5.5"/></svg>,
    color: 'accent',
    title: 'Réseaux & Infrastructure',
    desc: 'Mise en place, configuration et sécurisation de vos réseaux informatiques.',
    features: ['Installation réseau LAN/Wi-Fi', 'Configuration routeurs/switches', 'Mise en place VPN', 'Firewall & sécurité réseau', 'Supervision & monitoring'],
    price: 'Dès 33 000 FCFA',
  },
  {
    id: 'security',
    category: 'Sécurité',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    color: 'purple',
    title: 'Cybersécurité',
    desc: 'Protection complète de vos systèmes contre les menaces et cyberattaques.',
    features: ['Audit de sécurité', 'Antivirus professionnel', 'Chiffrement des données', 'Formation utilisateurs', 'Plan de continuité'],
    price: 'Dès 55 000 FCFA',
  },
  {
    id: 'cloud',
    category: 'Cloud',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    color: 'primary',
    title: 'Solutions Cloud',
    desc: 'Migration, configuration et gestion de vos services cloud et hébergement.',
    features: ['Migration vers le cloud', 'Configuration Microsoft 365', 'Sauvegarde cloud automatique', 'Gestion serveurs distants', 'Synchronisation données'],
    price: 'Dès 42 000 FCFA',
  },
  {
    id: 'support',
    category: 'Support',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    color: 'accent',
    title: 'Support & Assistance',
    desc: 'Assistance technique en temps réel, à distance ou sur site selon vos besoins.',
    features: ['Télémaintenance 24h/7j', 'Intervention sur site rapide', 'Contrat de maintenance', 'Helpdesk dédié', 'Rapports mensuels'],
    price: 'Dès 29 000 FCFA/mois',
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="grid-bg" />
      <div className="glow-orb svc-orb-1" />
      <div className="glow-orb svc-orb-2" />

      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Nos Prestations</span>
          <h2 className="section-title">
            Des solutions IT <span>complètes</span><br/>pour chaque besoin
          </h2>
          <p className="section-desc">
            De la maintenance matérielle au support cloud, SAHTECH couvre l'ensemble de vos besoins informatiques avec expertise et réactivité.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`service-card glass-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="svc-top">
                <span className={`badge badge-${s.color === 'purple' ? 'secondary' : s.color}`}>{s.category}</span>
                <span className="svc-price">{s.price}</span>
              </div>
              <div className={`svc-icon icon-${s.color}`}>{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <ul className="svc-features">
                {s.features.map(f => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn svc-btn btn-${s.color === 'primary' || s.color === 'purple' ? 'primary' : 'outline'}`}>
                Demander un devis
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
