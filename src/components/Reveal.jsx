import useReveal from '../hooks/useReveal'

// <Reveal as="article" className="news-card">...</Reveal>
// Wraps any block in the fade-up-on-scroll effect without repeating
// the IntersectionObserver logic in every section component.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal()

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'show' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
