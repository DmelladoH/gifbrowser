import { API_KEY, API_URL } from './settings'

const fromApiResponseToString = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    return data
  }

  return []
}

export default function getTrendingTermsService () {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToString)
}
