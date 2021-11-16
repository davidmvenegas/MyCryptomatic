import React from 'react'
import "./watchlist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import WatchlistItem from './WatchlistItem'

function Watchlist() {

    return (
        <div>
            <div className="watchlist-container">
                <div className="watchlist">
                    <div className="watchlist-top">
                        <h2 className="watchlist-top-count-title">Items in Watchlist: <span className="watchlist-top-count">0</span></h2>
                        <div className="watchlist-sort-container">
                            <h2 className="watchlist-sort-title">Sort By:</h2>
                            <form className="watchlist-sort-subContainer">
                                <div className="watchlist-filter">
                                    <input type="radio" name="sort-watchlist" id="sort-watchlist-rank" defaultChecked />
                                    <label className="watchlist-sort-item" htmlFor="sort-watchlist-rank"><span>#</span>Rank</label>
                                </div>
                                <div className="watchlist-filter">
                                    <input type="radio" name="sort-watchlist" id="sort-watchlist-change" />
                                    <label className="watchlist-sort-item" htmlFor="sort-watchlist-change"><span>%</span>Change</label>
                                </div>
                                <div className="watchlist-filter">
                                    <input type="radio" name="sort-watchlist" id="sort-watchlist-name" />
                                    <label className="watchlist-sort-item" htmlFor="sort-watchlist-name">Name</label>
                                </div>
                            </form>
                            <form className="watchlist-upDown">
                                <div className="watchlist-upDownContainer">
                                    <input type="radio" name="upDown" id="up-change" defaultChecked />
                                    <label className="watchlist-upDown-item" htmlFor="up-change"><FontAwesomeIcon icon={faCaretUp}/></label>
                                </div>
                                <div className="watchlist-upDownContainer">
                                    <input type="radio" name="upDown" id="down-change" />
                                    <label className="watchlist-upDown-item" htmlFor="down-change"><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="watchlist-seperator"></div>
                    <div className="watchlist-contents">
                        <WatchlistItem/>
                        <WatchlistItem/>
                        <WatchlistItem/>
                        <WatchlistItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watchlist
