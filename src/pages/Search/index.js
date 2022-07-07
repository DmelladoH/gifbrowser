/* eslint-disable react/jsx-closing-tag-location */
import { Helmet } from 'react-helmet'

import { useGifs } from 'hooks/useGifs'
import InfinityScrollGifs from 'components/InfinityScrollGifs'

export default function Search ({ params }) {
  const { keyword, rating, lang } = params
  const { categoryName, gifs, isLoading, setPage } = useGifs({ keyword, rating, lang })

  return (
    <>
      {
        isLoading
          ? <i>loading...</i>
          : <>
            <Helmet>
              <title> Search for {keyword}</title>
            </Helmet>
            <div className='App-wrapper'>
              <InfinityScrollGifs
                categoryName={categoryName}
                gifs={gifs}
                setPage={setPage}
              />
            </div>
          </>
      }
    </>
  )
}
