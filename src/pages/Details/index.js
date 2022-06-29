import useSingleGif from 'hooks/useSingleGif'
import Gif from 'components/Gif'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

export default function Details ({ params }) {
  const { gif, isError } = useSingleGif({ id: params.id })

  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return (

    <>
      <Helmet>
        <title>{gif.title} | Gifbrowser</title>
      </Helmet>
      <h3 className='App-title'>{gif.title}</h3>
      <Gif {...gif} />
    </>

  )
}
