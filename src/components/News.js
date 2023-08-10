import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'us',
    language: 'en',
    category: 'general',
    pageSize: 10
  }

  static propTypes = {
    country: PropTypes.string,
    language: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  capitalizeWord = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [], //this.articles,
      loading: false,
      error: null,
      page: 1,
      totalResults: 1,
      totalPages: 1
    }
    document.title = `${this.capitalizeWord(this.props.category)} - News App`
    // this.handleNextButton = this.handleNextButton.bind(this);
    // this.handlePreviousButton = this.handlePreviousButton.bind(this);
  }
  async componentDidMount() {
    this.fetchData(1)
  }

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

  fetchData = async (pageNo) => {
    if (this.state.page <= this.state.totalPages) {
      this.setState({ loading: true })
      let data = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&language=${this.props.language}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${pageNo}`)
      let parsedData = await data.json()
      let stateData = {
        loading: false,
        articles: parsedData.articles,
        page: pageNo,
        totalResults: parsedData.totalResults,
        totalPages: Math.ceil(parsedData.totalResults / this.props.pageSize)
      }
      this.setState(stateData)
    }
  }

  handleNextButton = async () => {
    this.fetchData(this.state.page + 1)
  }

  handlePreviousButton = async () => {
    this.fetchData(this.state.page - 1)
  }

  render() {
    const { loading, page, totalPages } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= this.state.totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <div className='container'>
        <h1 style={{ textAlign: 'center', margin: '35px 0px' }}>News APP- Top Headlines on {this.capitalizeWord(this.props.category)} Category</h1>
        {
          loading &&
          <div style={{ textAlign: 'center' }}>
            <Spinner />
          </div>
        }
        {
          !loading &&
          <div className="row">
            {
              this.state.articles?.map((element, index) => {
                // Your code logic here
                return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage}
                  newsUrl={element.author} author={element.author} date={element.publishedAt} source={element.source.name} />
              })
            }
          </div>
        }
        {/* <div className="container d-flex justify-content-between mb-2">
          <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={this.handlePreviousButton}>&larr; Previous</button>
          <button type="button" disabled={page === totalPages} className="btn btn-dark" onClick={this.handleNextButton}>Next &rarr;</button>
        </div> */}
        <div className="container mt-5">
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
              ))}
              {/* <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
              <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
              <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li> */}
              <li className="page-item" disabled={page === totalPages}><a disabled={page === totalPages} className="page-link" href="javascript:void(0)" onClick={page === totalPages ? (e) => e.preventDefault() : this.handleNextButton}>Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default News