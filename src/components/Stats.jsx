import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 500, suffix: '+', label: 'Interventions réalisées', icon: '🔧' },
  { value: 98, suffix: '%', label: 'Clients satisfaits', icon: '⭐' },
  { value: 10, suffix: 'ans', label: "D'expérience", icon: '📅' },
  { value: 24, suffix: '/7', label: 'Support disponible', icon: '🕐' },
]

function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span className="stat-number">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats-glow" />
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-item reveal ${active ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="stat-emoji">{s.icon}</span>
              <Counter target={s.value} suffix={s.suffix} active={active} />
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
