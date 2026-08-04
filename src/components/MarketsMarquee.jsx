const markets = [
  'France', 'Allemagne', 'Italie', 'Libye', 'Algérie',
  'États-Unis', 'Émirats Arabes Unis', 'Espagne', 'Maroc',
  'Royaume-Uni', 'Canada', 'Turquie',
]

export default function MarketsMarquee() {
  const track = [...markets, ...markets]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map((market, i) => (
          <span className="marquee-item" key={`${market}-${i}`}>
            {market}
            <span className="marquee-dot">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
