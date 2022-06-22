
import { API_KEY, API_URL } from './settings'
const limit = 25
const rating = 'r'
const lang = 'en'
const offset = 0

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse

  if (Array.isArray(data)) {
    return data.map(image => {
      const { url } = image.images.downsized_medium
      const { id, title } = image
      return { id, title, url }
    })
  }
  return []
}

export default function getGifs ({ keyword } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => fromApiResponseToGifs(response))
}
