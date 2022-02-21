import React, { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const SearchContext = createContext(null);

function SearchProvider(props) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const { data, error, loading } = useFetch("search", query, null, null, 9);
  
  useEffect(() => {
    setResults(data)
  }, [data])
  
  return (
    <SearchContext.Provider value={{ search, setSearch, query, setQuery, results, error, showResults, setShowResults }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
