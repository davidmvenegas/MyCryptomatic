import React, { useEffect, useState } from 'react'
import "./track.css"
import TrackItem from './TrackItem'
import Option from './Option'

function Track() {
    const [port, setPort] = useState([])
    const [cryptos, setCryptos] = useState([])  
    const[selectedCoin, setSelectedCoin]=useState([])
    const[amount, setAmount] = useState(0)

//fetchinng our crypto data to render in our list and fetching our json portfolio data and setting bothn to a state
    useEffect(() => {
        fetch(`https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=500&order=market_cap_desc`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coingecko.p.rapidapi.com",
                "x-rapidapi-key": "572fa8d9b1mshf9f7a919d0cfd95p1486e7jsnc7ad3408ac61"
            }
        })
        .then(r => r.json())
        .then((data) => setCryptos(data))
        .catch(err => {
            console.error(err);
        });
        
        fetch('http://localhost:3000/portfolio')
        .then(r => r.json())
        .then((data) => setPort(data))
        .catch(err => {
            console.error(err);
        });
    }, [])
    

    //the problem is that I cant access my coin from the Track component so we can refactor our input
    
    
    function addPurchase(e) {
        const coin = cryptos.find((c) => c.name===selectedCoin)
        coin.amount=amount
        console.log(coin)
        e.preventDefault()
        fetch('http://localhost:3000/portfolio', {
            method: 'POST',
            headers:{
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(coin)
        })
        .then(r => r.json())
        //adding item into my portfolio
        .then((c) => setPort([...port, c]))
        .catch(err => {
            console.error(err);
        });
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
                        <input list="cryptoTypeList" name="cryptoType" id="cryptoType" placeholder="Select cryptocurrency..." autoComplete="off" onChange={(e) =>setSelectedCoin(e.target.value)}/>
                            <datalist id="cryptoTypeList" >
                        {cryptos.map((coin) => {
                            return <Option key={coin.id} coin={coin}/>
                        })} 
                            </datalist>
                        <input type="number" name="cryptoAmount" id="cryptoAmount" placeholder="Amount..." onChange={(e) => setAmount(e.target.value)}/>
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <div className="track-separator-2"></div>
                <div className="track-item-container">
                    {port.map((coin) => {
                        return <TrackItem key={coin.id} coin={coin}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Track
