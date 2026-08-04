import Reveal from './Reveal'

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-glow"></div>
      <Reveal className="wrap">
        <div className="eyebrow eyebrow-light">Prêt à exporter</div>
        <h2>Faites connaître votre entreprise au-delà des frontières</h2>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-primary">Demander un accompagnement</a>
          <a href="#" className="btn btn-ghost">Consulter la marketplace</a>
        </div>
      </Reveal>
    </section>
  )
}
