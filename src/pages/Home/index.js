import LastSearch from 'components/LastSearch'
import SearchForm from 'components/SearchForm'
import LazyTrending from 'components/TrendingSearch'
import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet'

export default function Home () {
  const [path, pushLocation] = useLocation()

  const onSubmitSearchForm = (keyword) => {
    pushLocation(`/search/${keyword}`)
  }

  return (
    <>
      <Helmet>
        <title>Gifbrowser</title>
      </Helmet>
      <header>
        <SearchForm onSubmit={onSubmitSearchForm} />
      </header>
      <div>
        <LastSearch />
        <LazyTrending />
      </div>
    </>
  )
}
