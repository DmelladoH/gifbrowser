import { useState, useEffect, useContext } from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({ keyword, rating, lang } = { keyword: null, rating: 'g', lang: 'es' }) {
  const [isloading, setLoading] = useState(false)
  const [isNextPageLoading, setNextPageLoading] = useState(false)

  const [categoryName, setCategoryName] = useState('')
  const [page, setPage] = useState(INITIAL_PAGE)

  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || window.localStorage.getItem('lastSearch') || 'random'
    setCategoryName(keywordToUse)

    getGifs({ keyword: keywordToUse, rating, lang })
      .then(gifs => {
        setGifs(gifs)
        if (keyword) {
          window.localStorage.setItem('lastSearch', keyword)
        }
        setLoading(false)
      })
  }, [keyword, setGifs, rating, lang])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setNextPageLoading(true)
    getGifs({ keyword: categoryName, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setNextPageLoading(false)
      })
  }, [page])

  return { categoryName, gifs, setPage, isloading, isNextPageLoading }
}
