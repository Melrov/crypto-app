import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchContext } from "../../context/SearchContext";

const Con = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;
  &: hover {
    background-color: gray;
    cursor: pointer;
  }
`;

function SearchStockDisplay({ stock }) {
  const { setShowResults } = useContext(SearchContext);
  const navigate = useNavigate();
  return (
    <Con
      onClick={() => {
        setShowResults(false);
        navigate("/stock/" + stock.symbol);
      }}
    >
      <div>{stock.symbol}</div>
      <div>{stock.name}</div>
      <div>{stock.exchangeShortName}</div>
    </Con>
  );
}

export default SearchStockDisplay;
