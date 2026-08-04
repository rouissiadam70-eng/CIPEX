import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import newsData from '../data/newsData'

export default function News() {
  return (
    <section className="news" id="actualites">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Actualités</div>
          <h2>Suivre le rythme de l'export tunisien</h2>
        </Reveal>

        <div className="news-grid">
          {newsData.map((n) => (
            <Reveal as="article" key={n.slug} className="news-card">
              <div className="news-thumb">
                <span className="cat">{n.cat}</span>
              </div>
              <div className="news-body">
                <span className="news-date">{n.date}</span>
                <h4>{n.title}</h4>
                <Link className="readmore" to={`/actualites/${n.slug}`}>
                  Lire l'article <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
