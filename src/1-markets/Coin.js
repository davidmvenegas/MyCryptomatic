import React, { useState } from 'react'
import './coin.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

function Coin({ coin, sign }) {
    const [fav, setFav] = useState(false)

    const toggleFavorited = () => {
        setFav(!fav)
    }

    function currencyParser (labelValue) {
        return Math.abs(Number(labelValue)) >= 1.0e+12
        ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + " T"
        :
        Math.abs(Number(labelValue)) >= 1.0e+9 ?
        (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
        :
        Math.abs(Number(labelValue)) >= 1.0e+6 ?
        (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
        : Math.abs(Number(labelValue)) >= 1.0e+3 ?
        (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " K"
        : Math.abs(Number(labelValue))
    }
    return (
        <div>
            <div className="coin-container">
                <div className="coin-data">
                    {fav ? <FontAwesomeIcon className="coin-star" onClick={toggleFavorited} icon={solidStar}/> : <FontAwesomeIcon className="coin-star" onClick={toggleFavorited} icon={regularStar}/>}
                    <p className="coin-rank">{coin.market_cap_rank}</p>
                    <img className="coin-img" src={coin.image} alt="coin-img"/>
                    <h1 className="coin-name">{coin.name}</h1>
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-chart"></p>
                    <p className="coin-price">{sign} {coin.current_price.toLocaleString()}</p>
                    <p className="coin-change">{coin.price_change_percentage_24h}</p>
                    <p className="coin-mCap">{currencyParser(coin.market_cap)}</p>
                    <p className="coin-volume">{currencyParser(coin.total_volume)}</p>
                    <p className="coin-supply">{currencyParser(coin.total_supply)}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
