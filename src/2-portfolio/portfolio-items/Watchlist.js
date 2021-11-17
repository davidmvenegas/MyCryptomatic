import React from 'react'
import "./watchlist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import WatchlistItem from './WatchlistItem'
function Watchlist({watchlist , sortby, setSortby, handleDelete, up, setUp}) {
function handleClick (e) {
    setSortby(e.target.value)
}
function handleNewClick(e){
    if (e.target.name === 'up' && up===true) {
        return setUp(up)
    }
    else if (e.target.name === 'down' && up===false) {
        return setUp(up)
    }
    else {
        return setUp(!up)
    }
}
    return (
        <div>
            <div className="watchlist-container">
                <div className="watchlist">
                    <div className="watchlist-top">
                        <h2 className="watchlist-top-count-title">Items in Watchlist: <span className="watchlist-top-count">{watchlist.length}</span></h2>
                        <div className="watchlist-sort-container">
                            <h2 className="watchlist-sort-title">Sort By:</h2>
                            <form className="watchlist-sort-subContainer">
                                <div className="watchlist-filter">
                                    <input type="radio" name="sort-watchlist" id="sort-watchlist-rank" checked={sortby === 'rank'} value='rank' onClick={handleClick}/>
                                    <label className="watchlist-sort-item" htmlFor="sort-watchlist-rank"><span>#</span>Rank</label>
                                </div>
                                <div className="watchlist-filter">
                                    <input type="radio" name="sort-watchlist" id="sort-watchlist-change" checked={sortby === 'change'} value='change' onClick={handleClick}/>
                                    <label className="watchlist-sort-item" htmlFor="sort-watchlist-change"><span>%</span>Change</label>
                                </div>
                                <div className="watchlist-filter">
                                    <input type="radio" name="sort-watchlist" id="sort-watchlist-name" checked={sortby === 'name'} value='name' onClick={handleClick}/>
                                    <label className="watchlist-sort-item" htmlFor="sort-watchlist-name">Name</label>
                                </div>
                            </form>
                            <form className="watchlist-upDown">
                                <div className="watchlist-upDownContainer">
                                    <input type="radio" name="up" id="up-change"  onClick={handleNewClick} checked={up ===true}/>
                                    <label className="watchlist-upDown-item" htmlFor="up-change"><FontAwesomeIcon icon={faCaretUp}/></label>
                                </div>
                                <div className="watchlist-upDownContainer">
                                    <input type="radio" name="down" id="down-change" onClick={handleNewClick} checked={up ===false}/>
                                    <label className="watchlist-upDown-item" htmlFor="down-change" ><FontAwesomeIcon icon={faCaretDown}/></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="watchlist-seperator"></div>
                    <div className="watchlist-contents">
                        {watchlist.map((c) => {
                            return <WatchlistItem handleDelete={handleDelete} key={c.id} c={c}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Watchlist