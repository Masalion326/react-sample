import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div class="container text-center mt-5">
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About}/>
    </div>
  </BrowserRouter>
)


const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p><Link to="/about">About</Link></p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>

  )
}

export default App