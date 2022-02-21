import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StockContext } from "../../context/StockContext";
import StockChart from "../StockDisplay/StockChart";

const StockCon = styled.div`
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 5px;
  background-color: gainsboro;
  border-radius: 10px;
  margin: 3px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const InfoCon = styled.div`
  font-size: 1.17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Price = styled.span`
  color: ${(props) => (props.change > 0 ? "green" : "red")};
  font-size: 17px;
  padding-right: 5px;
`;

const ChartCon = styled.div`
  width: 60%;
`;

function WatchListStockDisplay({ stock }) {
    const navigate = useNavigate()
  return (
    <StockCon onClick={() => navigate('/stock/' + stock.symbol)}>
      <InfoCon>
        <span>{stock.symbol}</span>
      </InfoCon>
      <ChartCon>
        <StockChart chartData={stock.historyData}/>
      </ChartCon>
      <InfoCon>
        <Price change={stock.quoteData.changesPercentage}>{`${
          parseInt(stock.quoteData.price * 100) / 100
        }`}</Price>
        <Price change={stock.quoteData.changesPercentage}>{`${
          parseInt(stock.quoteData.changesPercentage * 100) / 100
        }%`}</Price>
      </InfoCon>
    </StockCon>
  );
}

export default WatchListStockDisplay;
