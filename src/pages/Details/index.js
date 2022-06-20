
import { useContext } from 'react'
import GifsContext from '../../context/GifsContext'

export default function Details ({ params }) {
  const { gifs } = useContext(GifsContext)
  const { id } = params

  console.log(gifs)
  const gif = gifs.find(gif => gif.id === id)
  console.log(gif)

  return (
    <>
      <h2>{gif.title}</h2>
      <img alt={gif.title} src={gif.url} />
    </>
  )
}
