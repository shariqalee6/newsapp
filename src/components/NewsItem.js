import React, { Component } from 'react'

export class NewsItem extends Component {
    // 4a7371d4ec9c487fbb3fcbeb02384e66
    render() {
        const { title, description, imageUrl, newsUrl, author, source, date } = this.props
        return (
            <div className="my-1 col-md-3">
                <div className="card">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                        {!source ? "Unknown" : source}
                    </span>
                    <img src={!imageUrl ? 'https://dims.apnews.com/dims4/default/8ba8386/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F63%2Fea9fef7b94d13e16ec831283f84e%2F483e6a8271b34e5ca3b0d24e0e53b404' : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title?.length > 70 ? title.slice(0, 70) + '....' : title}</h5>
                        <p className="card-text">{description?.length > 90 ? description.slice(0, 90) + '....' : description}</p>
                        <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
                        <a href={newsUrl} className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem