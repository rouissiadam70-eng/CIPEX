import Reveal from './Reveal'

const points = [
  {
    idx: '01',
    title: 'Intelligence commerciale',
    text: "Veille sectorielle, études de marché et alertes d'opportunités sur mesure.",
  },
  {
    idx: '02',
    title: 'Mise en réseau',
    text: 'Missions B2B, foires internationales et rencontres acheteurs ciblées.',
  },
  {
    idx: '03',
    title: 'Renforcement des capacités',
    text: 'Formations export, certification qualité et accompagnement logistique.',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-visual">
          <div className="tag">
            <p>« Chaque conteneur qui quitte un port tunisien porte un savoir-faire à faire connaître. »</p>
          </div>
        </Reveal>

        <Reveal className="about-body">
          <div className="eyebrow">Notre mission</div>
          <h2>Un pont entre les entreprises tunisiennes et les marchés du monde</h2>
          <p>
            Depuis les zones industrielles de Tunis jusqu'aux oliveraies du Sahel, la Tunisie
            produit bien plus qu'elle n'exporte. Notre rôle est de réduire cet écart : informer,
            préparer et connecter les entreprises tunisiennes aux opportunités commerciales
            internationales.
          </p>
          <p>
            Nous travaillons aux côtés des exportateurs à chaque étape — de la première étude de
            marché jusqu'à la signature du contrat.
          </p>

          <div className="about-points">
            {points.map((p) => (
              <div className="about-point" key={p.idx}>
                <div className="idx">{p.idx}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
