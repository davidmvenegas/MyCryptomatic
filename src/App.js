import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header|footer/Header"
import Home from "./0-home/Home";
import Markets from "./1-markets/Markets";
import Favorites from "./2-favorites/Favorites"
import TradingBot from "./3-tradingBot/TradingBot"
import News from "./4-news/News"
import Account from "./5-account/Account"
import Footer from "./header|footer/Footer"

function App() {
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/markets" element={<Markets/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/tradingBot" element={<TradingBot/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/account" element={<Account/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;