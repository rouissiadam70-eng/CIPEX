import CountUp from './CountUp'

const stats = [
  { value: 2400, suffix: '+', label: 'Entreprises accompagnées' },
  { value: 86, suffix: '', label: "Marchés d'exportation" },
  { value: 120, suffix: '+', label: 'Foires internationales / an' },
  { value: 12, suffix: '', label: 'Filières couvertes' },
]

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
