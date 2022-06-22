/* eslint-disable no-undef */
import Category from '../Category'
import useTrends from 'hooks/useTrends'
import './TrendingSearches.css'
import useNearScreen from 'hooks/useNearScreen'

function TrendingSearches () {
  const { trends } = useTrends()

  return <Category name='Trends' options={trends} />
}

export default function LazyTrending () {
  const { ref, isNearScreen } = useNearScreen()
  return (
    <div ref={ref} className='Trends'>
      {isNearScreen ? <TrendingSearches /> : null}
    </div>
  )
}
