import React from 'react'
import './watchlistItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function WatchlistItem({c}) {
    return (
        <div>
            <div className="watchlist-item-container">
                <div className="watchlist-item">
                    <p className="watchlist-rank">{c.market_cap_rank}</p>
                    <img className="watchlist-image" src={c.image} alt="coin_icon" />
                    <div className="watchlist-name-container">
                        <h1 className="watchlist-name">{c.name}</h1>
                        <p className="watchlist-tag">{c.symbol}</p>
                    </div>
                    <h1 className="watchlist-price"><span>$</span>{c.current_price.toLocaleString()}</h1>
                    <h2 className="watchlist-change" style={(c.price_change_percentage_24h < 0)?{color:"red"}:{color:"rgb(0, 156, 0)"}}>{c.price_change_percentage_24h.toFixed(2)}%</h2>
                    <FontAwesomeIcon className="watchlist-remove" icon={faXmark}/>
                </div>
            </div>
        </div>
    )
}

export default WatchlistItem
