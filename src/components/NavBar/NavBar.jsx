
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
       
            <Nav.Link >
               <Link to='category/mother'>
               Mother
            </Link>
            </Nav.Link>
            <Nav.Link >
               <Link to='category/graphics'>
               Graphics
            </Link>
            </Nav.Link>
            <Nav.Link >
               <Link to='category/monitor'>
               Monitor
            </Link>
            </Nav.Link>
            <Nav.Link >
               <Link to='category/accesories'>
               Accesories
            </Link>
            </Nav.Link>


        
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
  