import { useEffect, useState } from 'react'
import getTrendingTermsService from 'services/getTrendingTermsService'

export default function useTrends () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTermsService().then(setTrends)
  }, [])

  return { trends }
}
