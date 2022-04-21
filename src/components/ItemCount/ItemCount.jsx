import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';




function ItemCount({ stock, initial, prod }) {

  const [count, setCount] = useState(initial)
  const [inputType, setInputType] = useState('addtocart')

  const { addToCart } = useCartContext()



  const handleSum = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const handleRest = () => {
    if ((count > 1) && stock > 0)
      setCount(count - 1)

  }

  const buttonCount = () => {

    setInputType('checkout')
  }

  const onAdd = () => {
    if (!stock < 1) {
      addToCart({ ...prod, quantity: count })


      buttonCount()

    }
    else {
      alert("Sin stock")
    }
  }




  return (
    <>




      {
        inputType === 'addtocart' ?

          <>



            <Button variant="light" onClick={handleRest}>-</Button>
            <label>{count}</label>
            <Button variant="light" onClick={handleSum}>+</Button>
            <div>
              <Button variant="dark" onClick={onAdd}>Agregar al carrito</Button>

            </div>

          </>

          :

          <>
            <Link to={'/cart'}>
              <Button variant="dark" >Checkout</Button>
            </Link>

            <Link to={'/'}>
              <Button variant="dark" >Home</Button>
            </Link>
          </>
      }





    </>

  )
}

export default ItemCount
