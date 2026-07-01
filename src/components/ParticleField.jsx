import { useEffect, useRef } from 'react'

// A particle network that fills the hero. Particles never fade — instead,
// whenever the cursor gets close, they're physically pushed outward, so a
// clean circular gap opens around the pointer and drifts along with it.
export default function ParticleField() {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    const ctx = canvas.getContext('2d')

    let particles = []
    let raf = null
    let width = 0
    let height = 0
    const mouse = { x: -9999, y: -9999, active: false }
    const CLEAR_RADIUS = 240
    const PUSH_STRENGTH = 16
    const LINK_DIST = 160

    function resize() {
      width = wrap.clientWidth
      height = wrap.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(320, Math.max(120, Math.floor((width * height) / 5000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        // ambient drift
        p.x += p.vx
        p.y += p.vy
        if (p.x <= 0 || p.x >= width) p.vx *= -1
        if (p.y <= 0 || p.y >= height) p.vy *= -1

        // push the particle out of the cursor's circle, instead of hiding it
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy) || 0.0001
          if (dist < CLEAR_RADIUS) {
            const force = (1 - dist / CLEAR_RADIUS) * PUSH_STRENGTH
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force
            p.x = Math.min(Math.max(p.x, 0), width)
            p.y = Math.min(Math.max(p.y, 0), height)
          }
        }
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist >= LINK_DIST) continue

          const alpha = (1 - dist / LINK_DIST) * 0.4
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
         ctx.strokeStyle = `rgba(150, 150, 150, ${alpha})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2)
       ctx.fillStyle = 'rgba(125, 125, 125, 0.55)'
        
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    function onPointerMove(e) {
      const rect = wrap.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height
      mouse.x = x
      mouse.y = y
      mouse.active = inside
    }
    function onPointerLeave() {
      mouse.active = false
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()
    raf = requestAnimationFrame(step)

    // Listen on the whole window, not just this layer, so the cursor is
    // still tracked when it's over the avatar/text stacked on top of it.
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}