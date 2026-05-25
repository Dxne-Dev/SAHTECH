import './Footer.css'
import { contactDetails } from '../data/contactData'

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
          <a href={`tel:${contactDetails.phoneHref}`}>Tél : {contactDetails.phone}</a>
          <a href={`mailto:${contactDetails.email}`}>Email : {contactDetails.email}</a>
        </div>

        <div className="footer-info">
          <h4>Notre adresse</h4>
          {contactDetails.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <h4>Horaires</h4>
          {contactDetails.hours.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SAHTECH — Tous droits réservés.</p>
      </div>
    </footer>
  )
}
