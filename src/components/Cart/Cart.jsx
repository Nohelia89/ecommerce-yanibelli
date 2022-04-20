import Button from 'react-bootstrap/Button';
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, query, where, documentId, writeBatch, getDocs } from 'firebase/firestore';
import User from '../User/User';


function Cart() {

  const { cartList, clear, removeItem, totalPrice, userName, userLastName, userEmail } = useCartContext()


  const generateOrder = async (e) => {
 

    let order = {}
    order.buyer = { name: { userName }, lastName: { userLastName }, email: { userEmail } }
  
    order.items = cartList.map(cartItem => {
      const id = cartItem.id
      const name = cartItem.name
      const price = cartItem.price * cartItem.quantity
      return { id, name, price }
    })
    order.total = totalPrice()
    console.log(order)


    const db = getFirestore()
    const queryCollectionItems = collection(db, 'orders')
    await addDoc(queryCollectionItems, order)
      .then(({ id }) => alert('El código de su orden es el número ' + id))
      .catch(err => console.log(err))


    const queryCollection = collection(db, 'items')
    const queryStockUpdate = await query(
      queryCollection, //[]
      where(documentId(), 'in', cartList.map(it => it.id)))

    const batch = writeBatch(db)
    await getDocs(queryStockUpdate)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
      })))
    batch.commit()
  }


  const confirmOrder = () => {
    <User />
    generateOrder()
      .then(resp => clear())
      .catch((err) => console.log(err)) 

    clear()
  }

  return (
    <div>

      <ListGroup> {cartList.map(prod =>
        <ListGroup.Item
          key={prod.id}> Quantity: {prod.quantity} / Name: {prod.name} / Precio: u$s {prod.price}
          <Button variant="dark" onClick={() => removeItem(prod.id)}>X</Button>

        </ListGroup.Item>)}</ListGroup>

      {cartList.length ?

        <>



          <div>
            <div>
              El total de su compra es de : u$s{totalPrice()}
            </div>
            <Button variant="dark" onClick={clear}>Vaciar Carrito</Button>
            <Button variant="dark" onClick={confirmOrder}>Generar orden</Button>

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