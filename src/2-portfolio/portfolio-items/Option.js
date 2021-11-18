import React from 'react'

function Option({coin}) {
    return (
            <option value={coin.name} >{coin.symbol}</option>
    )
}

export default Option
