import React from 'react'
import './trackItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function TrackItem({coin}) {
    const change= ((coin.current_price - coin.entry) / coin.entry)*100
    return (
        <div>
            <div className="track-item">
                <div className="track-item-name-container">
                    <h1 className="track-item-name">{coin.name}</h1>
                    <p className="track-item-symbol">{coin.symbol}</p>
                </div>
                <div className="track-item-cost-container">
                    <h2 className="track-item-cur-price">$00000</h2>
                    <h2 className="track-item-cost"><span>Buy Price:</span> ${coin.entry.toLocaleString()}</h2>
                </div>
                <h2 className="track-item-amount">{coin.shares.toLocaleString()}<span>BTC</span></h2>
                <div className="track-item-change-container">
                    <FontAwesomeIcon className="track-item-arrow" icon={faArrowUp}/>
                    <h2 className="track-item-change" style={change < 0 ? {color : 'red'}: {color : 'green'}}>{change.toFixed(2)}%</h2>
                </div>
                <FontAwesomeIcon className="track-item-remove" icon={faXmark}/>
            </div>
        </div>
    )
}

export default TrackItem
