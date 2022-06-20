import { useState } from 'react'
import { useLocation } from 'wouter'

export default function searchForm () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search a gif here...'
        onChange={handleChange}
        value={keyword}
      />
      <button>search</button>
    </form>
  )
}
