
import {Container, Navbar, Nav} from 'react-bootstrap';
import Widget from '../Widget/Widget';
function NavBar() {
    return ( 
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ItShop!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">SDD</Nav.Link>
            <Nav.Link href="#pricing">Tarjetas de video</Nav.Link>
            <Nav.Link href="#pricing">Monitor</Nav.Link>
            <Nav.Link href="#pricing">Consolas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Iniciar Sesion</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Widget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
  }
  
  export default NavBar
  