import React from 'react'
import "./watchlist.css"
import WatchlistItem from './WatchlistItem'

function Watchlist() {
    return (
        <div>
            <div className="watchlist-container">
                <div className="watchlist">
                    <div className="watchlist-top">
                        <h2>Items in Watchlist: 0</h2>
                        <h2>Sort By</h2>
                        <h3>Rank</h3>
                        <h3>Name</h3>
                        <h3>% Change</h3>
                    </div>
                    <div className="watchlist-contents">
                        <WatchlistItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watchlist
