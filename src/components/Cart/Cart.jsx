import Button from 'react-bootstrap/Button';
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

function Cart() {

  const { cartList, clear, removeItem, totalPrice } = useCartContext()

  return (
    <div>
      
      <ListGroup> {cartList.map(prod =>
        <ListGroup.Item
          key={prod.id}> Quantity: {prod.cantidad} / Name: {prod.name} / Precio: u$s {prod.price}
          <Button variant="dark" onClick={() => removeItem(prod.id)}>X</Button>
      
        </ListGroup.Item>)}</ListGroup>

        {cartList.length ?   
        
          <>
       
      
   
        <div>
        <Button variant="dark" onClick={clear}>Vaciar Carrito</Button> 
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
     
     El total de su compra es de : u$s{totalPrice()}
     
</div>
     
 
  )
}

export default Cart