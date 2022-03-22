
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Widget from '../Widget/Widget';
function NavBar() {
    return ( 
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>
        <Navbar.Brand >ItShop!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="category/mother">Mother</Nav.Link>
          <Nav.Link as={Link} to="category/graphics">Graphics</Nav.Link>
          <Nav.Link as={Link} to="category/graphics">Monitor</Nav.Link>
          <Nav.Link as={Link} to="category/accesories">Accesories</Nav.Link>
           


          </Nav>
          <Nav>
            <Nav.Link >Iniciar Sesion</Nav.Link>
            <NavLink to='cart' className={({isActive})=>isActive ? 'active':''}>
            <Widget/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
  }
  
  export default NavBar
  