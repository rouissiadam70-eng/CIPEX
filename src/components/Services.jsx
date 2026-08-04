import Reveal from './Reveal'

const services = [
  {
    icon: '01',
    title: 'Information commerciale',
    text: 'Fiches marchés, tarifs douaniers, veille réglementaire et données sectorielles actualisées.',
  },
  {
    icon: '02',
    title: 'Foires & missions B2B',
    text: 'Pavillons nationaux, stands collectifs et missions de prospection dans le monde entier.',
  },
  {
    icon: '03',
    title: 'Marketplace export',
    text: 'Catalogue numérique mettant en relation exportateurs tunisiens et acheteurs internationaux.',
  },
  {
    icon: '04',
    title: 'Formation & conseil',
    text: "Ateliers pratiques sur la négociation, la logistique et les incoterms à l'export.",
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Ce que nous faisons</div>
          <h2>Un accompagnement pensé pour chaque étape de l'export</h2>
          <p>Quatre pôles de service, du diagnostic export jusqu'à la présence durable sur les marchés cibles.</p>
        </Reveal>
      </div>

      <div className="wrap wrap-flush">
        <div className="service-grid">
          {services.map((s) => (
            <Reveal key={s.icon} className="service-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
