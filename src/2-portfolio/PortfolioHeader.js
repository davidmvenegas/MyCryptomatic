import React from 'react'
import { NavLink } from 'react-router-dom'
import './portfolioHeader.css'

function PortfolioHeader() {
    return (
        <div>
            <div className="portfolio-main-buttons">
                <div>
                    <NavLink to="/portfolio/watchlist" activeClassName="active-portfolio"><button className="portfolio-button">Watchlist</button></NavLink>
                    <NavLink to="/portfolio/track" activeClassName="active-portfolio"><button className="portfolio-button">Track</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default PortfolioHeader
