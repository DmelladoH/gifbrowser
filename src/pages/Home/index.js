import LastSearch from 'components/LastSearch'
import SearchForm from 'components/SearchForm'
import LazyTrending from 'components/TrendingSearch'

export default function Home () {
  return (
    <>
      <header>
        <SearchForm />
      </header>
      <div>
        <LastSearch />
        <LazyTrending />
      </div>

    </>
  )
}
