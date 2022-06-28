import LastSearch from 'components/LastSearch'
import SearchForm from 'components/SearchForm'
import LazyTrending from 'components/TrendingSearch'

import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Gifbrowser</title>
      </Helmet>
      <header>
        <SearchForm />
      </header>
      <div>
        <LastSearch />
        <LazyTrending />
      </div>
    </>
  )
}
