
export default function GifDetails (title, url) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} />
    </div>
  )
}
