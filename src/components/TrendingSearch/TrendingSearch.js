import Category from '../Category'
import useTrends from 'hooks/useTrends'

export default function TrendingSearches () {
  const { trends } = useTrends()

  return <Category name='Trends' options={trends} />
}
