import { useState } from 'react'

import './SearchForm.css'

export default function searchForm ({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(keyword)
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
