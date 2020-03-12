import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (term) => {
    try {
      const res = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'las vegas'
      }
    })
    setResults(res.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('healthy')
  }, [])

  return [searchApi, results, errorMessage]
}
