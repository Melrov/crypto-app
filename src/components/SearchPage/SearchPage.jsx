import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import SearchStockDisplay from './SearchStockDisplay'

function SearchPage() {
  const [querry, setQuerry] = useState(null)
  const [search, setSearch] = useState("")
  const { urlSearch } = useParams()
  const { data, error, loading } = useFetch('SYMBOL_SEARCH', querry, null)
  console.log(data, error, loading)

  return (
    <div>
      <label htmlFor='search'>Search</label>
      <input value={search} type="text" name='search' onChange={e => setSearch(e.target.value)} />
      <button onClick={e => { setQuerry(search); setSearch("") }}>Search</button>
      {data && !error && data.map(stock => {
        return <SearchStockDisplay key={stock["1. symbol"]} stock={stock} />
      })}
    </div>
  )
}

export default SearchPage