import React from "react";
import styled from "styled-components";

const HeaderCon = styled.div`
  border-top: 7px solid ${props => props.change > 0 ? 'green' : props.change < 0 ? 'red' : 'black'};
  border-radius: 0px;
  margin: 10px;
  padding-top: 8px;
`;

const TextCon = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceColor = styled.span`
  color: ${ props => props.change > 0
    ? "green"
    : props.change < 0
    ? "red"
    : "black"};
`;

function StockHeader({ globalData, overData }) {
  return (
    <HeaderCon change={parseFloat(globalData["09. change"])}>
      <div>
        <TextCon>
          <span>{`${overData ? overData.Name : "N/A"} (${
            globalData["01. symbol"]
          })`}</span>
          <span>{`
            ${overData ? overData.Exchange : "N/A"}: Currency in ${
            overData ? overData.Currency : "N/A"
          }
            `}</span>
        </TextCon>

        <div>
          <span>{`${parseFloat(globalData["05. price"])} `}</span>
          <PriceColor change={parseFloat(globalData["09. change"])}>{`
            ${parseFloat(globalData["09. change"])}
            (${globalData["10. change percent"]})
            `}</PriceColor>
        </div>
      </div>
      <div></div>
    </HeaderCon>
  );
}

export default StockHeader;
