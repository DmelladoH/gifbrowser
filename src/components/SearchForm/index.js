import { useState } from 'react'
import { useLocation } from 'wouter'

import './SearchForm.css'

const RATING = ['g', 'pg', 'pg-13', 'r']

export default function searchForm () {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState('g')
  const [path, pushLocation] = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleRatingChange = (event) => {
    setRating(event.target.value)
  }

  const handleSearchChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        type='text'
        className='search-input'
        placeholder='Search a gif here...'
        onChange={handleSearchChange}
        value={keyword}
      />
      <select onChange={handleRatingChange}>
        {RATING.map(rating =>
          <option key={rating}>{rating}</option>)}
      </select>
      <button>search</button>
    </form>
  )
}
