import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

function Gif ({ id, title, url }) {
  return (
    <div className='Gif'>
      <Link href={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
    </div>

  )
}

export default React.memo(Gif)
