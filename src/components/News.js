import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // const [totalPages, setTotalPages] = useState(0)

  // async componentDidMount() {
  //   console.log("shariq 1")
  //   this.fetchData(1)
  // }

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.category !== this.props.category ||
  //     prevProps.language !== this.props.language ||
  //     prevProps.country !== this.props.country
  //   ) {
  //     // Fetch new data when category or other props change
  //     this.fetchData(1);
  //   }
  // }

  useEffect(() => {
    document.title = `${capitalizeWord(props.category)} - News App`
    fetchData(1)
    // eslint-disable-next-line 
  }, [])

  const fetchData = async (pageNo) => {
    props.setProgress(0)
    let data = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&language=${props.language}&country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${pageNo}`)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(pageNo > 1 ? articles.concat(parsedData.articles) : parsedData.articles)
    setLoading(false)
    setPage(pageNo)
    setTotalResults(parsedData.totalResults)
    // setTotalPages(Math.ceil(parsedData.totalResults / props.pageSize))
    props.setProgress(100)
  }

  const fetchMoreData = async () => {
    fetchData(page + 1)
  }

  // const handleNextButton = async () => {
  //   fetchData(page + 1)
  // }

  // const handlePreviousButton = async () => {
  //   fetchData(page - 1)
  // }

  const capitalizeWord = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  // const { loading } = this.state;
  // const pageNumbers = [];
  // for (let i = 1; i <= this.state.totalPages; i++) {
  //   pageNumbers.push(i);
  // }
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', margin: '35px 0px', marginTop: '90px' }}>News APP- Top Headlines on {capitalizeWord(props.category)} Category</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {
            articles?.map((element, index) => {
              // Your code logic here
              return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage}
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            })
          }
        </div>
      </InfiniteScroll>


      {/* <div className="container d-flex justify-content-between mb-2">
          <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={this.handlePreviousButton}>&larr; Previous</button>
          <button type="button" disabled={page === totalPages} className="btn btn-dark" onClick={this.handleNextButton}>Next &rarr;</button>
        </div> */}

      {/* <div className="container mt-5">
          <nav aria-label="Page navigation exampl" className='d-flex align-items-center justify-content-center'>
            <ul className="pagination">
              <li className="page-item" disabled={page <= 1}><a disabled={page <= 1} className="page-link" href="javascript:void(0)" onClick={page <= 1 ? (e) => e.preventDefault() : this.handlePreviousButton}>Previous</a></li>
              {pageNumbers.map((pageNo) => (
                <li
                  key={pageNo}
                  className={pageNo === page ? 'page-item active' : 'page-item'}
                >
                  <a
                    href="javascript:void(0)"
                    className="page-link"
                    onClick={() => this.fetchData(pageNo)}
                  >
                    {pageNo}
                  </a>
                </li>
              ))} */}
      {/* <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
              <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
              <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li> */}
      {/* <li className="page-item" disabled={page === totalPages}><a disabled={page === totalPages} className="page-link" href="javascript:void(0)" onClick={page === totalPages ? (e) => e.preventDefault() : this.handleNextButton}>Next</a></li>
            </ul>
          </nav>
        </div> */}

    </div>
  )
}
News.defaultProps = {
  country: 'us',
  language: 'en',
  category: 'general',
  pageSize: 10
}

News.propTypes = {
  country: PropTypes.string,
  language: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
export default News