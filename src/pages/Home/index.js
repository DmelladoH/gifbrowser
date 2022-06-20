
import { useGifs } from '../../hooks/useGifs'
import LastSearch from '../../components/LastSearch'
import SearchForm from '../../components/SearchForm'
import GifsExamples from '../../components/GifsExamples'

const GIFS_EXAMPLES = ['Taylor Swift', 'cats', 'applause']

export default function Home () {
  const { gifs, isLoading } = useGifs([])
  const isGifsEmpty = gifs.length === 0

  return (
    <>
      <SearchForm />
      {
        !isGifsEmpty
          ? <LastSearch gifs={gifs} />
          : ''
      }
      <GifsExamples gifsNames={GIFS_EXAMPLES} />
    </>
  )
}
