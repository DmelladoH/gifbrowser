import useSingleGif from 'hooks/useSingleGif'
import GiftDetail from 'components/GifDeatil'

import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
import { useGifs } from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'

export default function Details ({ params }) {
  const { categoryName, gifs } = useGifs([])
  const { gif, isError } = useSingleGif({ id: params.id })
  // const { categoryName, gifs, setPage } = useGifs({ })

  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{gif.title} | Gifbrowser</title>
      </Helmet>
      <div className='App-wrapper'>
        <h3 className='App-title'>{gif.title}</h3>
        <GiftDetail gif={gif} />
        <ListOfGifs categoryName={categoryName} gifs={gifs} />
      </div>
    </>
  )
}
