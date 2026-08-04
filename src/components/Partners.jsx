import Reveal from './Reveal'
import partners from '../data/partners'

export default function Partners() {
  return (
    <section className="partners">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Écosystème</div>
          <h2>Nos partenaires institutionnels</h2>
          <p>Envoie-moi les logos de vos partenaires pour remplacer ces emplacements.</p>
        </Reveal>

        <div className="partner-grid">
          {partners.map((p, i) => (
            <Reveal key={p.name + i} className="partner-card">
              {p.logo ? (
                <img src={p.logo} alt={p.name} />
              ) : (
                <span className="partner-placeholder">{p.name}</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
