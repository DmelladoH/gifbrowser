import Gif from '../Gif/'
import './ListOfGifs.css'

export default function ListOfGifs ({ gifs }) {
  const isGifsEmpty = gifs.length === 0

  return (
    <div className='ListOfGifs'>

      {
        isGifsEmpty
          ? <i>Sorry, there is no match.</i>
          : gifs.map(singleGift =>
            <Gif
              key={singleGift.id}
              id={singleGift.id}
              title={singleGift.title}
              url={singleGift.url}
            />)
      }

    </div>
  )
}
