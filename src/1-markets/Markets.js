import React from 'react';
import './markets.css';
import Coin from './Coin'

function Markets() {
    return (
        <div>
            <div className="markets-container">
                <div className="markets-top-container">
                    <form>
                        <input className="markets-search-form" type="text" placeholder="Search..." />
                    </form>
                    <h1 className="markets-marketCap">Market Cap: <span className="markets-marketCap-amount">$ 3.1</span><span className="markets-marketCap-T">T</span></h1>
                    <h1 className="markets-totalVolume">Total Volume: <span className="markets-totalVolume-amount">128.4</span><span className="markets-totalVolume-B">B</span></h1>
                    <select className="currency-type-selector" name="currency-type">
                        <option className="currency-type-item" value="AUD">AUD</option>
                        <option className="currency-type-item" value="CAD">CAD</option>
                        <option className="currency-type-item" value="CHF">CHF</option>
                        <option className="currency-type-item" value="CNY">CNY</option>
                        <option className="currency-type-item" value="EUR">EUR</option>
                        <option className="currency-type-item" value="GBP">GBP</option>
                        <option className="currency-type-item" value="HKD">HKD</option>
                        <option className="currency-type-item" value="JPY">JPY</option>
                        <option className="currency-type-item" value="NZD">NZD</option>
                        <option className="currency-type-item" value="USD" selected>USD</option>
                    </select>
                </div>
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