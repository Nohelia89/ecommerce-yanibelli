
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
          <Link to='/category/mother'>
            <Nav.Link >Mother</Nav.Link>
            </Link>
            <Link to='category/graphics'>
            <Nav.Link >Graphics</Nav.Link>
             </Link>
             <Link to='category/monitor'>
            <Nav.Link >Monitor</Nav.Link>
            </Link>
            <Link to='category/accesories'>
            <Nav.Link>Accesories</Nav.Link>

            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Iniciar Sesion</Nav.Link>
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
  