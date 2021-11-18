import React, { useState } from 'react'
import './trackItem.css'
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function TrackItem({coin, handleDeletePortfolio, cryptos, handleUpdate}) {
    const [isFlipped, setIsFlipped] = useState(false)
    const change= ((coin.current_price - coin.entry) / coin.entry)*100
    const[edit, setEdit]=useState('')
    const[type, setType]=useState('')

    function handleClick() {
        fetch(`http://localhost:3001/portfolio/${coin.id}`, {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(() => 
        handleDeletePortfolio(coin))
    }
    const dynamicPrice= cryptos.length>1 ? cryptos.find((c) => c.id ===coin.id) : null
    console.log(dynamicPrice)


    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    function handleSubmit (e) {
        e.preventDefault()
        const added = coin.shares + edit
        const removed = coin.shares - edit
        console.log(added)
        console.log(removed)
        console.log(type)
        type==='remove'?
        fetch(`http://localhost:3001/portfolio/${coin.id}`, {
            method: 'PATCH',
            headers:{
                "Content-Type" : 'application/json'
            },
            
            body: JSON.stringify({
                shares : removed
            })
        })
        .then(r => r.json())
        //adding item into my portfolio
        .then((c) => {
            console.log('patch')
            handleUpdate(c)
        })
        .catch(err => {
            console.error(err);
        })
        :
        fetch(`http://localhost:3001/portfolio/${coin.id}`, {
            method: 'PATCH',
            headers:{
                "Content-Type" : 'application/json'
            },
            
            body: JSON.stringify({
                shares : added
            })
        })
        .then(r => r.json())
        //adding item into my portfolio
        .then((c) => {
            console.log('patch')
            handleUpdate(c)
        })
        .catch(err => {
            console.error(err);
        })
    }

    function handleEdit(e) {
        setType(e.target.name)
    }
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className="track-item">
                    <div className="track-item-name-container">
                        <h1 className="track-item-name">{coin.name}</h1>
                        <p className="track-item-symbol">{coin.symbol}</p>
                    </div>
                    <div className="track-item-cost-container">
                        <h2 className="track-item-cur-price">${dynamicPrice===null? null : dynamicPrice.current_price.toLocaleString()}</h2>
                        <h2 className="track-item-cost"><span>Buy Price:</span> ${coin.entry.toLocaleString()}</h2>
                    </div>
                    <h2 className="track-item-amount">{coin.shares.toLocaleString()}<span>{coin.symbol}</span></h2>
                    <div className="track-item-change-container">
                        {(change > 0) ? <FontAwesomeIcon style={change < 0 ? {color : 'red'}: {color : 'green'}} className="track-item-arrow" icon={faArrowUp}/> : <FontAwesomeIcon style={change < 0 ? {color : 'red'}: {color : 'green'}} className="track-item-arrow" icon={faArrowDown}/>}
                        <h2 className="track-item-change" style={change < 0 ? {color : 'red'}: {color : 'green'}}>{change.toLocaleString()}%</h2>
                    </div>
                    <button className="track-item-btn-front" onClick={handleFlip}>EDIT</button>
                </div>
                <div className="track-item">
                    <form className="track-update-form-1" onSubmit={handleSubmit} >
                        <input className="track-item-update-input" type="number" step=".00001" max={coin.shares <= edit && type==='remove'? coin.shares-1 : null} placeholder={"0 " + coin.symbol.toUpperCase()} onChange={(e) => setEdit(parseInt(e.target.value))}/>
                        <button className="track-item-update-remove-btn" type="submit" name='remove' onClick={handleEdit}>Remove</button>
                        <button className="track-item-update-add-btn" type="submit" name='add' onClick={handleEdit}>Add</button>
                    </form>
                    <div className="track-update-form-2">
                        <div className="track-update-form-separator"></div>
                    </div>
                    <div className="track-update-form-3">
                        <button className="track-item-delete-btn" onClick={handleClick}>Remove All</button>
                    </div>
                    <div className="track-update-form-4">
                        <button className="track-item-btn-back" onClick={handleFlip}>CANCEL</button>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default TrackItem
