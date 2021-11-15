import React from 'react'
import './news.css'
import Article from './Article'

function News() {

    // const getNewsData = () => {
    //     fetch("https://cryptopanic.com/api/v1/posts")
    // }

    return (
        <div>
            <div className="news-container">
                <Article />
            </div>
        </div>
    )
}

export default News
