import React, { useState } from 'react'
import './coin.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

function Coin() {
    const [fav, setFav] = useState(false)

    const toggleFavorited = () => {
        setFav(!fav)
    }

    return (
        <div>
            <div className="coin-container">
                <div className="coin-data">
                    {fav ? <FontAwesomeIcon className="coin-star" onClick={toggleFavorited} icon={solidStar}/> : <FontAwesomeIcon className="coin-star" onClick={toggleFavorited} icon={regularStar}/>}
                    <p className="coin-rank">1</p>
                    <img src={""} alt="coin-img" />
                    <h1 className="coin-name">COIN_NAME</h1>
                    <p className="coin-symbol">COIN_SYMBOL</p>
                    <p className="coin-chart">COIN_CHART</p>
                    <p className="coin-price">COIN_PRICE</p>
                    <p className="coin-change">COIN_CHANGE</p>
                    <p className="coin-mCap">COIN_MCAP</p>
                    <p className="coin-volume">COIN_VOLUME</p>
                    <p className="coin-supply">COIN_SUPPLY</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
