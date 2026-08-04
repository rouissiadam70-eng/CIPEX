import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import successStories from '../data/successStories'

export default function SuccessStories() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="Des entreprises tunisiennes qui exportent avec succès"
        lead="Envoie-moi les vidéos et témoignages réels, je les intègre à la place des emplacements ci-dessous."
      />

      <section className="section-plain">
        <div className="wrap">
          <div className="story-grid">
            {successStories.map((s, i) => (
              <Reveal key={i} className="story-card">
                <div className="story-video-slot">
                  {s.videoUrl ? (
                    <iframe
                      src={s.videoUrl}
                      title={s.company}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <span className="story-play">▶</span>
                  )}
                </div>
                <div className="story-body">
                  <span className="story-sector">{s.sector}</span>
                  <h4>{s.company}</h4>
                  <p>{s.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
