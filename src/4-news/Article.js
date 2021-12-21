import React from 'react'
import './article.css'
import moment from 'moment';
moment().format();

function Article({art}) {
    console.log(art);
    return (
        <div>
            <div className="article-container">
                <div className="article">
                    <div className="article-text">
                        <div className="article-text-box-1">
                            <a className="article-title-link" href={art.link} target="_blank" rel="noreferrer"><h1 className="article-title">{art.title}</h1></a>
                        </div>
                        <div className="article-text-box-2">
                        <p className="news-source">{art.link.split('/')[2]}</p>
                            <span className="article-bullet">&bull;</span>
                            <p className="article-time">{moment(art.published_date).fromNow()}</p>
                        </div>
                            <p className="article-decription">{art.summary.slice(0, 225)+"..."}</p>
                    </div>
                    <div className="article-image-container">
                        <img className="article-image" src={art.media} alt="N/A" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article