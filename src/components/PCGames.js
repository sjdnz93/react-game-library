import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const PCGames = () => {

  const [pcGame, setPCGames] = useState([])

  //console.log('GAMES', games)

  useEffect(() => {
  
    const getPCGames = async() => {
      try {
        const { data } = await axios.get('/api/games?platform=pc')
        console.log(data)
        setPCGames(data.sort((a,b) => a.title > b.title ? 1 : -1 ))
      } catch (err) {
        console.log(err.message)
      }
    }
    getPCGames()

  }, [])

  return (

    <main>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="display-4 mb-4 text-center">Free PC Games</h1>
          </Col>
          <div className="games-wrapper">
            {pcGame.map(game => {
              const { id, title, thumbnail, genre, platform } = game
              //console.log('PICTURE', thumbnail)
              return (
                <Col key={id} lg='4' className="game">
                  <Link to={`/games/${id}`}>
                    <Card>
                      <Card.Img variant="top" src={thumbnail} />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{genre} - {platform}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )

            })}
          </div>
        </Row>
      </Container>
    </main >
  )
}

export default PCGames