import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { director, governanceIntro, boardMembers } from '../data/governance'

export default function Governance() {
  return (
    <>
      <PageHero
        eyebrow="Gouvernance"
        title="La direction et le Conseil d'Administration"
        lead="Un établissement public créé en 1973, sous tutelle du Ministère du Commerce et de l'Industrie."
      />

      <section className="section-plain">
        <div className="wrap">
          <Reveal className="gov-intro">
            <p>{governanceIntro.text}</p>
          </Reveal>

          <Reveal className="director-card">
            <div className="director-avatar">MB</div>
            <div>
              <div className="eyebrow">Direction générale</div>
              <h3>{director.name}</h3>
              <p className="director-role">{director.role}</p>
              <p>{director.bio}</p>
            </div>
          </Reveal>

          <Reveal className="section-head" style={{ marginTop: 60 }}>
            <div className="eyebrow">Conseil d'Administration</div>
            <h2>Composition du conseil</h2>
            <p className="placeholder-note">
              ⓘ Emplacement en attente de la liste officielle et actuelle transmise par le CEPEX —
              envoie-moi les noms, fonctions et parcours réels pour les intégrer ici.
            </p>
          </Reveal>

          <div className="board-grid">
            {boardMembers.map((m, i) => (
              <Reveal key={i} className="board-card">
                <div className="board-avatar">{m.name === 'À compléter' ? '?' : m.name.charAt(0)}</div>
                <h4>{m.name}</h4>
                <p className="board-role">{m.role}</p>
                <p className="board-bio">{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
