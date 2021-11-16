import React, {useEffect, useState} from 'react'
import './news.css'
import Article from './Article'

function News() {
    const[news, setNews]=useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?qInTitle=crypto&sortBy=publishedAt&apiKey=06a4c8062a65436bb09e71c19d43424d`)
    .then(response => response.json())
    .then((data) => setNews(data.articles))
    .catch(err => {
        console.error(err);
    })},
    [])

    return (
        <div>
            <div className="news-container">
                {news && news.map((n, ind) => {
                    return <Article key={ind} art={n} />
                })}
            </div>
        </div>
    )
}
export default News