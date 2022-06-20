import { Link } from 'wouter'
import './Gif.css'

export default function Gif ({ id, title, url }) {
  return (
    <Link href={`/gif/${id}`} className='Gif'>
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </Link>
  )
}
