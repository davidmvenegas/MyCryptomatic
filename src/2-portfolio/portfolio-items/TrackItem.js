import React from 'react'
import './trackItem.css'

function TrackItem({coin}) {
    return (
        <div>
            <div className="track-item">
                <div className="track-item-name">
                    <h1>{coin.name}</h1>
                    <p>{coin.symbol}</p>
                </div>
                <h2>COST_AT_BUY</h2>
                <h2>{coin.amount}</h2>
                <h2>CHANGE_SINCE_BUY</h2>
            </div>
        </div>
    )
}

export default TrackItem
