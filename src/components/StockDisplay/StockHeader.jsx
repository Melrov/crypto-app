import React from "react";
import styled from "styled-components";

const HeaderCon = styled.div`
  display: flex;
  border-top: 7px solid green;
  border-radius: 0px;
  padding-top: 8px;
  margin-bottom: 12px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(201 201 201);
`;

const TextCon = styled.div`
  display: flex;
  flex-direction: column;
`;


const LogoImg = styled.img`
  height: 84px;
  margin-right: 14px;
`

const Ticker = styled.span`
  font-weight: bold;
  font-size: 18px;
`
const Exchange = styled.span`
  font-size: 14px;
  color: gray;
`
const Price = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-right: 6px;
`
const Percent = styled.span`
  font-size: 19px;
  color: ${props => props.change > 0
    ? "green"
    : props.change < 0
      ? "red"
      : "black"};
`
const PriceCon = styled.div`
  margin-top: 4px;
`

function StockHeader({ profileData, quoteData }) {
  return (
    <HeaderCon change={parseFloat(quoteData.change)}>
      <LogoImg src={profileData.image} />
      <div>
        <TextCon>
          <Ticker>{`${quoteData.name} (${quoteData.symbol
            })`}</Ticker>
          <Exchange>{`
            ${quoteData.exchange}: Currency in ${profileData.currency
            }
            `}</Exchange>
        </TextCon>

        <PriceCon>
          <Price>{`${parseFloat(quoteData.price)} `}</Price>
          <Percent change={parseFloat(quoteData.change)}>{`
            ${parseFloat(quoteData.change)}
            (${parseFloat(quoteData.changesPercentage)}%)
            `}</Percent>
        </PriceCon>
      </div>
      <div></div>
    </HeaderCon>
  );
}

export default StockHeader;
