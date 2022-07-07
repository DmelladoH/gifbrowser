import useSingleGif from 'hooks/useSingleGif'
import GiftDetail from 'components/GifDeatil'

import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
import { useGifs } from 'hooks/useGifs'
import InfinityScrollGifs from 'components/InfinityScrollGifs'

export default function Details ({ params }) {
  const { categoryName, gifs, setPage } = useGifs({ })

  const { gif, isError, isLoading } = useSingleGif({ id: params.id })

  if (isError) return <Redirect to='/404' />
  if (!gif) return null
  console.log(isLoading)
  return (
    <>
      <Helmet>
        <title>{gif.title} | Gifbrowser</title>
      </Helmet>

      <div className='App-wrapper'>
        <h3 className='App-title'>{gif.title}</h3>
        {
          isLoading
            ? <span>Loading...</span>
            : <GiftDetail gif={gif} />
        }

        <InfinityScrollGifs
          categoryName={categoryName}
          gifs={gifs}
          setPage={setPage}
        />
      </div>
    </>
  )
}
