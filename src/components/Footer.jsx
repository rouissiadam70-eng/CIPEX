import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import socialLinks from '../data/socialLinks'
import cepexLogo from '../assets/brand/cepex-logo.png'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link to="/" className="logo footer-logo">
              <img src={cepexLogo} alt="CEPEX - Tunisia Export" className="logo-img" />
            </Link>
            <p>Centre d'appui aux entreprises tunisiennes pour leur développement à l'international.</p>
            <div className="footer-social">
              {socialLinks.map(({ id, url, name, Icon }) => (
                <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="footer-social-icon">
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link to="/#about">À propos</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/decouvrir-la-tunisie">Découvrir la Tunisie</Link></li>
              <li><Link to="/gouvernance">Gouvernance</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Ressources</h5>
            <ul>
              <li><Link to="/marketplace">Marketplace B2B</Link></li>
              <li><Link to="/success-stories">Success stories</Link></li>
              <li><Link to="/#actualites">Actualités</Link></li>
              <li><Link to="/#secteurs">Filières</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>Centre Urbain Nord, Tunis</li>
              <li>+216 71 000 000</li>
              <li>contact@tunisiaexporthub.tn</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Tunisia Export Hub. Site de démonstration.</span>
          <span>Conçu &amp; construit avec Claude</span>
        </div>
      </div>

      <button
        className={`back-to-top ${showTop ? 'show' : ''}`}
        onClick={scrollTop}
        aria-label="Retour en haut de la page"
      >
        ↑
      </button>
    </footer>
  )
}
