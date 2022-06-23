import ListOfGifs from 'components/ListOfGifs'

export default function SearchResult ({ categoryName, gifs, setPage }) {
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <>
      <ListOfGifs
        categoryName={categoryName}
        gifs={gifs}
      />
      <button onClick={handleNextPage}>next Page</button>
    </>
  )
}
