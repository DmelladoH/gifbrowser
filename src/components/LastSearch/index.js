import { useGifs } from 'hooks/useGifs'

import ListOfGifs from 'components/ListOfGifs'
import './LastSearch.css'

export default function LastSearch () {
  const { categoryName, gifs } = useGifs([])
  const isGifsEmpty = gifs.length === 0

  if (isGifsEmpty) { return <div className='LastSearch' /> }

  return (
    <div className='LastSearch'>
      <h2>Last Search</h2>
      <ListOfGifs categoryName={categoryName} gifs={gifs} />
    </div>
  )
}
