import { Link } from 'wouter'

export default function GifsExamples ({ gifsNames }) {
  return (
    <div>
      <h3>Some examples</h3>
      <ul>
        {
          gifsNames.map(gifName => (
            <li key={gifName}>
              <Link to={`/search/${gifName}`}>{gifName}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
