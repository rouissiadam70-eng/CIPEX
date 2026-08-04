import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

// Animates from 0 to `value` with an ease-out curve once the element
// scrolls into view. `suffix` is appended after the animation (e.g. "+").
export default function CountUp({ value, suffix = '', duration = 1400 }) {
  const [ref, visible] = useReveal(0.4)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return

    let start = null
    let frame

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [visible, value, duration])

  return (
    <span ref={ref} className="count-up">
      {display.toLocaleString('fr-FR')}
      {suffix}
    </span>
  )
}
