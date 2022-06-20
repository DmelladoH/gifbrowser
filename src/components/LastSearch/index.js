import ListOfGifs from '../ListOfGifs'

export default function LastSearch ({ gifs }) {
  return (
    <div>
      <h3>Last Search</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  )
}
