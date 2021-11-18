import React, { useState } from 'react'
import './trackItem.css'
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function TrackItem({coin, handleDeletePortfolio}) {
    const [isFlipped, setIsFlipped] = useState(false)
    const change= ((coin.current_price - coin.entry) / coin.entry)*100

    function handleClick() {
        fetch(`http://localhost:3001/portfolio/${coin.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(() => 
        handleDeletePortfolio(coin))
    }

    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
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
                    <button className="track-item-btn-front" onClick={handleFlip}>EDIT</button>
                </div>
                <div className="track-item">
                    <form className="track-update-form-1">
                        <input className="track-item-update-input" type="number" step=".00001" max={coin.shares} placeholder={"0 " + coin.symbol.toUpperCase()} />
                        <input className="track-item-update-btn" type="submit" value="Remove" />
                    </form>
                    <div className="track-update-form-2">
                        <div className="track-update-form-separator"></div>
                    </div>
                    <div className="track-update-form-3">
                        <button className="track-item-delete-btn" onClick={handleClick}>Remove All</button>
                    </div>
                    <div className="track-update-form-4">
                        <button className="track-item-btn-back" onClick={handleFlip}>CANCEL</button>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default TrackItem
