import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./context/UserContext";
import StockProvider from "./context/StockContext";
import SearchProvider from "./context/SearchContext";
import SavedStocks from "./context/SavedStocks";
import SavedStocksProvider from "./context/SavedStocks";

ReactDOM.render(
  <SavedStocksProvider>
    <SearchProvider>
      <StockProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </StockProvider>
    </SearchProvider>
  </SavedStocksProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
