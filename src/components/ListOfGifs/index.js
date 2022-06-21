import Gif from '../Gif/'
import './ListOfGifs.css'

export default function ListOfGifs ({ categoryName, gifs }) {
  const isGifsEmpty = gifs.length === 0

  return (
    <>
      {
        isGifsEmpty
          ? <i>Sorry, there is no match.</i>
          : <ListOfGifsDisplay
              categoryName={categoryName}
              gifs={gifs}
            />
      }
    </>
  )
}

function ListOfGifsDisplay ({ categoryName, gifs }) {
  return (
    <div>
      <h3>{decodeURI(categoryName)}</h3>
      <div className='ListOfGifs'>
        {
          gifs.map(singleGift =>
            <Gif
              key={singleGift.id}
              id={singleGift.id}
              title={singleGift.title}
              url={singleGift.url}
            />)
        }
      </div>
    </div>
  )
}
