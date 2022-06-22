import React from 'react'
import './TrendingSearches.css'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearch = React.lazy(() => import('./TrendingSearch'))

export default function LazyTrending () {
  const { ref, isNearScreen } = useNearScreen()
  return (
    <div ref={ref} className='Trends'>
      {isNearScreen ? <TrendingSearch /> : null}
    </div>
  )
}
