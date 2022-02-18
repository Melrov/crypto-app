import React from 'react'
import styled from 'styled-components'
import LeftTable from './LeftTable'
import RightTable from './RightTable'

const TableCon = styled.div`
    display: flex;
`

function StockTable({ globalData, overData }) {
  return (
    <TableCon>
        <LeftTable globalData={globalData} overData={overData} />
        <RightTable globalData={globalData} overData={overData} />
    </TableCon>
  )
}

export default StockTable