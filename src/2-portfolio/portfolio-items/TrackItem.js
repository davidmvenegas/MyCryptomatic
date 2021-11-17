import React from 'react'
import './trackItem.css'

function TrackItem() {
    return (
        <div>
            <div className="track-item">
                <div className="track-item-name">
                    <h1>TYPE_OF_CRYPTO</h1>
                    <p>TYPE_SYMBOL</p>
                </div>
                <h2>COST_AT_BUY</h2>
                <h2>AMOUNT</h2>
                <h2>CHANGE_SINCE_BUY</h2>
            </div>
        </div>
    )
}

export default TrackItem
