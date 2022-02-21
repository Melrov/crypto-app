import React, { useContext, useEffect, useMemo } from "react";
import styled from "styled-components";
import { StockContext } from "../../context/StockContext";
import StockChart from "../StockDisplay/StockChart";
import WatchListStockDisplay from "./WatchListStockDisplay";

const Con = styled.div`
  display: flex;
`;

const StocksCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 25%;
`;
const ChartCon = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
const SummaryCon = styled.div`
  display: flex;
`;
const SummaryItem = styled.div``;
const Price = styled.span`
  color: ${(props) => (props.change >= 0 ? "green" : "red")};
`;

function WatchListPage() {
  const { watchList } = useContext(StockContext);

  let watchListChartArr = useMemo(() => {
    if(watchList.length > 0){
      let arr = watchList[0].historyData
      for(let i = 1; i < watchList.length; i++){
        for(let j = 0; j < watchList[i].historyData.length; j++){
          arr[j] += watchList[i].historyData[j]
        }
      }
      return arr
    }
    return []
  },[watchList] )

  const oneDay = useMemo(() => {
    let total = 0;
    watchList.map((stock) => {
      total += stock.quoteData.changesPercentage;
    });
    return total;
  }, [watchList]);
  const yearDay = useMemo(() => {
    let low = 0;
    let curr = 0;
    watchList.map((stock) => {
      low += stock.quoteData.yearLow;
      curr += stock.quoteData.price;
    });
    return curr/low * 100;
  }, [watchList]);

  return (
    <Con>
      <StocksCon>
        {watchList.length > 0 &&
          watchList.map((stock) => {
            return <WatchListStockDisplay key={stock.symbol + stock.quoteData.dayLow} stock={stock} />;
          })}
      </StocksCon>
      <ChartCon>
        <SummaryCon>
          <SummaryItem>
            <div>
              <span>1 Day Return</span> <br />
              <Price change={oneDay}>{`${parseInt(oneDay * 100)/100}%`}</Price>
            </div>
          </SummaryItem>
          <SummaryItem>
            <div>
              <span>1 Year Return</span> <br />
              <Price change={yearDay}>{`${parseInt(yearDay * 100)/100}%`}</Price>
            </div>
          </SummaryItem>
        </SummaryCon>
        <StockChart chartData={watchListChartArr}/>
      </ChartCon>
    </Con>
  );
}

export default WatchListPage;
