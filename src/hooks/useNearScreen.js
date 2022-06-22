import { useState, useEffect, useRef } from 'react'
/* eslint-disable no-undef */
export default function useNearScreen ({ distance = '100px' } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
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
