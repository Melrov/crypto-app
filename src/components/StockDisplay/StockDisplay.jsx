import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function StockDisplay() {
    const { symbol } = useParams()
    const { data: globalData, error: globalError, loading: globalLoading } = useFetch('GLOBAL_QUOTE', null, symbol)
    const { data: overData, error: overError, loading: overLoading } = useFetch('OVERVIEW', null, symbol)
    console.log(globalData, globalError, globalLoading)
    console.log(overData, overError, overLoading)
  return (
    <div>{symbol}</div>
  )
}

export default StockDisplay