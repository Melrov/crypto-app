import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import StockChart from "./StockChart";
import StockHeader from "./StockHeader";
import StockTable from "./Table";

function StockDisplay() {
  const { symbol } = useParams();
  const {
    data: globalData,
    error: globalError,
    loading: globalLoading,
  } = useFetch("GLOBAL_QUOTE", null, symbol);
  const {
    data: overData,
    error: overError,
    loading: overLoading,
  } = useFetch("OVERVIEW", null, symbol);
  console.log(globalData, globalError, globalLoading);
  console.log(overData, overError, overLoading);
  return (
    <>
      {globalData && overData && (
        <div>
          <StockHeader globalData={globalData} overData={ overData["Symbol"] !== undefined ? overData : undefined } />
          <StockTable globalData={globalData} overData={ overData["Symbol"] !== undefined ? overData : undefined } />
          <StockChart />
        </div>
      )}
    </>
  );
}

export default StockDisplay;
