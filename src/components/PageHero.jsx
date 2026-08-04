export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="hero-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  )
}
