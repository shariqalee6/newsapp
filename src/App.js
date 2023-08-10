import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY
  pageSize = 20
  constructor() {
    super()
    this.state = { progress: 0 } // Initialize the state here
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      // 81b9aac1f32d4180843f7f6fc3b419a7
      // 81b9aac1f32d4180843f7f6fc3b419a7
      // 34f77eb17b9e477da904697cecdf6a56
      // 5029c74d54dc49209ce21eec28884f71
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key="" apiKey={this.apiKey} pageSize={this.pageSize} />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" apiKey={this.apiKey} category="business" pageSize={this.pageSize} />} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} category="entertainment" pageSize={this.pageSize} />} />
          <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" apiKey={this.apiKey} category="general" pageSize={this.pageSize} />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" apiKey={this.apiKey} category="health" pageSize={this.pageSize} />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" apiKey={this.apiKey} category="science" pageSize={this.pageSize} />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" apiKey={this.apiKey} category="sports" pageSize={this.pageSize} />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" apiKey={this.apiKey} category="technology" pageSize={this.pageSize} />} />
        </Routes>
      </Router>

    )
  }
}

export default App