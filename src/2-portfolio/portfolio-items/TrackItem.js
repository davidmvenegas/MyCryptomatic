import React from 'react'
import './trackItem.css'

function TrackItem({coin}) {
    const change= ((coin.current_price - coin.entry) / coin.entry)*100
    return (
        <div>
            <div className="track-item">
                <div className="track-item-name">
                    <h1>{coin.name}</h1>
                    <p>{coin.symbol}</p>
                </div>
                <h2>${coin.entry.toLocaleString()}</h2>
                <h2>{coin.shares.toLocaleString()}</h2>
                <h2 style={change < 0 ? {color : 'red'}: {color : 'green'}}>{change.toFixed(2)}%</h2>
            </div>
        </div>
    )
}

export default TrackItem
