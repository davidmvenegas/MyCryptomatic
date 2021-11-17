import React from 'react'
import './portfolio.css';
import { Routes, Route } from "react-router-dom";
import PortfolioHeader from './PortfolioHeader'
import Watchlist from './portfolio-items/Watchlist';
import Track from './portfolio-items/Track';

function Portfolio({watchlist, sortby, setSortby}) {
    return (
        <div>
            <PortfolioHeader/>
            <Routes>
                <Route path="/watchlist" element={<Watchlist sortby={sortby} setSortby={setSortby} watchlist={watchlist}/>} />
                <Route path="/track" element={<Track/>} />
            </Routes>
        </div>
    )
}

export default Portfolio
