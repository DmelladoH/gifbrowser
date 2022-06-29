import { useEffect, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import SearchForm from 'components/SearchForm'

export default function SearchResult ({ categoryName, gifs, setPage, keyword, rating }) {
  const { ref, isNearScreen } = useNearScreen({ once: false })

  const deboundsHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 50), [])

  useEffect(() => {
    if (isNearScreen) deboundsHandleNextPage()
  }, [isNearScreen])

  return (
    <>
      <header>
        <SearchForm
          initialKeywords={keyword}
          initialRating={rating}
        />
      </header>
      <ListOfGifs
        categoryName={categoryName}
        gifs={gifs}
      />
      <div id='visor' ref={ref} />

    </>
  )
}
