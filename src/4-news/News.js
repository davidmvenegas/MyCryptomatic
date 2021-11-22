import React, {useEffect, useState} from 'react'
import './news.css'
import Article from './Article'

function News() {
    const[news, setNews]=useState([])

    useEffect(() => {
        fetch("https://free-news.p.rapidapi.com/v1/search?q=crypto&lang=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "c63074207fmshe8e45c0cb0aa50bp1e8ff6jsnaa049528fd0a"
        }
    })
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