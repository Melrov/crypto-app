import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://www.alphavantage.co/query?";
//const apikey = "02W8J9WJSPINAXYO"
//ranout of calls
//const apikey = "9192a25c33cf0d066ddf9199bab8875e";
const apikey = "edbef1b782b1e49a33bcc1d8d8c0a22a";
let times = 10;

export default function useFetch(func, query, symbol, exchange, limit) {
  //console.log('useFetch')
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect");

    async function init() {
      console.log("api call");
      setData(null);
      setError(null);
      setLoading(true);
      try {
        const res = await axios({
          baseURL: "https://financialmodelingprep.com/api/v3/" + func,
          params: {
            query: query,
            symbol: symbol,
            exchange: exchange,
            limit, limit,
            apikey: apikey,
          },
        });
        console.log(res);

        if (res.data["Error Message"]) {
          throw res.data["Error Message"];
        }
        if (res.data.bestMatches) {
          setData(res.data.bestMatches);
        } else if (res.data["Global Quote"]) {
          setData(res.data["Global Quote"]);
        } else {
          setData(res.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    console.log(!!func, query || symbol, times > 0);
    if (func && (query || symbol) && times > 0) {
      if (func === "profile" || func === "quote") {
        func = func + "/" + symbol;
        symbol = null;
      }
      init();
      times--;
    }
  }, [func, query, symbol, exchange]);

  return { data, error, loading };
}
// api.coincap.io/v2/assets?search=doge

// https://www.alphavantage.co/documentation/
// 02W8J9WJSPINAXYO

//https://financialmodelingprep.com/api/v3/historical-chart/30min/AAPL?apikey=9192a25c33cf0d066ddf9199bab8875e
