import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';



function Cart() {


  const { cartList, clear, removeItem, totalPrice } = useCartContext()


  const handleSum = (quantity, stock) => {
    if (quantity < stock) {
      quantity = + 1
      console.log(quantity)
    }
  }
  const handleRest = (quantity, stock) => {
    if ((quantity > 1) && stock > 0)
      quantity = - 1
    console.log(quantity)

  }
  return (
    <div>

      <ListGroup> {cartList.map(prod =>
        <ListGroup.Item
          key={prod.id}> Quantity: {prod.quantity} / Name: {prod.name} / Precio: u$s {prod.price}

          <Button variant="light" onClick={handleRest(prod.quantity, prod.stock)}>-</Button>
          <Button variant="light" onClick={handleSum(prod.quantity, prod.stock)}>+</Button>
          <Button variant="dark" onClick={() => removeItem(prod.id)}>X</Button>
        </ListGroup.Item>)}</ListGroup>

      {cartList.length ?

        <>



          <div>
            <div>
              El total de su compra es de : u$s{totalPrice()}
            </div>
            <Button variant="dark" onClick={clear}>Vaciar Carrito</Button>
            <Link to='/User'>
              <Button variant="dark"  >Confirmar Compra</Button>
            </Link>

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