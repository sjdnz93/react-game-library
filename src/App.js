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
//import Home from './components/Home'


const App = () => {

  const [games, setGames] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/games') // * <-- replace with your endpoint
        //console.log(data)
        setGames(data)
      } catch (err) {
        console.log(err.message)
      }
    }
    getData()
    console.log(games)
  }, [])

  return (

    <main>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="display-4 mb-4 text-center">Home Page</h1>
          </Col>
          <div className="games-wrapper">
            {games.map(game => {
              const { id, title, thumbnail, genre, platform } = game
              console.log('PICTURE', thumbnail)
              return (
                <Col key={id} lg="4" className="game">

                  <Card>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{genre} - {platform}</Card.Text>
                    </Card.Body>
                  </Card>

                </Col>
              )

            })}
          </div>
        </Row>
      </Container>
    </main>
  )
}

export default App



