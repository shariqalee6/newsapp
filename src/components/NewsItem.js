import React from 'react'

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, author, source, date } = props
    return (
        <div className="my-1 col-md-4">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                    <span className="badge rounded-pill bg-danger">{!source ? "Unknown" : source}</span>
                </div>

                <img src={!imageUrl ? 'https://dims.apnews.com/dims4/default/8ba8386/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F63%2Fea9fef7b94d13e16ec831283f84e%2F483e6a8271b34e5ca3b0d24e0e53b404' : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title?.length > 70 ? title.slice(0, 70) + '....' : title}</h5>
                    <p className="card-text">{description?.length > 90 ? description.slice(0, 90) + '....' : description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
                    <a href={newsUrl} className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem