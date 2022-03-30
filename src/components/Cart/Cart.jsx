import Button from 'react-bootstrap/Button';
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'

function Cart() {

  const { cartList, clear,removeItem } = useCartContext()

  return (
    <div>
      <ListGroup> {cartList.map(prod => 
      <ListGroup.Item 
      key={prod.id}> Quantity: {prod.cantidad} / Name: {prod.name} / Precio: u$s {prod.price}
       <Button variant="dark" onClick={()=>removeItem(prod.id)}>X</Button>
      </ListGroup.Item>)}</ListGroup>
      <Button variant="dark" onClick={clear}>Vaciar Carrito</Button>

    </div>
  )
}

export default Cart