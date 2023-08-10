import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export class App extends Component {
  pageSize = 20
  render() {
    return (
      // 4a7371d4ec9c487fbb3fcbeb02384e66
      // 81b9aac1f32d4180843f7f6fc3b419a7
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="" apiKey='34f77eb17b9e477da904697cecdf6a56' pageSize={this.pageSize} />} />
          <Route exact path='/business' element={<News key="business" apiKey='34f77eb17b9e477da904697cecdf6a56' category="business" pageSize={this.pageSize} />} />
          <Route exact path='/entertainment' element={<News key="entertainment" apiKey='34f77eb17b9e477da904697cecdf6a56' category="entertainment" pageSize={this.pageSize} />} />
          <Route exact path='/general' element={<News key="general" apiKey='34f77eb17b9e477da904697cecdf6a56' category="general" pageSize={this.pageSize} />} />
          <Route exact path='/health' element={<News key="health" apiKey='34f77eb17b9e477da904697cecdf6a56' category="health" pageSize={this.pageSize} />} />
          <Route exact path='/science' element={<News key="science" apiKey='34f77eb17b9e477da904697cecdf6a56' category="science" pageSize={this.pageSize} />} />
          <Route exact path='/sports' element={<News key="sports" apiKey='34f77eb17b9e477da904697cecdf6a56' category="sports" pageSize={this.pageSize} />} />
          <Route exact path='/technology' element={<News key="technology" apiKey='34f77eb17b9e477da904697cecdf6a56' category="technology" pageSize={this.pageSize} />} />
        </Routes>
      </Router>

    )
  }
}

export default App