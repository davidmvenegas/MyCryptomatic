import React from 'react';
import './markets.css';
import Coin from './Coin'

function Markets() {
    return (
        <div>
            <div className="markets-container">
                <form>
                    <input className="markets-search-form" type="text" placeholder="Search for Crypto..." />
                </form>
                <div className="coins-container">
                    <Coin/>
                    <Coin/>
                    <Coin/>
                    <Coin/>
                    <Coin/>
                    <Coin/>
                    <Coin/>
                    <Coin/>
                    <Coin/>
                </div>
            </div>
        </div>
    )
}

export default Markets;