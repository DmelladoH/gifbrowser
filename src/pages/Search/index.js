import { useGifs } from 'hooks/useGifs'
import SearchResult from 'components/SearchResult'

export default function Search ({ params }) {
  const { keyword, rating, lang } = params
  const { categoryName, gifs, isLoading, setPage } = useGifs({ keyword, rating, lang })

  return (
    <>
      {
        isLoading
          ? <i>loading...</i>
          : <SearchResult
              keyword={keyword}
              rating={rating}
              categoryName={categoryName}
              gifs={gifs}
              setPage={setPage}
            />
      }
    </>
  )
}
