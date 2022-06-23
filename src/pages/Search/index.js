import { useGifs } from 'hooks/useGifs'
import SearchResult from 'components/SearchResult'

export default function Search ({ params }) {
  const { keyword } = params
  const { categoryName, gifs, isLoading, setPage } = useGifs({ keyword })

  return (
    <>
      {
        isLoading
          ? <i>loading...</i>
          : <SearchResult
              categoryName={categoryName}
              gifs={gifs}
              setPage={setPage}
            />
      }
    </>
  )
}
