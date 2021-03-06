import { useEffect, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function InfinityScrollGifs ({ categoryName, gifs, setPage }) {
  const { ref, isNearScreen } = useNearScreen({ once: false })

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
