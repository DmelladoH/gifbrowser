import useGifsGlobal from 'hooks/useGifsGlobal'
import GifDetails from 'components/GifDetails'

export default function Details ({ params }) {
  const gifs = useGifsGlobal()
  const { id } = params

  console.log(gifs)
  const gif = gifs.find(gif => gif.id === id)
  console.log(gif)

  return (

    <GifDetails
      title={gif.title}
      url={gif.url}
    />
  )
}
