import React from 'react'
import './trackItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function TrackItem() {
    return (
        <div>
            <div className="track-item">
                <div className="track-item-name-container">
                    <h1 className="track-item-name">Bitcoin</h1>
                    <p className="track-item-symbol">BTC</p>
                </div>
                <div className="track-item-cost-container">
                    <h2 className="track-item-cur-price">$64,843</h2>
                    <h2 className="track-item-cost"><span>Buy Price:</span> $52,223</h2>
                </div>
                <h2 className="track-item-amount">.23<span>BTC</span></h2>
                <div className="track-item-change-container">
                    <FontAwesomeIcon className="track-item-arrow" icon={faArrowUp}/>
                    <h2 className="track-item-change">12.54%</h2>
                </div>
                <FontAwesomeIcon className="track-item-remove" icon={faXmark}/>
            </div>
        </div>
    )
}

export default TrackItem
