import Gif from './Gif/Gif'
import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export default function ({ keyword }) {
  const [gifs, setGifts] = useState([])

  useEffect(() => {
    getGifs({ keyword })
      .then(gifs => setGifts(gifs))
  }, [keyword])

  return gifs.map(singleGift =>
    <Gif
      key={singleGift.id}
      title={singleGift.title}
      url={singleGift.url}
    />)
}
