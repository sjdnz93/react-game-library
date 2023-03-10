import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Slide, Fade } from 'react-slideshow-image'

//!BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const GamePage = () => {

  const { gameID } = useParams()

  const [game, setGame] = useState([])

  const [pictures, setPictures] = useState([])

  //!On mount

  console.log('GAME ID', gameID)

  useEffect(() => {
    const getGame = async () => {
      try {
        const { data } = await axios.get(`/api/game?id=${gameID}`)
        const thumbnail = data.thumbnail
        setGame(data)
        const picsArray = data.screenshots
        const picsToUse = picsArray.map(pic => {
          return pic.image
        })
        picsToUse.unshift(thumbnail)
        setPictures(picsToUse)

      } catch (err) {
        console.log(err.message)
      }
    }

    getGame()

  }, [gameID])

  return (
    <main>
      <Container className="gameSingle">
        <Row>
          {game &&
            <>
              <Col xs="12">
                <h1 className="display-4 mb-4 mt-3 game-title">{game.title}</h1>
              </Col>
              <Col md="4">

                {/* <img src={game.thumbnail} alt={game.title} className="thumbnail"></img> */}

                <div className="slide-container">
                  <Fade>
                    {pictures.map((pic, index) => (
                      <div key={index}>
                        <img style={{ width: '100%' }} src={pic} />
                      </div>
                    ))}
                  </Fade>
                </div>

                <p><span>Genre:</span> {game.genre}</p>
                <p><span>Platforms:</span> {game.platform}</p>
                <p><span>Developer:</span> {game.developer}</p>
                <p><span>Publisher:</span> {game.publisher}</p>
                <p><span>Release Date:</span> {game.release_date}</p>

                <a href={game.game_url} className="play-game" rel="noreferrer noopener" target="_blank">CLICK TO PLAY GAME</a>

              </Col>
              <Col md="8">
                <h3>Description</h3>
                <p>{game.description}</p>
              </Col>
            </>

          }
        </Row>


      </Container>

    </main>




  )
}

export default GamePage