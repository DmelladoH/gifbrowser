import { useLocation } from 'wouter'
import useForm from './hook'

import './SearchForm.css'

const RATING = ['g', 'pg', 'pg-13', 'r']
const LANG = ['en', 'es', 'fr', 'it']

export default function searchForm ({ initialKeywords = '', initialRating = '', initialLang = '' }) {
  const { keyword, rating, lang, updateKeyword, updateRating, updateLang } = useForm(
    initialKeywords, initialRating, initialLang)

  // eslint-disable-next-line no-unused-vars
  const [_, pushLocation] = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}/${lang}/${rating}`)
  }

  const handleRatingChange = (event) => {
    updateRating(event.target.value)
  }

  const handleSearchChange = (event) => {
    updateKeyword(event.target.value)
  }

  const handleLangChange = (event) => {
    updateLang(event.target.value)
  }

  return (
    <div className='SearchBar'>
      <form onSubmit={handleSubmit} className='searchForm'>
        <select onChange={handleLangChange} className='langSelect'>
          {LANG.map(lang =>
            <option key={lang}>{lang}</option>)}
        </select>
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
    </div>
  )
}
