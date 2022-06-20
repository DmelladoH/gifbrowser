
const apiKey = 'VFLzZ8Zbd4d4X9KuHAyNZIc6IJksudAm'
const limit = 25

export default function getGifs ({ keyword } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      return data.map(image => {
        const { url } = image.images.downsized_medium
        const { id, title } = image
        return { id, title, url }
      })
    })
}
