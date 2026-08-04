import Logo3D from './Logo3D'

export default function Hero() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--spot-x', `${x}%`)
    e.currentTarget.style.setProperty('--spot-y', `${y}%`)
  }

  return (
    <section className="hero" id="top" onMouseMove={handleMouseMove}>
      <div className="hero-spotlight"></div>
      <div className="hero-pattern"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="wrap">
        <div>
          <div className="hero-eyebrow">Centre de promotion des exportations</div>
          <h1>
            Le savoir-faire tunisien, <em>exporté avec méthode.</em>
          </h1>
          <p className="lead">
            Nous accompagnons les entreprises tunisiennes vers les marchés internationaux —
            information commerciale, mise en relation, foires et formation à l'export.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">Découvrir nos services</a>
            <a href="#contact" className="btn btn-ghost">Devenir exportateur</a>
          </div>
        </div>

        <div className="seal-wrap">
          <Logo3D />
        </div>
      </div>

      <div className="scroll-cue">
        <div className="line"></div>
        DÉFILER
      </div>
    </section>
  )
}
