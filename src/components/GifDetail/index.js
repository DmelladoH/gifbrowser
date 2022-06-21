
export default function GifDetails ({ title, url }) {
  return (
    <>
      <h2>{title}</h2>
      <img alt={title} src={url} />
    </>
  )
}
