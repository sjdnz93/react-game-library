import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const BrowserGames = () => {

  const [browserGame, setBrowserGames] = useState([])

  const [filters, setFilters] = useState('')
  const [filteredGames, setFilteredGames] = useState([])

  //console.log('GAMES', games)

  useEffect(() => {



    const getBrowserGames = async () => {
      try {
        const { data } = await axios.get('/api/games?platform=browser')
        console.log(data)
        setBrowserGames(data.sort((a, b) => a.title > b.title ? 1 : -1))
      } catch (err) {
        console.log(err.message)
      }
    }
    getBrowserGames()

  }, [])

  //!Executions
  useEffect(() => {

    setFilteredGames(browserGame)

    console.log('FILTERED GAME STATE', filteredGames)

  }, [browserGame])


  useEffect(() => {
   
    const regex = RegExp(filters, 'i')
    console.log('REGEX', regex)
    const newFilteredGames = browserGame.filter(game => {
      return regex.test(game.title)
    })
    setFilteredGames(newFilteredGames)
    console.log('USE EFFECT', newFilteredGames)
  }, [filters])



  const handleChange = (e) => {
    setFilters(e.target.value)

  }

  return (

    <main>
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="display-4 mb-4 text-center">Free Web Browser Games</h1>
            <input type="text" name="search" placeholder='Search game titles...' onChange={handleChange} value={filters} />
          </Col>

          {filteredGames.map(game => {
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

        </Row>
      </Container>
    </main >
  )


}
export default BrowserGames