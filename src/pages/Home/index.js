import LastSearch from 'components/LastSearch'
import LazyTrending from 'components/TrendingSearch'

import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Home | Gifbrowser</title>
      </Helmet>
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
