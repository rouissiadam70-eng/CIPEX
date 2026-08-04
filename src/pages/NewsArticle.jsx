import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import newsData from '../data/newsData'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsData.find((n) => n.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!article) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <h1>Article introuvable</h1>
          <p className="lead">Cet article n'existe pas ou plus.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: 24 }}>Retour à l'accueil</Link>
        </div>
      </section>
    )
  }

  const related = newsData.filter((n) => n.slug !== slug).slice(0, 2)

  return (
    <article className="article-page">
      <section className="page-hero page-hero-article">
        <div className="wrap">
          <span className="cat cat-static">{article.cat}</span>
          <h1>{article.title}</h1>
          <span className="news-date article-date">{article.date}</span>
        </div>
      </section>

      <div className="wrap article-body">
        <p className="article-lead">{article.excerpt}</p>
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <Link to="/#actualites" className="btn btn-line" style={{ marginTop: 32 }}>
          ← Toutes les actualités
        </Link>
      </div>

      {related.length > 0 && (
        <section className="news" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">À lire aussi</div>
            </div>
            <div className="news-grid">
              {related.map((n) => (
                <article className="news-card" key={n.slug}>
                  <div className="news-thumb"><span className="cat">{n.cat}</span></div>
                  <div className="news-body">
                    <span className="news-date">{n.date}</span>
                    <h4>{n.title}</h4>
                    <Link className="readmore" to={`/actualites/${n.slug}`}>
                      Lire l'article <span className="arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
