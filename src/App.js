import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header|footer/Header"
import Home from "./0-home/Home";
import Markets from "./1-markets/Markets";
import Portfolio from "./2-portfolio/Portfolio"
import TradingBot from "./3-tradingBot/TradingBot"
import News from "./4-news/News"
import Account from "./5-account/Account"
import Footer from "./header|footer/Footer"

function App() {
  const[watchlist, setWatchlist] = useState([])
  const[sortby, setSortby] = useState('rank')
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
  
  function handleDelete(deletedItem) {
    const updatedWatchlist=watchlist.filter((c) => c.id !== deletedItem.id)
    setWatchlist(updatedWatchlist)
  }

    // eslint-disable-next-line
  const visibleWatchlist = watchlist.sort((coinA, coinB) => {
    if (sortby === 'rank') {
      return coinA.market_cap_rank - coinB.market_cap_rank
    }
    else if (sortby === 'change') {
      return coinB.price_change_percentage_24h - coinA.price_change_percentage_24h
    }
    else if (sortby === 'name') {
      return coinA.name.localeCompare(coinB.name)
    }
  })
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/markets" element={<Markets  watchlist={visibleWatchlist} onWatchlist={handleAddWatchlist} onDeleteWatchlist={handleDeleteWatchlist}/>} />
            <Route path="/portfolio/*" element={<Portfolio handleDelete={handleDelete} sortby={sortby} setSortby={setSortby} watchlist={watchlist}/>} />
            <Route path="/tradingBot" element={<TradingBot/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/account" element={<Account/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;