import React, { useEffect, useState } from 'react'
import "./track.css"
import { Bar } from 'react-chartjs-2'
import TrackItem from './TrackItem'

function Track() {
    const [port, setPort] = useState([])
    const [cryptos, setCryptos] = useState([])  
    const[selectedCoin, setSelectedCoin]=useState([])
    const[shares, setShares] = useState('$ Amount...')
    const[entry, setEntry] = useState('Entry Price...')

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
        
        fetch('http://localhost:3001/portfolio')
        .then(r => r.json())
        .then((data) => setPort(data))
        .catch(err => {
            console.error(err);
        });
    }, [])

    //the problem is that I cant access my coin from the Track component so we can refactor our input
    
    function addPurchase(e) {
        const coin = cryptos.find((c) => c.name===selectedCoin)
        coin.shares= parseFloat(shares)
        coin.entry= parseFloat(entry)
        console.log(coin)
        e.preventDefault()
        fetch('http://localhost:3001/portfolio', {
            method: 'POST',
            headers:{
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(coin)
        })
        .then(r => r.json())
        //adding item into my portfolio
        .then((c) => {setPort([...port, c])
            setSelectedCoin([])
            setShares('Amount...')
            setEntry('Entry Price...')
        })
        .catch(err => {
            console.error(err);
        });
    }

    function handleUpdate(updatedCoin) {
        setPort(port.map((co) => {
            if(co.id ===updatedCoin.id) {
                return updatedCoin
            } else {
                return co
            }}))
    }
    let value = port===[] ? null : port.reduce(function (previousValue, currentValue) {
        return previousValue + (currentValue.current_price *currentValue.shares)
    }, 0)
    let cost = port===[] ? null : port.reduce(function (previousValue, currentValue) {
        return previousValue + (currentValue.entry * currentValue.shares)
    }, 0)
    // eslint-disable-next-line
    let gain = port===[] ? null : port.reduce(function (previousValue, currentValue) {
        return previousValue + (currentValue.entry * currentValue.shares)
    }, 0)


    function handleDeletePortfolio (deletedItem) {
        const updatedPortfolio = port.filter((coin) => coin.id !== deletedItem.id)
        setPort(updatedPortfolio)
    }

    return (
        <div className="track-container">
            <div className="track">
                <div className="track-info-container">
                        <div>
                            {/* <Bar
                            data={{
                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            }}
                                height={400}
                                width={600}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            /> */}
                        </div>
                    <div className="track-info">
                        <h1>${value.toLocaleString()}</h1>
                        <h1>DAY_GAIN</h1>
                        <h1>${cost.toLocaleString()}</h1>
                        <h1>TOTAL_GAIN</h1>
                    </div>
                </div>
                <div className="track-separator-1"></div>
                <div className="track-form-container">
                    <form className="track-form" onSubmit={addPurchase}>
                        <input className="track-crypto-type" list="cryptoTypeList" name="cryptoType" id="cryptoType" placeholder="Select Cryptocurrency..." autoComplete="off" onChange={(e) =>setSelectedCoin(e.target.value)} value={selectedCoin} required />
                            <datalist id="cryptoTypeList" >
                        {cryptos.map((coin) => {
                            return <option key={coin.id} value={coin.name}>{coin.symbol.toUpperCase()}</option>
                        })} 
                            </datalist>
                        <input className="track-crypto-amount" type="number" name="cryptoAmount" id="cryptoAmount" placeholder="Amount..." step="0.000001" onChange={(e) => setShares(e.target.value)} value={shares} required />
                        <input className="track-crypto-price" type="number" name="cryptoPrice" id="cryptoAmount" placeholder="Entry Price..." step="0.000001" onChange={(e) => setEntry(e.target.value)} value={entry} required />
                        <input className="track-submit" type="submit" value="Add" />
                    </form>
                </div>
                <div className="track-separator-2"></div>
                <div className="track-item-container">
                    {port.map((coin) => {
                        return <TrackItem handleUpdate={handleUpdate}cryptos={cryptos} key={coin.id} coin={coin} handleDeletePortfolio={handleDeletePortfolio}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Track
