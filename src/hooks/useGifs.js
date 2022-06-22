
import { useState, useEffect, useContext } from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

export function useGifs ({ keyword } = { keyword: null }) {
  const [isloading, setLoading] = useState(false)
  const [categoryName, setCategoryName] = useState('')

  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || window.localStorage.getItem('lastSearch') || 'random'
    setCategoryName(keywordToUse)

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        if (keyword) {
          window.localStorage.setItem('lastSearch', keyword)
        }
        setLoading(false)
      })
  }, [keyword, setGifs])

  return { categoryName, gifs, isloading }
}
