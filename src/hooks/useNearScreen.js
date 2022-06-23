import { useState, useEffect, useRef } from 'react'
/* eslint-disable no-undef */
export default function useNearScreen ({ distance = '100px', once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  })

  return { ref, isNearScreen }
}
