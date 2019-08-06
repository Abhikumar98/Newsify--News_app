import React from 'react';

const DisplayNews = (props) => {
    const { newsState, article } = props
    const source = newsState[article]
    const date = source.publishedAt.split('T')[0]
    return(
        <div className="card bg-dark text-white">
            <img src={source.urlToImage} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">{source.title}</h5>
                <p style={{ textTransform: "capitalize"}} className="card-text"> - {source.author}</p>
                    <p className="card-text">{source.content}
                    <a href={source.url} target="_blank">Read more from source</a>
                    </p>
                <p className="card-text">Last updated : {date.split("-").reverse().join("/")}</p>
            </div>
        </div>
    )
}

export default DisplayNews;