import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
    return (
        <header>
            <div className="header-container">
                <NavLink exact to="/"><img className="header-logo-img" src="./link-icon.png" alt="cryptomatic_logo"/><h1 className="header-logo">Cryptomatic</h1></NavLink>
                <ul className="header-menu">
                    <li className="header-item"><NavLink to="/markets" activeClassName="active" className="header-link"><h1>Markets</h1></NavLink></li>
                    <li className="header-item"><NavLink to="/favorites" activeClassName="active" className="header-link"><h1>Favorites</h1></NavLink></li>
                    <li className="header-item"><NavLink to="/tradingBot" activeClassName="active" className="header-link"><h1>Trading Bot</h1></NavLink></li>
                    <li className="header-item"><NavLink to="/news" activeClassName="active" className="header-link"><h1>News</h1></NavLink></li>
                    <li className="account-btn"><NavLink to="/account" activeClassName="active" className="header-link"><FontAwesomeIcon icon={faUser}/></NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;