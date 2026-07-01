import { useEffect, useState } from 'react'

// Trigger point: once the user scrolls past the Home section, not just an
// arbitrary pixel amount.
function getHomeHeight() {
  const home = document.getElementById('home')
  return home ? home.offsetHeight : 500
}

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > getHomeHeight() * 0.6)
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-amber-400 text-indigo-950 shadow-lg
                 flex items-center justify-center text-xl font-bold"
      style={{
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(-115vh) scale(0.35)',
        opacity: visible ? 1 : 0,
        transition: visible
          ? 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease'
          : 'transform 0.5s cubic-bezier(0.55, 0, 0.85, 0.35), opacity 0.4s ease 0.1s',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      ↑
    </button>
  )
}
