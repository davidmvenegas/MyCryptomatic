import React from 'react'
import './portfolio.css';
import { Routes, Route } from "react-router-dom";
import PortfolioHeader from './portfolio-items/PortfolioHeader'
import Watchlist from './portfolio-items/Watchlist';
import Track from './portfolio-items/Track';

function Portfolio() {
    return (
        <div>
            <PortfolioHeader/>
            <Routes>
                <Route path="/portfolio/watchlist" element={<Watchlist/>} />
                <Route path="/portfolio/track" element={<Track/>} />
            </Routes>
        </div>
    )
}

export default Portfolio
