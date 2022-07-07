import { useGifs } from 'hooks/useGifs'
import { useState, useEffect } from 'react'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif ({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(gif => gif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getSingleGif({ id })
      .then(gif => {
        setGif(gif)
        setLoading(false)
      }).catch(err => {
        setIsError(true)
        setLoading(false)
        console.error(err)
      })
  }, [id])

  return { gif, isError, isLoading }
}
