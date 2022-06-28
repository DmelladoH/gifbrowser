import { useState } from 'react'
import { useLocation } from 'wouter'

import './SearchForm.css'

export default function searchForm () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const onSubmitSearchForm = (keyword) => {

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        type='text'
        className='search-input'
        placeholder='Search a gif here...'
        onChange={handleChange}
        value={keyword}
      />
      <button>search</button>
    </form>
  )
}
