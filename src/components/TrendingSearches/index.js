/* eslint-disable no-undef */
import Category from '../Category'
import useTrends from 'hooks/useTrends'
import { useState, useEffect, useRef } from 'react'
import './TrendingSearches.css'

function TrendingSearches () {
  const { trends } = useTrends()

  return <Category name='Trends' options={trends} />
}

export default function LazyTrending () {
  const [show, setShow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]
      console.log(el.isIntersecting)
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '200px'
    })

    observer.observe(ref.current)
  })

  return (
    <div ref={ref} className='Trends'>
      {show ? <TrendingSearches /> : null}
    </div>
  )
}
