import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./header|footer/Header"
import Home from "./0-home/Home";
import Markets from "./1-markets/Markets";
import Watchlist from "./2-watchlist/Watchlist"
import Track from "./3-portfolio/Track"
import News from "./4-news/News"
import Account from "./5-account/Account"
import Footer from "./header|footer/Footer"
import { useState, useEffect, Fragment } from "react/cjs/react.development";

function App() {
  const[watchlist, setWatchlist] = useState([])
  const[sortby, setSortby] = useState('rank')
  const[up, setUp]=useState(true)
  
  useEffect(() => {
    fetch('https://cryptomatic-app-json.herokuapp.com/cryptos')
    .then(r=>r.json())
    .then((coins) => setWatchlist(coins))
  }, [])
  function handleAddWatchlist (newItem) {
    setWatchlist([...watchlist, newItem])
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
  const visibleWatchlist = up? watchlist.sort((coinA, coinB) => {
    if (sortby === 'rank') {
      return coinA.market_cap_rank - coinB.market_cap_rank
    }
    else if (sortby === 'change') {
      return coinB.price_change_percentage_24h - coinA.price_change_percentage_24h
    }
    else if (sortby === 'name') {
      return coinA.name.localeCompare(coinB.name)
    }
    // eslint-disable-next-line 
  }) : watchlist.sort((coinA, coinB) => {
    if (sortby === 'rank') {
      return coinA.market_cap_rank - coinB.market_cap_rank
    }
    else if (sortby === 'change') {
      return coinB.price_change_percentage_24h - coinA.price_change_percentage_24h
    }
    else if (sortby === 'name') {
      return coinA.name.localeCompare(coinB.name)
    }
  }).reverse()

    let location = useLocation();
    console.log(location);

  return (
    <Fragment>
        {(location.pathname === '/') ? null : <Header/>}
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/markets" element={<Markets watchlist={visibleWatchlist} onWatchlist={handleAddWatchlist} onDeleteWatchlist={handleDeleteWatchlist}/>} />
            <Route path="/watchlist" element={<Watchlist up={up} setUp={setUp} handleDelete={handleDelete} sortby={sortby} setSortby={setSortby} watchlist={watchlist}/>} />
            <Route path="/portfolio" element={<Track/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/account" element={<Account/>} />
          </Routes>
          {(location.pathname === '/') ? null : <Footer/>}
    </Fragment>
  );
}
export default App;