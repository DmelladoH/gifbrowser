import { useGifs } from 'hooks/useGifs'
import SearchResult from 'components/SearchResult'

export default function Search ({ params }) {
  const { keyword, rating } = params
  const { categoryName, gifs, isLoading, setPage } = useGifs({ keyword, rating })

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
