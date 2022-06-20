
import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = { keyword: null }) {
  const [isloading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    console.log('----')
    const keywordToUse = keyword || window.localStorage.getItem('lastSearch') || 'random'

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        if (keyword) {
          window.localStorage.setItem('lastSearch', keyword)
        }
        setLoading(false)
      })
  }, [keyword, setGifs])

  return { gifs, isloading }
}
