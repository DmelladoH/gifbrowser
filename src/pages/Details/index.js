import useGifsGlobal from 'hooks/useGifsGlobal'
import GifDetail from 'components/GifDetail'

export default function Details ({ params }) {
  const gifs = useGifsGlobal()
  const { id } = params

  const gif = gifs.find(gif => gif.id === id)

  return (
    <GifDetail
      title={gif.title}
      url={gif.url}
    />
  )
}
