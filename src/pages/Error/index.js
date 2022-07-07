import { Helmet } from 'react-helmet'

export default function ErrorPage () {
  return (
    <>
      <Helmet><title>Error 404 | Gifbrowser</title></Helmet>

      <div className='App-wrapper'>
        <div>
          <div className='Error'>
            <span>Error 404</span>
          </div>
          <div className='ErrorDescription'>
            <span>Gif not found</span>
          </div>
        </div>
      </div>

    </>
  )
}
