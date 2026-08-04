import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const perks = [
  { icon: '🌍', title: 'Visibilité internationale', text: "Augmentez votre présence sur les marchés étrangers grâce à une vitrine digitale dédiée à votre entreprise." },
  { icon: '🤝', title: 'Réseau de partenaires', text: "Accédez à un vaste réseau de partenaires commerciaux et d'acheteurs internationaux qualifiés." },
  { icon: '📈', title: 'Opportunités ciblées', text: "Recevez des mises en relation pertinentes selon votre secteur d'activité et vos marchés cibles." },
  { icon: '🛡️', title: 'Fiabilité institutionnelle', text: "Une plateforme portée par le CEPEX, gage de sérieux auprès des acheteurs internationaux." },
]

const steps = [
  { n: '01', title: 'Créez votre profil entreprise', text: 'Renseignez votre activité, vos produits et vos marchés cibles.' },
  { n: '02', title: 'Publiez votre offre', text: 'Mettez en avant vos produits ou services auprès des acheteurs internationaux.' },
  { n: '03', title: 'Échangez avec des acheteurs', text: 'Recevez des demandes et entrez en contact directement via la plateforme.' },
  { n: '04', title: 'Développez votre activité', text: "Concrétisez de nouveaux partenariats à l'international." },
]

export default function Marketplace() {
  return (
    <>
      <PageHero
        eyebrow="Marketplace B2B du CEPEX"
        title="Une plateforme digitale pour développer vos activités d'exportation"
        lead="Un espace dédié aux entreprises exportatrices tunisiennes, conçu pour faciliter et dynamiser votre développement à l'international."
      />

      <section className="section-plain">
        <div className="wrap">
          <div className="perk-grid">
            {perks.map((p) => (
              <Reveal key={p.title} className="perk-card">
                <span className="perk-card-icon">{p.icon}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginTop: 70 }}>
            <div className="eyebrow">Comment ça marche</div>
            <h2>Rejoignez la communauté d'affaires en 4 étapes</h2>
          </Reveal>

          <div className="steps-grid">
            {steps.map((s) => (
              <Reveal key={s.n} className="step-card">
                <div className="step-n">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="marketplace-cta">
            <h2>Prêt à rejoindre la marketplace ?</h2>
            <p>Saisissez de nouvelles opportunités pour développer votre activité à l'international.</p>
            <a href="/#contact" className="btn btn-primary">Créer mon profil entreprise</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
