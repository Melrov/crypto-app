import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const StockContext = createContext(null);

export default function StockProvider(props) {
  const [watchList, setWatchList] = useState([]);
  const [stock, setStock] = useState(null);

  const isWatched = useCallback((symbol) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].symbol === symbol) {
        return true
      }
    }
    return false
  }, [watchList])

  const toggleWatchList = useCallback((stock) => {
    setStock(stock);
  }, []);

  useEffect(() => {
    if (stock !== null) {
      let index = -1;
      for (let i = 0; i < watchList.length; i++) {
        if (watchList[i].symbol === stock.symbol) {
          index = i;
          i = watchList.length;
        }
      }
      //console.log(index);
      if (index >= 0) {
        setWatchList((curr) => [
          ...curr.slice(0, index),
          ...curr.slice(index + 1),
        ]);
      } else {
        setWatchList((curr) => [...curr, stock]);
      }
    }
  }, [stock]);

  const clearWatchList = useCallback(() => setWatchList([]), []);

  return (
    <StockContext.Provider
      value={{ watchList, toggleWatchList, clearWatchList, isWatched }}
    >
      {props.children}
    </StockContext.Provider>
  );
}
