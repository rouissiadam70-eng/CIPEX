import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import mahdiaAerial from '../assets/tunisia/mahdia-aerial.jpg'
import coteAerienne from '../assets/tunisia/cote-aerienne.jpg'
import sidiBouSaid1 from '../assets/tunisia/sidi-bou-said-1.jpg'
import sidiBouSaid2 from '../assets/tunisia/sidi-bou-said-2.jpg'
import villageColore from '../assets/tunisia/village-colore.jpg'

const facts = [
  { label: 'Superficie', value: '163 610 km²' },
  { label: 'Population', value: '~12 millions' },
  { label: 'Capitale', value: 'Tunis' },
  { label: 'Accords de libre-échange', value: 'UE, ALECA, ZLECAf, Ligue arabe' },
]

const reasons = [
  {
    title: 'Position géostratégique',
    text: "Située au carrefour de l'Europe, de l'Afrique et du Moyen-Orient, la Tunisie offre un accès rapide aux marchés méditerranéens.",
  },
  {
    title: 'Accords commerciaux',
    text: "Un accès préférentiel à plusieurs marchés grâce à ses accords de libre-échange, notamment avec l'Union européenne.",
  },
  {
    title: 'Main-d\'œuvre qualifiée',
    text: "Un vivier de talents formés en ingénierie, textile, TIC et industries manufacturières.",
  },
  {
    title: 'Écosystème industriel',
    text: "Des zones industrielles et des filières structurées, de l'agroalimentaire aux industries mécaniques et électriques.",
  },
]

const gallery = [
  { src: mahdiaAerial, caption: 'Vue aérienne du littoral tunisien' },
  { src: sidiBouSaid1, caption: 'Sidi Bou Saïd, ruelle bleue et blanche' },
  { src: sidiBouSaid2, caption: 'Sidi Bou Saïd, art de vivre méditerranéen' },
  { src: villageColore, caption: 'Village de pêcheurs aux façades colorées' },
  { src: coteAerienne, caption: 'Port et front de mer tunisien' },
]

export default function DiscoverTunisia() {
  return (
    <>
      <PageHero
        eyebrow="Découvrir la Tunisie"
        title="Un pays, une porte d'entrée vers trois continents"
        lead="Géographie, économie et atouts d'un pays tourné vers l'export depuis plus de 50 ans."
      />

      <section className="section-plain">
        <div className="wrap">
          <div className="facts-grid">
            {facts.map((f) => (
              <Reveal key={f.label} className="fact-card">
                <div className="fact-value">{f.value}</div>
                <div className="fact-label">{f.label}</div>
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginTop: 70 }}>
            <div className="eyebrow">Pourquoi exporter et investir en Tunisie</div>
            <h2>Des atouts concrets pour les entreprises internationales</h2>
          </Reveal>

          <div className="reason-grid">
            {reasons.map((r) => (
              <Reveal key={r.title} className="reason-card">
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginTop: 70 }}>
            <div className="eyebrow">Galerie</div>
            <h2>La Tunisie en images</h2>
          </Reveal>

          <div className="gallery-grid">
            {gallery.map((g) => (
              <Reveal key={g.caption} className="gallery-photo">
                <img src={g.src} alt={g.caption} loading="lazy" />
                <span className="gallery-caption">{g.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
