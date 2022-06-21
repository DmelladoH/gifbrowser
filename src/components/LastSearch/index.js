import ListOfGifs from '../ListOfGifs'
import './LastSearch.css'

export default function LastSearch ({ categoryName, gifs }) {
  return (
    <div className='LastSearch'>
      <h2>Last Search</h2>
      <ListOfGifs categoryName={categoryName} gifs={gifs} />
    </div>
  )
}
