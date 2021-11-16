import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header|footer/Header"
import Home from "./0-home/Home";
import Markets from "./1-markets/Markets";
import Portfolio from "./2-portfolio/Portfolio"
import TradingBot from "./3-tradingBot/TradingBot"
import News from "./4-news/News"
import Account from "./5-account/Account"
import Footer from "./header|footer/Footer"
import { useState, useEffect } from "react/cjs/react.development";

function App() {
  const[watchlist, setWatchlist] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cryptos')
    .then(r=>r.json())
    .then((coins) => setWatchlist(coins))
  }, [])

  function handleAddWatchlist (newItem) {
    setWatchlist([...watchlist,newItem])
  }

  function handleDeleteWatchlist (deletedItem) {
    const updatedWatchlist = watchlist.filter((crypto) => crypto.id !== deletedItem.id)
    setWatchlist(updatedWatchlist)
  }
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/markets" element={<Markets watchlist={watchlist} onWatchlist={handleAddWatchlist} onDeleteWatchlist={handleDeleteWatchlist}/>} />
            <Route path="/portfolio/*" element={<Portfolio/>} />
            <Route path="/tradingBot" element={<TradingBot/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/account" element={<Account/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;