import axios from 'axios'
import { useEffect, useState } from 'react'

const baseUrl = 'https://www.alphavantage.co/query?'
const apikey = "02W8J9WJSPINAXYO"
let times = 5

export default function useFetch(func, keywords, symbol) {
    //console.log('useFetch')
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('useEffect')

        async function init() {
            console.log("api call")
            setData(null)
            setError(null)
            setLoading(true)
            try {
                let url = baseUrl + "function=" + func
                url += keywords ? '&keywords=' + keywords : ""
                url += symbol ? '&symbol=' + symbol : ""
                url += "&apikey=" + apikey
                //console.log(url)
                const res = await axios({baseURL: 'https://www.alphavantage.co/query', params: {
                    function: func,
                    symbol: symbol,
                    keywords: keywords,
                    apikey: apikey
                }})
                console.log(res)
                
                if (res.data["Error Message"]) {
                    throw res.data['Error Message']
                }
                if(res.data.bestMatches){
                    setData(res.data.bestMatches)
                }else if(res.data["Global Quote"]){
                    setData(res.data["Global Quote"])
                }
                else{
                    setData(res.data)
                }

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        console.log(!!func, !!keywords, times > 0)
        if (func && (keywords || symbol) && times > 0) {
                init()
                times--
        }
    }, [func, keywords, symbol])

    return { data, error, loading }
}
// api.coincap.io/v2/assets?search=doge

// https://www.alphavantage.co/documentation/
// 02W8J9WJSPINAXYO