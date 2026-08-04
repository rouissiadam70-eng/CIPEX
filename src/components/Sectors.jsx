import Reveal from './Reveal'
import SectorBar from './SectorBar'

const sectors = [
  {
    glyph: '🫒',
    share: '18% des exports',
    percent: 18,
    title: "Huile d'olive & agroalimentaire",
    text: "Premier exportateur mondial d'huile d'olive conditionnée hors UE.",
  },
  {
    glyph: '🧵',
    share: '24% des exports',
    percent: 24,
    title: 'Textile & habillement',
    text: 'Un tissu industriel dense, tourné vers la sous-traitance européenne.',
  },
  {
    glyph: '⚙️',
    share: '31% des exports',
    percent: 31,
    title: 'Industries mécaniques & électriques',
    text: 'Composants automobiles et aéronautiques à haute valeur ajoutée.',
  },
  {
    glyph: '🏺',
    share: 'Filière artisanale',
    percent: null,
    title: 'Artisanat & produits du terroir',
    text: "Céramique, tissage et savoir-faire traditionnels destinés à l'export.",
  },
  {
    glyph: '💻',
    share: 'Filière en croissance',
    percent: null,
    title: 'Technologies & services numériques',
    text: 'Outsourcing, développement logiciel et centres de services partagés.',
  },
  {
    glyph: '🌿',
    share: 'Filière en croissance',
    percent: null,
    title: 'Dattes & produits du désert',
    text: 'Deglet Nour et dérivés, exportés vers plus de 60 pays.',
  },
]

export default function Sectors() {
  return (
    <section className="sectors" id="secteurs">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Filières prioritaires</div>
          <h2>Des secteurs d'excellence, du champ à l'industrie</h2>
        </Reveal>

        <div className="sector-list">
          {sectors.map((s) => (
            <Reveal key={s.title} className="sector">
              <div className="sector-top">
                <span className="glyph">{s.glyph}</span>
                <span className="share">{s.share}</span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
              {s.percent !== null && <SectorBar percent={s.percent} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
