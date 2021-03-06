import { API_KEY, API_URL } from './settings'

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

export default function getGifs ({ limit = 10, rating = 'g', lang = 'en', keyword, page = 0 } = {}) {
  const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}`
  return fetch(URL)
    .then(res => res.json())
    .then(response => fromApiResponseToGifs(response))
}
