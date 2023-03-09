//!React
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


//!Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//!Custom components
import Home from './components/Home'
import NavBar from './components/NavBar'
import GamePage from './components/GamePage'


const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:gameID" element={<GamePage />} />
        </Routes>
      </BrowserRouter>



    </div>


  )
  
}

export default App



