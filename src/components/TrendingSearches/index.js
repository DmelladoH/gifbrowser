import Category from '../Category'
import useTrends from 'hooks/useTrends'
import { useState, useEffect } from 'react'
import IntersectionObserver from 'intersection-observer'

export default function TrendingSearches () {
  const { trends } = useTrends()

  return <Category name='Trenging' options={trends} />
}

// export default function LazyTrending () {
//   const [show, setShow] = useState(false)

//   //   useEffect(() => {
//   //     const onChange = (entries) => {
//   //       const el = entries[0]
//   //     }

//   //     const observer = new IntersectionObserver(onChange, {
//   //       rootMargin: '100px'
//   //     })

//   //     observer.observe()
//   //   })

//   return (
//     <div id='lazyTrending'>
//       {show ? <TrendingSearches /> : null}
//     </div>
//   )
// }
