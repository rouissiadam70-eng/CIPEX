import { useEffect, useRef, useState } from 'react'

// Returns a ref to attach to an element, and a boolean that flips to
// true the first time that element scrolls into view. Used to drive
// the fade-in-on-scroll effect across the page's sections.
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
