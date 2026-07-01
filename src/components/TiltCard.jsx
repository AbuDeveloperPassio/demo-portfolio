import { useRef } from 'react'

// Subtle corner-lift tilt. Max rotation is kept small (6deg) so it reads as
// a gentle, minimal interaction rather than a heavy 3D flip.
export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  function onMove(e) {
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateY = ((x - cx) / cx) * 6
    const rotateX = -((y - cy) / cy) * 6
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  function onLeave() {
    ref.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`tilt-card ${className}`}>
      {children}
    </div>
  )
}
