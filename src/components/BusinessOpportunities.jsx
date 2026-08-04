import Reveal from './Reveal'

const opportunities = [
  {
    tag: 'Appel à candidatures',
    title: 'Pavillon tunisien — Fi Europe 2026, Francfort',
    detail: '17 au 19 novembre 2026 · Secteur agroalimentaire',
  },
  {
    tag: 'Mission B2B',
    title: "Mission de prospection sur le marché ghanéen",
    detail: 'Rencontres acheteurs ciblées · Multi-secteurs',
  },
  {
    tag: 'Appel d\'offres international',
    title: "Fourniture d'équipements — clientèle export",
    detail: 'Marché européen · Date limite à confirmer',
  },
]

export default function BusinessOpportunities() {
  return (
    <section className="opportunities">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Opportunités d'affaires</div>
          <h2>Des opportunités concrètes, mises à jour en continu</h2>
          <p>Appels à candidatures, missions B2B et appels d'offres internationaux réservés aux entreprises tunisiennes.</p>
        </Reveal>

        <div className="opportunity-list">
          {opportunities.map((o) => (
            <Reveal key={o.title} className="opportunity-card">
              <span className="opportunity-tag">{o.tag}</span>
              <h4>{o.title}</h4>
              <p>{o.detail}</p>
              <a href="#contact" className="opportunity-link">Postuler <span className="arrow">→</span></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
