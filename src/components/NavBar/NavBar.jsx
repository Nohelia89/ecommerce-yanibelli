
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import Widget from '../Widget/Widget';


function NavBar() {

  const { totalItems, cartList } = useCartContext()
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/'>
          <Navbar.Brand >ItShop!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="category/mother">Mothers</Nav.Link>
            <Nav.Link as={Link} to="category/graphics">Graphics</Nav.Link>
            <Nav.Link as={Link} to="category/monitor">Monitores</Nav.Link>
            <Nav.Link as={Link} to="category/accesories">Accesorios</Nav.Link>



          </Nav>
          <Nav>
           
            <NavLink to='/cart' className={({ isActive }) => isActive ? 'active' : ''}>

              <Widget /> {cartList.length>0 ? totalItems():" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar
