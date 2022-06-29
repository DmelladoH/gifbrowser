import LastSearch from 'components/LastSearch'
import SearchForm from 'components/SearchForm'
import LazyTrending from 'components/TrendingSearch'

import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Home | Gifbrowser</title>
      </Helmet>
      <header className='o-header'>
        <SearchForm />
      </header>
      <div className='App-wrapper'>
        <div className='App-main'>
          <div className='App-results'>
            <LastSearch />
          </div>
          <div className='App-category'>
            <LazyTrending />
          </div>
        </div>
      </div>
    </>
  )
}
