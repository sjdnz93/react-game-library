//!React
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

//!Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Home = () => {
  //console.log('GAMES 1', games)

  const [filters, setFilters] = useState('')
  const [filteredGames, setFilteredGames] = useState([])

  const [games, setGames] = useState([])

  //!Page mount
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/games') // * <-- replace with your endpoint
        //console.log(data)
        setGames(data.sort((a, b) => a.title > b.title ? 1 : -1))
      } catch (err) {
        console.log(err.message)
      }
    }
    getData()
    console.log(games)
  }, [])

  //!Executions
  useEffect(() => {

    setFilteredGames(games)

    console.log('FILTERED GAME STATE', filteredGames)

  }, [games])


  useEffect(() => {
    const regex = RegExp(filters, 'i')
    const newFilteredGames = games.filter(game => {
      return regex.test(game.title)
    })
    setFilteredGames(newFilteredGames)
  }, [filters])



  const handleChange = (e) => {
    setFilters(e.target.value)

  }

  return (
    <main>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="display-4 mb-4 text-center">All Free Games</h1>
            <input type="text" name="search" placeholder='Search game titles...' onChange={handleChange} value={filters} />
          </Col>

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

        </Row>
      </Container>
    </main >

  )




}

export default Home


