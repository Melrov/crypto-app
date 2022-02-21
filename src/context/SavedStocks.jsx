import React, { createContext, useCallback, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const SavedStocksContext = createContext(null);

function SavedStocksProvider(props) {
  const [currentStock, setCurrentStock] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [querry, setQuerry] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [quoteSymbol, setQuoteSymbol] = useState(null);
  const [historySymbol, setHistorySymbol] = useState(null);
  const {
    data: profileData,
    error: profileError,
    loading: profileLoading,
  } = useFetch("profile", null, querry, null);

  const {
    data: quoteData,
    error: quoteError,
    loading: quoteLoading,
  } = useFetch("quote", null, quoteSymbol, null);
  const {
    data: historyData,
    error: historyError,
    loading: historyLoading,
  } = useFetch("historical-chart/5min/" + symbol, null, historySymbol, null);

  const getStock = useCallback(
    (symbol) => {
      for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].symbol === symbol) {
          setCurrentStock(stocks[i]);
          return;
        }
      }
      setSymbol(symbol);
      setQuerry(symbol);
    },
    [stocks]
  );

  useEffect(() => {
    setTimeout(() => {
      setQuoteSymbol(querry);
    }, 200);

    setTimeout(() => {
      setHistorySymbol(querry);
    }, 500);
  }, [querry]);

  useEffect(() => {
    if (
      profileData &&
      quoteData &&
      historyData &&
      profileData[0].symbol === symbol &&
      !profileError &&
      quoteData[0].symbol === symbol &&
      !quoteError
    ) {
      setStocks((curr) => [
        ...curr,
        {
          symbol: profileData[0].symbol,
          profileData: profileData[0],
          quoteData: quoteData[0],
          historyData: historyData.map(stock => stock.close),
        },
      ]);
      setCurrentStock({
        symbol: profileData[0].symbol,
        profileData: profileData[0],
        quoteData: quoteData[0],
        historyData: historyData.map(stock => stock.close),
      });
    }
  }, [profileData, quoteData, historyData]);

  return (
    <SavedStocksContext.Provider value={{ currentStock, getStock }}>
      {props.children}
    </SavedStocksContext.Provider>
  );
}

export default SavedStocksProvider;
