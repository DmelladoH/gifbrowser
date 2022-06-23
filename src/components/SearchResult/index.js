import { useEffect, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResult ({ categoryName, gifs, setPage }) {
  const { ref, isNearScreen } = useNearScreen({ once: false })

  const handleNextPage = () => {
    // setPage(prevPage => prevPage + 1)
    console.log('nextPage')
  }

  console.log(isNearScreen)

  const deboundsHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 50), [])

  useEffect(() => {
    if (isNearScreen) deboundsHandleNextPage()
  }, [isNearScreen])

  return (
    <>
      <ListOfGifs
        categoryName={categoryName}
        gifs={gifs}
      />
      <div id='visor' ref={ref} />

    </>
  )
}
