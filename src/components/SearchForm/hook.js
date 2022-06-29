import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  UPDATE_LANG: 'update_lang'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }

    case ACTIONS.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
}

export default function useForm ({ initialKeywords = '', initialRating = 'g', initialLang = 'es' }) {
  const [state, dispach] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeywords),
    rating: initialRating,
    lang: initialLang
  })

  const { keyword, rating, lang } = state

  const updateKeyword = (keyword) => {
    dispach({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword })
  }

  const updateRating = (rating) => {
    dispach({ type: ACTIONS.UPDATE_RATING, payload: rating })
  }

  const updateLang = (lang) => {
    dispach({ type: ACTIONS.UPDATE_LANG, payload: lang })
  }

  return { keyword, rating, lang, updateKeyword, updateRating, updateLang }
}
