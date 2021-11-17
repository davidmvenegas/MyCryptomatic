import React from 'react'
import './coin.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

function Coin({ coin, sign, onWatchlist, onDeleteWatchlist, watchlist }) {
    //give coin key of favorite and value depending on state
    const toggleFavorited = () => {
        if (watchlist.find((c) => c.id === coin.id===true)) {
            console.log('delete from db')
            return (
                fetch(`http://localhost:3000/cryptos/${coin.id}`, {
                    method: "DELETE",
                })
                .then(r=>r.json())
                .then(() => 
                onDeleteWatchlist(coin))

                )}else{
                    console.log('new to db',)
                    return (
                        fetch('http://localhost:3001/cryptos', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(coin)
                        })
                        .then(r=>r.json())
                        .then((newCoin) => {
                            onWatchlist(newCoin)
                        }))
                    }
                }
                
                
                
                function currencyParser (labelValue) {
                    return Math.abs(Number(labelValue)) >= 1.0e+12
                    ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + "T"
                    :
        Math.abs(Number(labelValue)) >= 1.0e+9 ?
        (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        :
        Math.abs(Number(labelValue)) >= 1.0e+6 ?
        (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        : Math.abs(Number(labelValue)) >= 1.0e+3 ?
        (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
        : Math.abs(Number(labelValue))
    }
    return (
        <div className="coin-data">
            <div id="coin-table-1">
                {watchlist.find((c) => c.id === coin.id) ? <FontAwesomeIcon className="coin-star" onClick={toggleFavorited} icon={solidStar}/> :<FontAwesomeIcon className="coin-star" onClick={toggleFavorited} icon={regularStar}/>}
            </div>
            <div id="coin-table-2">
                <p className="coin-rank">{coin.market_cap_rank}</p>
            </div>
            <div id="coin-table-3">
                <img className="coin-img" src={coin.image} alt="coin-img"/>
            </div>
            <div id="coin-table-4">
                <h1 className="coin-name">{coin.name}</h1>
                <p className="coin-symbol">{coin.symbol}</p>
            </div>
            <div id="coin-table-5">
                <p className="coin-price"><span className="coin-currency-sign">{sign}</span> {coin.current_price.toLocaleString()}</p>
            </div>
            <div id="coin-table-6">
                <p className="coin-change" style={(coin.price_change_percentage_24h < 0)?{color:"red"}:{color:"rgb(0, 156, 0)"}}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div id="coin-table-7">
                <p className="coin-mCap"><span className="coin-currency-sign-other">{sign}</span> {currencyParser(coin.market_cap)}</p>
            </div>
            <div id="coin-table-8">
                <p className="coin-volume"><span className="coin-currency-sign-other">{sign}</span> {currencyParser(coin.total_volume)}</p>
            </div>
            <div id="coin-table-9">
                <p className="coin-supply">{currencyParser(coin.total_supply)}</p>
            </div>
        </div>
    )
}

export default Coin
