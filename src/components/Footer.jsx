import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-logo">SAHTECH</p>
          <p>Solutions informatiques, maintenance et support 24h/7j pour entreprises et particuliers.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="tel:+229010000000">Tél : +229 01 XX XX XX XX</a>
          <a href="mailto:contact@sahtech.dz">Email : contact@sahtech.dz</a>
        </div>

        <div className="footer-info">
          <h4>Notre adresse</h4>
          <p>Bénin, Cotonou</p>
          <p>Saint Michel</p>
          <h4>Horaires</h4>
          <p>Lun – Sam : 8h – 20h</p>
          <p>Urgences 24h/7j</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SAHTECH — Tous droits réservés.</p>
      </div>
    </footer>
  )
}
