import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function MarketplaceTeaser() {
  return (
    <section className="marketplace-teaser">
      <div className="wrap marketplace-grid">
        <Reveal className="marketplace-copy">
          <div className="eyebrow eyebrow-light">Nouveau</div>
          <h2>La Marketplace B2B du CEPEX</h2>
          <p>
            Un espace numérique conçu pour les entreprises exportatrices tunisiennes, pensé pour
            faciliter et dynamiser vos activités d'exportation.
          </p>
          <ul className="marketplace-perks">
            <li><span className="perk-icon">🌍</span> Visibilité internationale renforcée sur les marchés étrangers</li>
            <li><span className="perk-icon">🤝</span> Accès à un vaste réseau de partenaires commerciaux et d'acheteurs</li>
          </ul>
          <Link to="/marketplace" className="btn btn-primary">Découvrir la marketplace</Link>
        </Reveal>
        <Reveal className="marketplace-visual"></Reveal>
      </div>
    </section>
  )
}
