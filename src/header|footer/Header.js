import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-container">
                <Link to="/"><h1>Cryptomatic</h1></Link>
                <ul>
                    <li><Link exact to="/markets"><h1>Markets</h1></Link></li>
                    <li><Link to="/favorites"><h1>Favorites</h1></Link></li>
                    <li><Link to="/tradingBot"><h1>Trading Bot</h1></Link></li>
                    <li><Link to="/news"><h1>News</h1></Link></li>
                    <li><Link to="/account"><h1>Account</h1></Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;