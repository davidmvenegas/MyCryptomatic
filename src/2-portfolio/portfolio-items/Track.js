import React, { useState, useRef } from 'react'
import "./track.css"
import TrackItem from './TrackItem'

function Track() {
    // const [cost, setCost] = useState[[]]
    // const [totalCost, setTotalCost] = useState[0]
    const cryptoType = useRef(null)

    function addPurchase(e) {
        e.preventDefault()
        console.log(cryptoType.current.value);
    }


    return (
        <div>
            <div className="track-container">
                <div className="track-info-container">
                    <h1 className="track-title">TRACK_HEADER</h1>
                    <h1 className="track-total-cost">$0</h1>
                </div>
                <div className="track-form-container">
                    <form className="track-form" onSubmit={addPurchase}>
                        <input type="text" name="cryptoType" id="cryptoType" placeholder="Crypto type..." ref={cryptoType} />
                        <input type="number" name="cryptoAmount" id="cryptoAmount" placeholder="Amount..." />
                        <input type="date" name="cryptoDate" id="cryptoDate" placeholder="Buy date..." />
                        <input type="submit" value="Add" />
                    </form>
                </div>
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
