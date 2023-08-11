import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const pageSize = 20
  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} key="" apiKey={apiKey} pageSize={pageSize} />} />
        <Route exact path='/business' element={<News setProgress={setProgress} key="business" apiKey={apiKey} category="business" pageSize={pageSize} />} />
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} category="entertainment" pageSize={pageSize} />} />
        <Route exact path='/general' element={<News setProgress={setProgress} key="general" apiKey={apiKey} category="general" pageSize={pageSize} />} />
        <Route exact path='/health' element={<News setProgress={setProgress} key="health" apiKey={apiKey} category="health" pageSize={pageSize} />} />
        <Route exact path='/science' element={<News setProgress={setProgress} key="science" apiKey={apiKey} category="science" pageSize={pageSize} />} />
        <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" apiKey={apiKey} category="sports" pageSize={pageSize} />} />
        <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" apiKey={apiKey} category="technology" pageSize={pageSize} />} />
      </Routes>
    </Router>

  )
}

export default App