import React, { useState, useEffect } from 'react';
import './markets.css';
import Coin from './Coin'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Markets({onWatchlist, onDeleteWatchlist, watchlist}) {
    const [coins, setCoins] = useState([])
    const[selectedCurrency, setSelectedCurrency] = useState('usd')
    const [sign, setSign] = useState('$')
    const[search, setSearch] = useState('')
    const[global, setGlobal]= useState([])
    const[sort, setSort]=useState(null)
    useEffect(() => {
        fetch(`https://coingecko.p.rapidapi.com/coins/markets?vs_currency=${selectedCurrency}&page=1&per_page=500&order=market_cap_desc`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
            "x-rapidapi-key": "572fa8d9b1mshf9f7a919d0cfd95p1486e7jsnc7ad3408ac61"
        }
    })
    .then(r => r.json())
    .then((data) => setCoins(data))
    .catch(err => {
        console.error(err);
    });
    // eslint-disable-next-line
    }, [handleClick])
    useEffect(() => {
        fetch("https://coinpaprika1.p.rapidapi.com/global", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key": "572fa8d9b1mshf9f7a919d0cfd95p1486e7jsnc7ad3408ac61"
    }
    })
    .then(r => r.json())
    .then((data) => setGlobal(data))    
    }, [])

    function handleSort (e) {
        setSort(e.target.name)
    }

    function handleClick (event) {
        setSelectedCurrency(event.target.options[event.target.selectedIndex].text.toLowerCase())
        setSign(event.target.value)
    }

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    const visibleCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
        // eslint-disable-next-line 
    }).sort((a, b) => {
    if (sort==="rankUp") {
        return a.market_cap_rank-b.market_cap_rank
    } else if (sort==="rankDown") {
        return b.market_cap_rank-a.market_cap_rank
    } else if (sort==="nameUp") {
        return a.name.localeCompare(b.name)
    } else if (sort==="nameDown") {
        return b.name.localeCompare(a.name)
    } else if (sort==="priceUp") {
        return a.current_price-b.current_price
    } else if (sort==="priceDown") {
        return b.current_price-a.current_price
    } else if (sort==="changeUp") {
        return a.price_change_percentage_24h-b.price_change_percentage_24h
    } else if (sort==="changeDown") {
        return b.price_change_percentage_24h-a.price_change_percentage_24h
    } else if (sort==="mcapUp") {
        return a.market_cap-b.market_cap
    } else if (sort==="mcapDown") {
        return b.market_cap-a.market_cap
    } else if (sort==="volumeUp") {
        return a.total_volume-b.total_volume
    } else if (sort==="volumeDown") {
        return b.total_volume-a.total_volume
    } else if (sort==="supplyUp") {
        return a.circulating_supply-b.circulating_supply
    } else if (sort==="supplyDown") {
        return b.circulating_supply-a.circulating_supply
    }
    })

    function currencyParser (labelValue) {
        return Math.abs(Number(labelValue)) >= 1.0e+12
        ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + "T"
        : Math.abs(Number(labelValue)) >= 1.0e+9 ?
        (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        : Math.abs(Number(labelValue)) >= 1.0e+6 ?
        (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        : Math.abs(Number(labelValue)) >= 1.0e+3 ?
        (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
        : Math.abs(Number(labelValue))
}

    return (
        <div>
            <div className="markets-container">
                <div className="markets-top-container">
                    <form>
                        <input className="markets-search-form" type="text" placeholder="Search..." onChange={handleSearch}/>
                    </form>
                    <h1 className="markets-marketCap">Market Cap: <span className="markets-marketCap-amount">$ {currencyParser(global.market_cap_usd)}</span><span className="markets-marketCap-T"></span></h1>
                    <h1 className="markets-totalVolume">Total Volume: <span className="markets-totalVolume-amount">{currencyParser(global.volume_24h_usd)}</span><span className="markets-totalVolume-B"></span></h1>
                    <select onChange={handleClick} className="currency-type-selector" >
                        <option id="currency-type-item" label="AUD" value='A$'>AUD</option>
                        <option id="currency-type-item" label="CAD" value='C$'>CAD</option>
                        <option id="currency-type-item" label="CHF" value='CHF'>CHF</option>
                        <option id="currency-type-item" label="CNY" value='元'>CNY</option>
                        <option id="currency-type-item" label="EUR" value='€'>EUR</option>
                        <option id="currency-type-item" label="GBP" value='£'>GBP</option>
                        <option id="currency-type-item" label="HKD" value='HK$'>HKD</option>
                        <option id="currency-type-item" label="JPY" value='¥'>JPY</option>
                        <option id="currency-type-item" label="NZD" value='NZ$'>NZD</option>
                        <option id="currency-type-item" label="USD" value='$' selected >USD</option>
                    </select>
                </div>
                <div className="coins-container">
                    <table className="coins-table">
                        <tr className="coins-table-row">
                            <td id="coins-table-data-1">Rank
                            <form className="coins-upDown">
                                <div className="coins-rank">
                                    <input type="radio" name="rankUp" id="up-change" onClick={handleSort} checked={sort ==='rankUp'}/>
                                    <label className="coin-upDown-item" htmlFor="up-change" ><FontAwesomeIcon  icon={faCaretUp}/></label>
                                </div>
                                <div className="coins-rank">
                                    <input type="radio" name="rankDown" id="down-change" onClick={handleSort} checked={sort ==='rankDown'}/>
                                    <label className="coin-upDown-item" htmlFor="down-change"><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form>
                            </td>
                            <td id="coins-table-data-2">Name
                            <form className="coins-upDown">
                                <div className="coins-rank">
                                    <input type="radio" name="nameUp" id="up-change-name" onClick={handleSort} checked={sort ==='nameUp'}/>
                                    <label className="coin-upDown-item" htmlFor="up-change-name" ><FontAwesomeIcon  icon={faCaretUp}/></label>
                                </div>
                                <div className="coins-rank">
                                    <input type="radio" name="nameDown" id="down-change-name" onClick={handleSort} checked={sort ==='nameDown'}/>
                                    <label className="coin-upDown-item" htmlFor="down-change-name"><FontAwesomeIcon icon={faCaretDown}/></label>
                                    </div>
                            </form>
                            </td>
                            <td id="coins-table-data-3">Price
                            <form className="coins-upDown">
                                <div className="coins-rank">
                                    <input type="radio" name="priceUp" id="up-change-price" onClick={handleSort} checked={sort ==='priceUp'}/>
                                    <label className="coin-upDown-item" htmlFor="up-change-price" ><FontAwesomeIcon  icon={faCaretUp}/></label>
                                </div>
                                <div className="coins-rank">
                                    <input type="radio" name="priceDown" id="down-change-price" onClick={handleSort} checked={sort ==='priceDown'}/>
                                    <label className="coin-upDown-item" htmlFor="down-change-price"><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form></td>
                            <td id="coins-table-data-4">Change
                            <form className="coins-upDown">
                                <div className="coins-rank">
                                    <input type="radio" name="changeUp" id="up-change-change" onClick={handleSort} checked={sort ==='changeUp'}/>
                                    <label className="coin-upDown-item" htmlFor="up-change-change" ><FontAwesomeIcon  icon={faCaretUp}/></label>
                                </div>
                                <div className="coins-rank">
                                    <input type="radio" name="changeDown" id="down-change-change" onClick={handleSort} checked={sort ==='changeDown'}/>
                                    <label className="coin-upDown-item" htmlFor="down-change-change"><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form></td>
                            <td id="coins-table-data-5">Mcap
                            <form className="coins-upDown">
                                <div className="coins-rank">
                                    <input type="radio" name="mcapUp" id="up-change-mcap" onClick={handleSort} checked={sort ==='mcapUp'}/>
                                    <label className="coin-upDown-item" htmlFor="up-change-mcap" ><FontAwesomeIcon  icon={faCaretUp}/></label>
                                </div>
                                <div className="coins-rank">
                                    <input type="radio" name="mcapDown" id="down-change-mcap" onClick={handleSort} checked={sort ==='mcapDown'}/>
                                    <label className="coin-upDown-item" htmlFor="down-change-mcap"><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form></td>
                            <td id="coins-table-data-6">Volume
                            <form className="coins-upDown">
                                <div className="coins-rank">
                                    <input type="radio" name="volumeUp" id="up-change-volume" onClick={handleSort} checked={sort ==='volumeUp'}/>
                                    <label className="coin-upDown-item" htmlFor="up-change-volume" ><FontAwesomeIcon  icon={faCaretUp}/></label>
                                </div>
                                <div className="coins-rank">
                                    <input type="radio" name="volumeDown" id="down-change-volume" onClick={handleSort} checked={sort ==='volumeDown'}/>
                                    <label className="coin-upDown-item" htmlFor="down-change-volume"><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form></td>
                            <td id="coins-table-data-7">Supply
                            <form className="coins-upDown">
                                <div className="coins-rank">
                                    <input type="radio" name="supplyUp" id="up-change-supply" onClick={handleSort} checked={sort ==='supplyUp'}/>
                                    <label className="coin-upDown-item" htmlFor="up-change-supply" ><FontAwesomeIcon  icon={faCaretUp}/></label>
                                </div>
                                <div className="coins-rank">
                                    <input type="radio" name="supplyDown" id="down-change-supply" onClick={handleSort} checked={sort ==='supplyDown'}/>
                                    <label className="coin-upDown-item" htmlFor="down-change-supply"><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form> 
                            </td>
                        </tr>
                    </table>
                    <div className="coin-wrapper">
                        {visibleCoins.map((coin) => {
                            return <Coin watchlist={watchlist} sign={sign} key={coin.id} coin={coin} onWatchlist={onWatchlist} onDeleteWatchlist={onDeleteWatchlist}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Markets;