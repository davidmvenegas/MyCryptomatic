import React from 'react'
import "./track.css"
import TrackItem from './TrackItem'

function Track() {

    function addPurchase(e) {
        e.preventDefault()
    }

    return (
        <div className="track-container">
            <div className="track">
                <div className="track-info-container">
                    <div className="track-info">
                        <h1>VALUE</h1>
                        <h1>DAY_GAIN</h1>
                        <h1>COST</h1>
                        <h1>TOTAL_GAIN</h1>
                    </div>
                </div>
                <div className="track-separator-1"></div>
                <div className="track-form-container">
                    <form className="track-form" onSubmit={addPurchase}>
                        <input className="track-crypto-type" list="cryptoTypeList" name="cryptoType" id="cryptoType" placeholder="Cryptocurrency..." autoComplete="off" />
                            <datalist id="cryptoTypeList">
                                <option value="Bitcoin">BTC</option>
                                <option value="Etherium">ETH</option>
                                <option value="Etherium">ETH</option>
                            </datalist>
                        <input className="track-crypto-amount" type="number" name="cryptoAmount" id="cryptoAmount" placeholder="Amount..." />
                        <input className="track-submit" type="submit" value="Add" />
                    </form>
                </div>
                <div className="track-separator-2"></div>
                <div className="track-item-container">
                    <TrackItem />
                    <TrackItem />
                    <TrackItem />
                </div>
            </div>
        </div>
    )
}

export default Track
