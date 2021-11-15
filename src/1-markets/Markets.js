import React, { useState, useEffect } from 'react';
import './markets.css';
import Coin from './Coin'

function Markets() {
    const [coins, setCoins]= useState([])
    useEffect(() => {
        fetch("https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
            "x-rapidapi-key": "572fa8d9b1mshf9f7a919d0cfd95p1486e7jsnc7ad3408ac61"
        }
    })
    .then(r => r.json())
    .then((data) =>setCoins(data))
    .catch(err => {
        console.error(err);
    });  
    }, [])
    console.log(coins)

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
                {coins.map((coin) => {
                        return <Coin key={coin.id} coin={coin}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Markets;