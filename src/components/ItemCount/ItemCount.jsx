import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';




function ItemCount({ stock, initial, prod }) {

  const [count, setCount] = useState(initial)
  const [inputType, setInputType] = useState('addtocart')

  const { addToCart, cartList, removeToCart } = useCartContext()




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
      addToCart({ ...prod, cantidad: count })

      console.log(count)
      console.log(cartList)
      buttonCount()
      console.log(cartList)
    }
    else {
      alert("Sin stock")
    }
  }

  const onRemove = () => {

    removeToCart({ ...prod })

  }


  return (
    <>




      {
        inputType === 'addtocart' ?

          <>
            <Button variant="dark" onClick={handleSum}>+</Button>
            <h4>{count}</h4>

            <Button variant="dark" onClick={handleRest}>-</Button>
            <div>
              <Button variant="dark" onClick={onAdd}>Add to Cart</Button>

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
