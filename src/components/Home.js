//!React
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

//!Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Home = ({ games }) => {
  //console.log('GAMES 1', games)

  const [filters, setFilters] = useState('')
  const [filteredGames, setFilteredGames] = useState([])

  //!Page mount
  useEffect(() => {

    setFilteredGames(games)

    console.log('FILTERED GAME STATE', filteredGames)

  }, [games])

  const handleChange = (e) => {
    setFilteredGames(games)
    setFilters(e.target.value)
  }

  useEffect(() => {
    const regex = RegExp(filters, 'i')
    const newFilteredGames = filteredGames.filter(game => {
      return regex.test(game.title)
    })
    setFilteredGames(newFilteredGames) 
  }, [filters]) 





  return (
    <main>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="display-4 mb-4 text-center">Home Page</h1>
            <input type="text" name="search" placeholder='Search game titles...' onChange={handleChange} value={filters} />
          </Col>
          <div className="games-wrapper">
            {filteredGames.map(game => {
              const { id, title, thumbnail, genre, platform } = game

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

export default Home


