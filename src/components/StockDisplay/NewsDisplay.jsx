import React from "react";
import styled from "styled-components";

const NewsCon = styled.div`
  display: flex;
  flex-direction: column;
`;
const NewsArtical = styled.a`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  background-color: rgb(201 201 201);
  border-radius: 10px;
  text-decoration: none;
`;
const NewsImg = styled.img`
  width: calc(30% - 20px);
  padding: 10px;
  border-radius: 16px;
`;
const NewsInfoCon = styled.div`
  width: 70%;
  padding-left: 10px;
  color: black;
`;
const NewsHeadLine = styled.h2`
  margin-top: 0px;
  margin-bottom: 3px;
`;
const NewsSource = styled.span`
  font-weight: bold;
`;
const NewsSummary = styled.p``;

function NewsDisplay({ newsData }) {
  return (
    <NewsCon>
      {newsData.map((item) => {
        return (
          <NewsArtical key={item.id} href={item.url}>
            <NewsImg src={item.image} />
            <NewsInfoCon>
              <NewsHeadLine>{item.headline}</NewsHeadLine>
              <NewsSource>Source: {item.source}</NewsSource>
              <NewsSummary>{item.summary}</NewsSummary>
            </NewsInfoCon>
          </NewsArtical>
        );
      })}
    </NewsCon>
  );
}

export default NewsDisplay;
