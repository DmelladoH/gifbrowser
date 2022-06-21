import { Link } from 'wouter'

export default function Category ({ name, options = [] }) {
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        {
            options.map(singleOption => (
              <li key={singleOption}>
                <Link to={`/search/${singleOption}`}>
                  {singleOption}
                </Link>
              </li>
            ))
        }
      </ul>
    </div>
  )
}
