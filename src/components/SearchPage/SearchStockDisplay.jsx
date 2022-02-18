import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Con = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 7px;
    &: hover{
        background-color: gray;
        cursor: pointer;
    }
`

function SearchStockDisplay({ stock }) {
    const navigate = useNavigate()
    return (
        <Con onClick={() => navigate("/stock/" + stock["1. symbol"])}>
            <div>{stock["1. symbol"]}</div>
            <div>{stock["2. name"]}</div>
        </Con>
    )
}

export default SearchStockDisplay