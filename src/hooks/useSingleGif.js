import { useGifs } from 'hooks/useGifs'
import { useState, useEffect } from 'react'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif ({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(gif => gif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    if (!gif) {
      getSingleGif({ id })
        .then(gif => {
          setGif(gif)
        }).catch(err => {
          setIsError(true)
          console.error(err)
        })
    }
  }, [gif, id])

  return { gif, isError }
}
