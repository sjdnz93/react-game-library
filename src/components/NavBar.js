//!Bootstrap components
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const NavBar = () => {


  return (

    <Container>
      <Navbar expand="md">
        <Nav variant="Pills" defaultActiveKey="/" expand="md" >
          <Nav.Item>
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/pc" as={Link}>All PC Games</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/browser" as={Link}>All Broswer Games</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  )

}

export default NavBar