
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function Search ({ params }) {
  const { keyword } = params
  const { gifs, isLoading } = useGifs({ keyword })

  return (
    <>
      {
        isLoading
          ? <i>loading...</i>
          : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}
