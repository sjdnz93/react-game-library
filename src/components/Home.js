//!React
import { Link } from 'react-router-dom'

//!Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Home = ({ games }) => {

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

export default Home