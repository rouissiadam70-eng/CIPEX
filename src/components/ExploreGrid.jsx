import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const links = [
  {
    to: '/decouvrir-la-tunisie',
    glyph: '🗺️',
    title: 'Découvrir la Tunisie',
    text: "Géographie, économie, secteurs clés : pourquoi exporter et investir en Tunisie.",
  },
  {
    to: '/success-stories',
    glyph: '🏆',
    title: 'Success stories',
    text: "Des entreprises tunisiennes qui ont réussi leur développement à l'international.",
  },
  {
    to: '/gouvernance',
    glyph: '🏛️',
    title: 'Gouvernance',
    text: 'La direction et le Conseil d\'Administration du CEPEX.',
  },
]

export default function ExploreGrid() {
  return (
    <section className="explore">
      <div className="wrap explore-grid">
        {links.map((l) => (
          <Reveal key={l.to} as={Link} to={l.to} className="explore-card">
            <span className="explore-glyph">{l.glyph}</span>
            <h4>{l.title}</h4>
            <p>{l.text}</p>
            <span className="explore-link">Découvrir <span className="arrow">→</span></span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
