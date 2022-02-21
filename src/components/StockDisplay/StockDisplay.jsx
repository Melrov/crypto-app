import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SavedStocksContext } from "../../context/SavedStocks";
import useFetch from "../../hooks/useFetch";
import NewsDisplay from "./NewsDisplay";
import StockChart from "./StockChart";
import StockHeader from "./StockHeader";
import StockInfo from "./StockInfo";
import StockTable from "./StockTable";

const StockDisplayCon = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1230px) {
    display: block;
  }
`;

const MiddleLine = styled.div`
  width: 3%;
  border-right: 1px solid gray;
  position: relative;
  left: -1%;
`;

const TopCon = styled.div`
  display: flex;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;
const InfoCon = styled.div`
  max-width: 1200px;
  margin: 10px;
`;

const NewsCon = styled.div``;

function StockDisplay() {
  const { symbol } = useParams();
  const { currentStock, getStock } = useContext(SavedStocksContext);

    useEffect(() => {
        getStock(symbol)
    }, [symbol])

    useEffect(() => {
        console.log(currentStock)
    }, [currentStock])



  const newsData = [
    {
      category: "company",
      datetime: 1631179227,
      headline:
        "Tencent Leads $60 Billion Selloff As Gaming Crackdown Fears Grow",
      id: 70401756,
      image:
        "https://s.yimg.com/ny/api/res/1.2/GqxZIjDgjUk3HYz.1cj1Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/CCVJvo02fUqKyNGXcMx8bQ--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/e7c875c531c474dbb2ae27414da1e419",
      related: "AAPL",
      source: "Yahoo",
      summary:
        "(Bloomberg) -- Tencent Holdings Ltd. and Netease Inc. shed more than $60 billion of value as investor fears grow that Chinese regulators are preparing to tighten their grip dramatically on the world’s largest gaming industry.Chinese regulators summoned industry executives to a Wednesday meeting to instruct them to break their “solitary focus” on profit and prevent minors from becoming addicted to games, according to the official Xinhua News Agency. Regulators also said there will be a temporary",
      url: "https://finnhub.io/api/news?id=84c5b4de755ccc3e00ee9c4b208f0861aa73883903a77d5ad317762fbd20a9ee",
    },
    {
      category: "company",
      datetime: 1631228365,
      headline:
        "Sheryl Sandberg Says Small Businesses Online Revolution Will Continue",
      id: 70428593,
      image:
        "https://s.yimg.com/ny/api/res/1.2/ETDo80erXHJuxOCwaoq_Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/WV6Ulbr8mG0eHt3bRj0gwA--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/d20da2fd0206df527f593dffa6362437",
      related: "AAPL",
      source: "Yahoo",
      summary:
        "(Bloomberg) -- Facebook Inc. Chief Operating Officer Sheryl Sandberg said small businesses will keep choosing the internet to reach their customers even after the pandemic subsides and brick-and-mortar advertising options become more useful.“That digital transformation will continue to happen,” Sandberg said in an interview with Bloomberg News. “It might happen at a slightly slower rate but I think that the transformation and people moving to be online is going to continue to happen.”The Menlo P",
      url: "https://finnhub.io/api/news?id=19a06062957f933704aa32735cf95caa963aec8b1d87db5fc073407a65ab9b7c",
    },
    {
      category: "company",
      datetime: 1631227222,
      headline:
        "Apple : MEDIA-Apple fires senior engineering program manager Ashley Gjøvik for allegedly leaking information - Verge",
      id: 70431277,
      image: "",
      related: "AAPL",
      source: "Finnhub",
      summary:
        "-- Source link: https://bit.ly/2YxCceL -- Note: Reuters has not verified this story and does notvouch for its accuracy ... | September 10, 2021",
      url: "https://finnhub.io/api/news?id=efe075d666077e41df14ddef4d2601e1e0f3e98cf44dd8e55ac4fd6dfda7c331",
    },
    {
      category: "company",
      datetime: 1631225580,
      headline:
        "Apple: Things Looking up Ahead of Anticipated September iPhone 13",
      id: 70447369,
      image:
        "https://www.nasdaq.com/sites/acquia.prod/files/2019-05/0902-Q19%20Total%20Markets%20photos%20and%20gif_CC8.jpg?654147703",
      related: "AAPL",
      source: "Nasdaq",
      summary:
        'After a stodgy period, Apple (AAPL) stock has been gaining momentum recently. With shares up 21% over the past 3 months, the year-to-date performance has materially improved. \n\n\n\nThere’s also a big catalyst ahead too, which Wedbush’ Daniel Ives believes is partly what makes the giant from Cupertino a “top tech name to own.”\n\n\n\n"The invites are out; iPhone 13 launch around the corner next week," Ives noted.\n\n\n\nIves’ “enhanced confidence” in the iPhone 13 product cycle is based on Asia supply chain checks, in which the iPhone 13 makes up 35%-45% of the total 130-150 million iPhone builds in Q3.\n\n\n\nSpecs wise, Ives is confident Apple fans can look forward to an iPhone 13 boasting an “eye-popping” 1 terabyte storage option. This is double the amount of the current 512 GB capacity on offer with the highest Pro unit. The new model and will also include several other “key enhancements” with all iPhone 13 models possessing Lidar capabilities.\n\n\n\nThere’s “massive pent-up demand” amongst Apple’s installed base, says the analyst, pointing out that based on his analysis, over the past 3.5 years, roughly 250 million of the current 975 million iPhone owners have yet to upgrade their handsets.\n\n\n\nElsewhere, Ives thinks Apple remains fairly insulated from the regulators’ ire with all things Big Tech, believing the App Store remains a “very defendable moat both in the courts and in the Beltway.” Facebook and Google are both more likely to get caught in the “anti-trust spider web.”\n\n\n\nApple remains the “favorite large cap tech name to play the 5G transformational cycle,” and as such, Ives sticks with an Outperform (i.e. Buy) rating and $185 price target. The implication for investors? Upside of 20%. (To watch Ives’ track record, click here)\n\n\n\nSo, that’s the Wedbush view, what does the rest of the Street have in mind for Apple? The stock boasts a Moderate Buy consensus rating based on 17 Buys vs. 6 Holds. The average price target is a more modest $166.64, representing 12-month returns of 8%. (See Apple stock analysis on TipRanks)\n\n\n\n\n\n\n\nTo find good ideas for stocks trading at attractive valuations, visit TipRanks’ Best Stocks to Buy, a newly launched tool that unites all of TipRanks’ equity insights.\n\n\n\nDisclaimer: The opinions expressed in this article are solely those of the featured analyst. The content is intended to be used for informational purposes only. It is very important to do your own analysis before making any investment.',
      url: "https://finnhub.io/api/news?id=41cc682cc72336b4c4823e4d369ec7731a97a386428fbbb957839819ca5bceee",
    },
    {
      category: "company",
      datetime: 1631223360,
      headline:
        "Epic Games asks Apple to allow Fortnite's re-release in South Korea after passage of new law",
      id: 70447370,
      image:
        "https://www.nasdaq.com/sites/acquia.prod/files/2021-09-10T013905Z_1_ET1_RTRLXPP_2_LYNXPACKAGER.JPG?1390060399",
      related: "AAPL",
      source: "Nasdaq",
      summary:
        '"Fortnite" creator Epic Games has asked iPhone maker Apple to restore its Fortnite developer account and intends to re-release the popular game on iOS in South Korea, offering both Epic and Apple payment side-by-side, it said in a tweet.',
      url: "https://finnhub.io/api/news?id=25e422ba2aa635b5b6536b2578e7b75ac9e4265c361d7d5e0177e37b3d3da557",
    },
  ];
  return (
    <StockDisplayCon>
      {currentStock && (
        <InfoCon>
          <StockHeader
            profileData={currentStock.profileData}
            quoteData={currentStock.quoteData}
            newsData={newsData}
            historyData={currentStock.historyData}
          />

          <StockChart chartData={currentStock.historyData}/>
          <TopCon>
            <StockTable profileData={currentStock.profileData} quoteData={currentStock.quoteData} />
            <MiddleLine />
            <StockInfo profileData={currentStock.profileData} />
          </TopCon>
          <NewsCon>
            <NewsDisplay newsData={newsData} />
          </NewsCon>
        </InfoCon>
      )}
    </StockDisplayCon>
  );
}

export default StockDisplay;
