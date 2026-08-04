import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import socialLinks from '../data/socialLinks'
import cepexLogo from '../assets/brand/cepex-logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="header-stack">
      <div className={`topbar ${scrolled ? 'topbar-hidden' : ''}`}>
        <div className="wrap topbar-inner">
          <div className="topbar-contact">
            <a href="mailto:contact@tunisiaexporthub.tn">contact@tunisiaexporthub.tn</a>
            <span className="sep">/</span>
            <a href="tel:+21671000000">+216 71 000 000</a>
          </div>
          <div className="topbar-social">
            {socialLinks.map(({ id, url, name, Icon }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="topbar-icon"
              >
                <Icon width={15} height={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
        <div className="wrap">
          <Link to="/" className="logo">
            <img src={cepexLogo} alt="CEPEX - Tunisia Export" className="logo-img" />
          </Link>

          <nav>
            <ul className={menuOpen ? 'open' : ''}>
              <li><Link to="/#about" onClick={closeMenu}>À propos</Link></li>
              <li><Link to="/#services" onClick={closeMenu}>Services</Link></li>
              <li><Link to="/decouvrir-la-tunisie" onClick={closeMenu}>Tunisie</Link></li>
              <li><Link to="/marketplace" onClick={closeMenu}>Marketplace</Link></li>
              <li><Link to="/success-stories" onClick={closeMenu}>Success stories</Link></li>
              <li><Link to="/gouvernance" onClick={closeMenu}>Gouvernance</Link></li>
              <li><Link to="/#actualites" onClick={closeMenu}>Actualités</Link></li>
              <li>
                <Link to="/#contact" className="btn btn-contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </div>
  )
}
