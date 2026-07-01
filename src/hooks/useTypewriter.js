import { useEffect, useState } from 'react'

export function useTypewriter(text, speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let i = 0
    let deleting = false
    let timeout

    function tick() {
      if (!deleting) {
        i++
        setDisplay(text.slice(0, i))
        if (i === text.length) {
          timeout = setTimeout(() => {
            deleting = true
            tick()
          }, pause)
          return
        }
      } else {
        i--
        setDisplay(text.slice(0, i))
        if (i === 0) {
          deleting = false
        }
      }
      timeout = setTimeout(tick, deleting ? speed / 2 : speed)
    }

    timeout = setTimeout(tick, speed)
    return () => clearTimeout(timeout)
  }, [text, speed, pause])

  return display
}
