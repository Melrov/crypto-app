import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import NewsDisplay from "./NewsDisplay";
import StockChart from "./StockChart";
import StockHeader from "./StockHeader";
import StockInfo from "./StockInfo";
import StockTable from "./StockTable";

const StockDisplayCon = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 1230px){
        display: block;
    }
`

const MiddleLine = styled.div`
width: 3%;
border-right: 1px solid gray;
position: relative;
left: -1%;
`

const TopCon = styled.div `
    display: flex;
    @media (max-width: 1140px){
        flex-direction: column;
    }
`
const InfoCon = styled.div `
    max-width: 1200px;
    margin: 10px;
`

const NewsCon = styled.div`

`

function StockDisplay() {
    // const { symbol } = useParams();
    // const {
    //     data: profileData,
    //     error: profileError,
    //     loading: profileLoading,
    // } = useFetch("profile", null, symbol, null);
    // const {
    //     data: quoteData,
    //     error: quoteError,
    //     loading: quoteLoading,
    // } = useFetch("quote", null, symbol, null);
    // console.log(profileData, profileError, profileLoading);
    // console.log(quoteData, quoteError, quoteLoading);
    const profileData = [{
        "symbol": "AAPL",
        "price": 167.3,
        "beta": 1.187468,
        "volAvg": 101533156,
        "mktCap": 2730235789312,
        "lastDiv": 0.88,
        "range": "116.21-182.94",
        "changes": -1.5800018,
        "companyName": "Apple Inc.",
        "currency": "USD",
        "cik": "0000320193",
        "isin": "US0378331005",
        "cusip": "037833100",
        "exchange": "Nasdaq Global Select",
        "exchangeShortName": "NASDAQ",
        "industry": "Consumer Electronics",
        "website": "https://www.apple.com",
        "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.",
        "ceo": "Mr. Timothy Cook",
        "sector": "Technology",
        "country": "US",
        "fullTimeEmployees": "100000",
        "phone": "14089961010",
        "address": "1 Apple Park Way",
        "city": "Cupertino",
        "state": "CALIFORNIA",
        "zip": "95014",
        "dcfDiff": 89.92,
        "dcf": 169.372,
        "image": "https://financialmodelingprep.com/image-stock/AAPL.png",
        "ipoDate": "1980-12-12",
        "defaultImage": false,
        "isEtf": false,
        "isActivelyTrading": true,
        "isAdr": false,
        "isFund": false
    }]

    const quoteData = [{
        "symbol": "AAPL",
        "name": "Apple Inc.",
        "price": 149.55000000,
        "changesPercentage": 0.38934135,
        "change": 0.58000183,
        "dayLow": 148.75000000,
        "dayHigh": 151.41000000,
        "yearHigh": 157.26000000,
        "yearLow": 103.10000000,
        "marketCap": 2472091320320.00000000,
        "priceAvg50": 149.04265000,
        "priceAvg200": 134.71935000,
        "volume": 97750498,
        "avgVolume": 78489468,
        "exchange": "NASDAQ",
        "open": 150.63000000,
        "previousClose": 148.97000000,
        "eps": 5.10800000,
        "pe": 29.27760500,
        "earningsAnnouncement": "2021-07-27T16:30:00.000+0000",
        "sharesOutstanding": 16530199400,
        "timestamp": 1631575899
    }]

    const NewsData = [{
        "category": "company",
        "datetime": 1631179227,
        "headline": "Tencent Leads $60 Billion Selloff As Gaming Crackdown Fears Grow",
        "id": 70401756,
        "image": "https://s.yimg.com/ny/api/res/1.2/GqxZIjDgjUk3HYz.1cj1Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/CCVJvo02fUqKyNGXcMx8bQ--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/e7c875c531c474dbb2ae27414da1e419",
        "related": "AAPL",
        "source": "Yahoo",
        "summary": "(Bloomberg) -- Tencent Holdings Ltd. and Netease Inc. shed more than $60 billion of value as investor fears grow that Chinese regulators are preparing to tighten their grip dramatically on the world’s largest gaming industry.Chinese regulators summoned industry executives to a Wednesday meeting to instruct them to break their “solitary focus” on profit and prevent minors from becoming addicted to games, according to the official Xinhua News Agency. Regulators also said there will be a temporary",
        "url": "https://finnhub.io/api/news?id=84c5b4de755ccc3e00ee9c4b208f0861aa73883903a77d5ad317762fbd20a9ee"
    }, {
        "category": "company",
        "datetime": 1631228365,
        "headline": "Sheryl Sandberg Says Small Businesses Online Revolution Will Continue",
        "id": 70428593,
        "image": "https://s.yimg.com/ny/api/res/1.2/ETDo80erXHJuxOCwaoq_Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/WV6Ulbr8mG0eHt3bRj0gwA--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/d20da2fd0206df527f593dffa6362437",
        "related": "AAPL",
        "source": "Yahoo",
        "summary": "(Bloomberg) -- Facebook Inc. Chief Operating Officer Sheryl Sandberg said small businesses will keep choosing the internet to reach their customers even after the pandemic subsides and brick-and-mortar advertising options become more useful.“That digital transformation will continue to happen,” Sandberg said in an interview with Bloomberg News. “It might happen at a slightly slower rate but I think that the transformation and people moving to be online is going to continue to happen.”The Menlo P",
        "url": "https://finnhub.io/api/news?id=19a06062957f933704aa32735cf95caa963aec8b1d87db5fc073407a65ab9b7c"
    }, {
        "category": "company",
        "datetime": 1631227222,
        "headline": "Apple : MEDIA-Apple fires senior engineering program manager Ashley Gjøvik for allegedly leaking information - Verge",
        "id": 70431277,
        "image": "",
        "related": "AAPL",
        "source": "Finnhub",
        "summary": "-- Source link: https://bit.ly/2YxCceL -- Note: Reuters has not verified this story and does notvouch for its accuracy ... | September 10, 2021",
        "url": "https://finnhub.io/api/news?id=efe075d666077e41df14ddef4d2601e1e0f3e98cf44dd8e55ac4fd6dfda7c331"
    }, {
        "category": "company",
        "datetime": 1631225580,
        "headline": "Apple: Things Looking up Ahead of Anticipated September iPhone 13",
        "id": 70447369,
        "image": "https://www.nasdaq.com/sites/acquia.prod/files/2019-05/0902-Q19%20Total%20Markets%20photos%20and%20gif_CC8.jpg?654147703",
        "related": "AAPL",
        "source": "Nasdaq",
        "summary": "After a stodgy period, Apple (AAPL) stock has been gaining momentum recently. With shares up 21% over the past 3 months, the year-to-date performance has materially improved. \n\n\n\nThere’s also a big catalyst ahead too, which Wedbush’ Daniel Ives believes is partly what makes the giant from Cupertino a “top tech name to own.”\n\n\n\n\"The invites are out; iPhone 13 launch around the corner next week,\" Ives noted.\n\n\n\nIves’ “enhanced confidence” in the iPhone 13 product cycle is based on Asia supply chain checks, in which the iPhone 13 makes up 35%-45% of the total 130-150 million iPhone builds in Q3.\n\n\n\nSpecs wise, Ives is confident Apple fans can look forward to an iPhone 13 boasting an “eye-popping” 1 terabyte storage option. This is double the amount of the current 512 GB capacity on offer with the highest Pro unit. The new model and will also include several other “key enhancements” with all iPhone 13 models possessing Lidar capabilities.\n\n\n\nThere’s “massive pent-up demand” amongst Apple’s installed base, says the analyst, pointing out that based on his analysis, over the past 3.5 years, roughly 250 million of the current 975 million iPhone owners have yet to upgrade their handsets.\n\n\n\nElsewhere, Ives thinks Apple remains fairly insulated from the regulators’ ire with all things Big Tech, believing the App Store remains a “very defendable moat both in the courts and in the Beltway.” Facebook and Google are both more likely to get caught in the “anti-trust spider web.”\n\n\n\nApple remains the “favorite large cap tech name to play the 5G transformational cycle,” and as such, Ives sticks with an Outperform (i.e. Buy) rating and $185 price target. The implication for investors? Upside of 20%. (To watch Ives’ track record, click here)\n\n\n\nSo, that’s the Wedbush view, what does the rest of the Street have in mind for Apple? The stock boasts a Moderate Buy consensus rating based on 17 Buys vs. 6 Holds. The average price target is a more modest $166.64, representing 12-month returns of 8%. (See Apple stock analysis on TipRanks)\n\n\n\n\n\n\n\nTo find good ideas for stocks trading at attractive valuations, visit TipRanks’ Best Stocks to Buy, a newly launched tool that unites all of TipRanks’ equity insights.\n\n\n\nDisclaimer: The opinions expressed in this article are solely those of the featured analyst. The content is intended to be used for informational purposes only. It is very important to do your own analysis before making any investment.",
        "url": "https://finnhub.io/api/news?id=41cc682cc72336b4c4823e4d369ec7731a97a386428fbbb957839819ca5bceee"
    }, {
        "category": "company",
        "datetime": 1631223360,
        "headline": "Epic Games asks Apple to allow Fortnite's re-release in South Korea after passage of new law",
        "id": 70447370,
        "image": "https://www.nasdaq.com/sites/acquia.prod/files/2021-09-10T013905Z_1_ET1_RTRLXPP_2_LYNXPACKAGER.JPG?1390060399",
        "related": "AAPL",
        "source": "Nasdaq",
        "summary": "\"Fortnite\" creator Epic Games has asked iPhone maker Apple to restore its Fortnite developer account and intends to re-release the popular game on iOS in South Korea, offering both Epic and Apple payment side-by-side, it said in a tweet.",
        "url": "https://finnhub.io/api/news?id=25e422ba2aa635b5b6536b2578e7b75ac9e4265c361d7d5e0177e37b3d3da557"
    },]
    return (
        <StockDisplayCon>
            {profileData && (
                <InfoCon>
                    <StockHeader profileData={profileData[0]} quoteData={quoteData[0]} />
                    
                        <StockChart />
                    <TopCon>
                        <StockTable profileData={profileData[0]} quoteData={quoteData[0]} />
                        <MiddleLine />
                        <StockInfo profileData={profileData[0]} />
                    </TopCon>
                    <NewsCon>
                        <NewsDisplay NewsData={NewsData} />
                    </NewsCon>
                    
                </InfoCon>
            )}
        </StockDisplayCon>
    );
}

export default StockDisplay;
