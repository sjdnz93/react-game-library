//!Bootstrap components
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const NavBar = () => {

  const location = useLocation()

  useEffect(() => {
    console.log(location)
  }, [location])

  return (

    <Container>
      <Navbar expand="md">
        <Nav variant="Pills" defaultActiveKey="/" expand="md" >
          <Nav.Item>
            <Nav.Link to="/" as={Link} className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav variant="Pills" defaultActiveKey="/" expand="md" id="second" >
          <Nav.Item>
            <Nav.Link to="/pc" as={Link} className={location.pathname === '/pc' ? 'active' : ''}>All PC Games</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/browser" as={Link} className={location.pathname === '/browser' ? 'active' : ''}>All Browser Games</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  )

}

export default NavBar