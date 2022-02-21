import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { StockContext } from "../../context/StockContext";
import { UserContext } from "../../context/UserContext";

const HeaderCon = styled.div`
  display: flex;
  border-top: 7px solid ${(props) => (props.change > 0 ? "green" : "red")};
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
`;

const Ticker = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
const Exchange = styled.span`
  font-size: 14px;
  color: gray;
`;
const Price = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-right: 6px;
`;
const Percent = styled.span`
  font-size: 19px;
  color: ${(props) =>
    props.change > 0 ? "green" : props.change < 0 ? "red" : "black"};
`;
const PriceCon = styled.div`
  margin-top: 4px;
`;
const WatchListBtn = styled.button`
  height: 32px;
  border-radius: 18px;
  background-color: ${(props) =>
    props.isWatched ? "rgb(98 98 255)" : "white"};
  border: 2px solid rgb(98 98 255);
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 0px;
  margin-left: 8px;
  color: ${(props) => (props.isWatched ? "white" : "rgb(98 98 255)")};
  &:hover {
    background-color: ${(props) =>
      props.isWatched ? "rgb(255,0,0)" : "rgb(98 98 255)"};
    color: white;
  }
`;

function StockHeader({ profileData, quoteData, newsData, historyData }) {
  const { watchList, toggleWatchList, isWatched } = useContext(StockContext);
  const { activeUser } = useContext(UserContext);

  const watchListBtn = useCallback(() => {
    toggleWatchList({
      symbol: quoteData.symbol,
      quoteData: quoteData,
      profileData: profileData,
      newsData: newsData,
      historyData: historyData
    });
  }, [activeUser, quoteData]);

  return (
    <HeaderCon change={parseFloat(quoteData.change)}>
      <LogoImg src={profileData.image} />
      <div>
        <TextCon>
          <Ticker>{`${quoteData.name} (${quoteData.symbol})`}</Ticker>
          <Exchange>{`
            ${quoteData.exchange}: Currency in ${profileData.currency}
            `}</Exchange>
        </TextCon>

        <PriceCon>
          <Price>{`${parseFloat(quoteData.price)} `}</Price>
          <Percent change={parseFloat(quoteData.change)}>{`
            ${parseInt(quoteData.change * 100) / 100}
            (${parseInt(quoteData.changesPercentage * 100) / 100}%)
            `}</Percent>
        </PriceCon>
      </div>
      {activeUser && (
        <WatchListBtn
          isWatched={isWatched(quoteData.symbol)}
          onClick={watchListBtn}
        >
          {isWatched(quoteData.symbol)
            ? "Remove from WatchList"
            : "Add to WatchList"}
        </WatchListBtn>
      )}
      <div></div>
    </HeaderCon>
  );
}

export default StockHeader;
