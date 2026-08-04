import Reveal from './Reveal'
import socialLinks from '../data/socialLinks'

export default function Social() {
  return (
    <section className="social-section" id="suivez-nous">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Restons connectés</div>
          <h2>Suivez l'actualité de l'export tunisien</h2>
          <p>Coulisses des foires, opportunités de marché et success stories d'exportateurs, sur vos réseaux préférés.</p>
        </Reveal>

        <div className="social-grid">
          {socialLinks.map(({ id, name, handle, url, Icon, color }) => (
            <Reveal key={id} as="a" href={url} target="_blank" rel="noopener noreferrer" className="social-card" style={{ '--brand': color }}>
              <div className="social-icon"><Icon width={22} height={22} /></div>
              <div className="social-name">{name}</div>
              <div className="social-handle">{handle}</div>
              <div className="social-follow">Suivre <span className="arrow">→</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
