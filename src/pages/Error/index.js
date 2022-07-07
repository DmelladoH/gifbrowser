import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

export default function ErrorPage () {
  return (
    <>
      <Helmet><title>Error 404 | Gifbrowser</title></Helmet>

      <div className='App-wrapper'>
        <div>
          <span>Error 404</span>
          <span>Gif not found</span>
        </div>
      </div>

    </>
  )
}
