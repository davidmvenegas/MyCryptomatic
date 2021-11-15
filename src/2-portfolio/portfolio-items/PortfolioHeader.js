import React from 'react'
import { NavLink } from 'react-router-dom'
import './portfolioHeader.css'

function PortfolioHeader() {
    return (
        <div>
            <div className="portfolio-main-buttons">
                <NavLink to="/portfolio/watchlist"><button className="portfolio-watchlist-button">Watchlist</button></NavLink> 
                <NavLink to="/track"><button className="portfolio-track-button">Track</button></NavLink> 
            </div>
        </div>
    )
}

export default PortfolioHeader
