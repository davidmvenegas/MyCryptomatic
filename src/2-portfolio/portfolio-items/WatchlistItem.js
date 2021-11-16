import React from 'react'
import './watchlistItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function WatchlistItem() {
    return (
        <div>
            <div className="watchlist-item-container">
                <div className="watchlist-item">
                    <p className="watchlist-rank">1.</p>
                    <img className="watchlist-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png" alt="coin_icon" />
                    <div className="watchlist-name-container">
                        <h1 className="watchlist-name">Bitcoin</h1>
                        <p className="watchlist-tag">BTC</p>
                    </div>
                    <h1 className="watchlist-price"><span>$</span>64,000</h1>
                    <h2 className="watchlist-change">-5.43%</h2>
                    <FontAwesomeIcon className="watchlist-remove" icon={faXmark}/>
                </div>
            </div>
        </div>
    )
}

export default WatchlistItem
