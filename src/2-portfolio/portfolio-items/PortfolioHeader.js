import React from 'react'
import { NavLink } from 'react-router-dom'
import './portfolioHeader.css'

function PortfolioHeader() {
    return (
        <div>
            <div className="portfolio-main-buttons">
                <NavLink to="/portfolio/watchlist"><button activeClassName="active-header" className="portfolio-button portfolio-watchlist-button">Watchlist</button></NavLink> 
                <NavLink to="/portfolio/track"><button activeClassName="active-header" className="portfolio-button portfolio-track-button">Track</button></NavLink> 
            </div>
        </div>
    )
}

export default PortfolioHeader
