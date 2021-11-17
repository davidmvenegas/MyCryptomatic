import React, { useRef } from 'react'
import "./track.css"
import TrackItem from './TrackItem'

function Track() {
    // const [cost, setCost] = useState[[]]
    // const [totalCost, setTotalCost] = useState[0]
    const cryptoType = useRef(null)

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
                        <input type="text" name="cryptoType" id="cryptoType" placeholder="Crypto type..." ref={cryptoType} />
                        <input type="number" name="cryptoAmount" id="cryptoAmount" placeholder="Amount..." />
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <div className="track-separator-2"></div>
                <div className="track-item-container">
                    <TrackItem />
                    <TrackItem />
                </div>
            </div>
        </div>
    )
}

export default Track
