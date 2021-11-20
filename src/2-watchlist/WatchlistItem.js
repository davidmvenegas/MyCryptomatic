import React from 'react'
import './watchlistItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function WatchlistItem({c, handleDelete}) {
    function handleClick() {
                fetch(`https://cryptomatic-app-json.herokuapp.com/cryptos/${c.id}`, {
                    method: "DELETE",
                })
                .then(r=>r.json())
                .then(() => 
                handleDelete(c))
    }
    return (
        <div>
            <div className="watchlist-item-container">
                <div className="watchlist-item">
                    <div className="watchlist-item-1">
                        <p className="watchlist-rank"><span>#</span>{c.market_cap_rank}</p>
                    </div>
                    <div className="watchlist-item-2">
                        <img className="watchlist-image" src={c.image} alt="coin_icon" />
                    </div>
                    <div className="watchlist-item-3">
                        <div className="watchlist-name-container">
                            <h1 className="watchlist-name">{c.name}</h1>
                            <p className="watchlist-tag">{c.symbol}</p>
                        </div>
                    </div>
                    <div className="watchlist-item-4">
                        <h1 className="watchlist-price"><span>$</span>{c.current_price.toString().match(/e/) != null ? c.current_price.toFixed(9): c.current_price < 0.01 ? c.current_price.toFixed(6) : c.current_price > 0 ? c.current_price.toLocaleString() : c.current_price}</h1>
                    </div>
                    <div className="watchlist-item-5">
                        <h2 className="watchlist-change" style={(c.price_change_percentage_24h < 0)?{color:"red"}:{color:"rgb(0, 156, 0)"}}>{c.price_change_percentage_24h.toFixed(2)}%</h2>
                    </div>
                    <div className="watchlist-item-6">
                        <FontAwesomeIcon onClick={handleClick} className="watchlist-remove" icon={faXmark}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WatchlistItem