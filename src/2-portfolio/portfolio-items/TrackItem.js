import React from 'react'
import './trackItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faXmark, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function TrackItem({coin, handleDeletePortfolio}) {
    const change= ((coin.current_price - coin.entry) / coin.entry)*100
    function handleClick() {
        fetch(`http://localhost:3001/portfolio/${coin.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(() => 
        handleDeletePortfolio(coin))
}
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
                    {(change > 0) ? <FontAwesomeIcon style={change < 0 ? {color : 'red'}: {color : 'green'}} className="track-item-arrow" icon={faArrowUp}/> : <FontAwesomeIcon style={change < 0 ? {color : 'red'}: {color : 'green'}} className="track-item-arrow" icon={faArrowDown}/>}
                    <h2 className="track-item-change" style={change < 0 ? {color : 'red'}: {color : 'green'}}>{change.toFixed(2)}%</h2>
                </div>
                <FontAwesomeIcon onClick={handleClick} className="track-item-remove" icon={faXmark}/>
            </div>
        </div>
    )
}

export default TrackItem
