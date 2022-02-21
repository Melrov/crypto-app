import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import Menu from "./components/Menu";
import StockDisplay from "./components/StockDisplay/StockDisplay";
import LoginPage from "./components/Login/LoginPage";
import WatchListPage from "./components/WatchListPage/WatchListPage";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/stock/:symbol" element={<StockDisplay />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </Router>
  );
}

// https://docs.coincap.io/
// api.coincap.io/v2/assets?search=doge
export default App;
