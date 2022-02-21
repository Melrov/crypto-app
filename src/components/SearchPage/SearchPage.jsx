import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import SearchStockDisplay from "./SearchStockDisplay";

const SearchCon = styled.div`
  color: white;
  /* display: flex; */
  position: absolute;
  left: 40%;
  top: 2.5vh;
  height: 5vh;
`;
const DataCon = styled.div`
  color: black;
  background-color: gainsboro;
  position: relative;
  left: -30%;
  top: 2.2vh;
  width: 120%;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;
const Arrow = styled.div`
  border-right: 3px solid white;
  position: absolute;
  right: 157px;
  top: 3px;
  transform: ${(props) => (props.show ? "rotate(45deg)" : "rotate(225deg)")};
  transition: all 100ms linear;
  border-bottom: 3px solid white;
  height: 10px;
  width: 10px;
  margin: 3px;
  cursor: pointer;
`;
const Label = styled.label`
  position: relative;
  left: -5px;
`;
const SearchBtn = styled.button`
  cursor: pointer;
`

function SearchPage() {
  const { urlSearch } = useParams();
  const {
    search,
    setSearch,
    query,
    setQuery,
    results,
    error,
    showResults,
    setShowResults,
  } = useContext(SearchContext);
  return (
    <SearchCon>
      <Label htmlFor="search">Search</Label>
      <input
        value={search}
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchBtn
        onClick={(e) => {
          setQuery(search);
          setShowResults(true);
        }}
      >
        Search
      </SearchBtn>
      {query && (
        <Arrow
          show={showResults}
          onClick={() => setShowResults(!showResults)}
        />
      )}
      <DataCon show={showResults}>
        {results &&
          !error &&
          results.map((stock) => {
            return <SearchStockDisplay key={stock.symbol} stock={stock} />;
          })}
      </DataCon>
      {/* <StockChart /> */}
    </SearchCon>
  );
}

export default SearchPage;
