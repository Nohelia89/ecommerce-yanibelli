import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';



function Cart() {


  const { cartList, clear, removeItem, totalPrice } = useCartContext()



  return (
    <div>

      <ListGroup> {cartList.map(prod =>
        <ListGroup.Item
          key={prod.id}> Cantidad: {prod.quantity} / Nombre: {prod.name} / Precio: u$s {prod.price}


          <Button variant="dark" onClick={() => removeItem(prod.id)}>X</Button>
        </ListGroup.Item>)}</ListGroup>

      {cartList.length ?

        <>



          <div>
            <div>
              El total de su compra es de : u$s{totalPrice()}
            </div>
            <div style={{ margin: 200 }} >
              <Button style={{ margin: 15 }} variant="dark" onClick={clear}>Vaciar Carrito</Button>

              <Link to='/User'>
                <Button style={{ margin: 15 }} variant="dark"  >Confirmar Compra</Button>
              </Link>
            </div>
          </div>
        </>
        :
        <>
          Actualmente no tiene productos en el carrito
          <div>
            <Link to={'/'}>
              <Button variant="dark" >Home</Button>
            </Link>
          </div>

        </>
      }

    </div>


  )
}

export default Cart