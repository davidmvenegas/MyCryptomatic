import React, { useState, useEffect } from 'react';
import './markets.css';
import Coin from './Coin'

function Markets() {
    const [coins, setCoins]= useState([])
    const[selectedCurrency,setSelectedCurrency]=useState('usd')
    const [sign, setSign] = useState('$')

    useEffect(() => {
        fetch(`https://coingecko.p.rapidapi.com/coins/markets?vs_currency=${selectedCurrency}&page=1&per_page=500&order=market_cap_desc`, {
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
    // eslint-disable-next-line
    }, [handleClick])

    function handleClick (event) {
        setSelectedCurrency(event.target.options[event.target.selectedIndex].text.toLowerCase())
        setSign(event.target.value)
    }
    return (
        <div>
            <div className="markets-container">
                <div className="markets-top-container">
                    <form>
                        <input className="markets-search-form" type="text" placeholder="Search..." />
                    </form>
                    <h1 className="markets-marketCap">Market Cap: <span className="markets-marketCap-amount">$ 3.1</span><span className="markets-marketCap-T">T</span></h1>
                    <h1 className="markets-totalVolume">Total Volume: <span className="markets-totalVolume-amount">128.4</span><span className="markets-totalVolume-B">B</span></h1>
                    <select onChange={handleClick} className="currency-type-selector" >
                        <option className="currency-type-item" label="AUD" value='A$'>AUD</option>
                        <option className="currency-type-item" label="CAD" value='C$'>CAD</option>
                        <option className="currency-type-item" label="CHF" value='CHF'>CHF</option>
                        <option className="currency-type-item" label="CNY" value='元'>CNY</option>
                        <option className="currency-type-item" label="EUR" value='€'>EUR</option>
                        <option className="currency-type-item" label="GBP" value='£'>GBP</option>
                        <option className="currency-type-item" label="HKD" value='HK$'>HKD</option>
                        <option className="currency-type-item" label="JPY" value='¥'>JPY</option>
                        <option className="currency-type-item" label="NZD" value='NZ$'>NZD</option>
                        <option className="currency-type-item" label="USD" value='$' selected>USD</option>
                    </select>
                </div>
                <div className="coins-container">
                {coins.map((coin) => {
                        return <Coin sign={sign} key={coin.id} coin={coin}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Markets;