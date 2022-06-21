
import { useGifs } from 'hooks/useGifs'
import LastSearch from 'components/LastSearch'
import SearchForm from 'components/SearchForm'
import TrendingSearches from 'components/TrendingSearches'

export default function Home () {
  const { categoryName, gifs, isLoading } = useGifs([])
  const isGifsEmpty = gifs.length === 0

  return (
    <>
      <header>
        <SearchForm />
      </header>
      <div>
        <div>
          {
          !isGifsEmpty
            ? <LastSearch
                categoryName={categoryName}
                gifs={gifs}
              />
            : ''
          }
        </div>
        <div>
          <TrendingSearches />
        </div>
      </div>

    </>
  )
}
