import useReveal from '../hooks/useReveal'

export default function SectorBar({ percent }) {
  const [ref, visible] = useReveal(0.4)

  return (
    <div ref={ref} className="sector-bar-track">
      <div
        className="sector-bar-fill"
        style={{ width: visible ? `${percent}%` : '0%' }}
      ></div>
    </div>
  )
}
