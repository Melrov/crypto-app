import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import StockChart from '../StockDisplay/StockChart'
import SearchStockDisplay from './SearchStockDisplay'

function SearchPage() {
  const [query, setQuery] = useState(null)
  const [search, setSearch] = useState("")
  const { urlSearch } = useParams()
  const { data, error, loading } = useFetch("search", query, null, null)
  console.log(data, error, loading)

  return (
    <div>
      <label htmlFor='search'>Search</label>
      <input value={search} type="text" name='search' onChange={e => setSearch(e.target.value)} />
      <button onClick={e => { setQuery(search); setSearch("") }}>Search</button>
      {data && !error && data.map(stock => {
        return <SearchStockDisplay key={stock.symbol} stock={stock} />
      })}
      {/* <StockChart /> */}
    </div>
  )
}

export default SearchPage