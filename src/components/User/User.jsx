
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, getFirestore, query, where, documentId, writeBatch, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
function User() {



  const [dataForm, setDataForm] = useState({ name: '', phone: '', email: '',  email2:''})
  //const [id, setId] = useState(null)

  const { cartList, totalPrice, clear } = useCartContext()


  const generateOrder = async (e) => {
e.preventDefault()

    let order = {}
   

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
      .then(({ id }) => alert('El código de su orden es el número ' + id
      +"           ¡Gracias por su compra!"))
      .catch(err => console.log(err))
      .finally(clear)

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

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (

    <form
      className='mt-5'
      onSubmit={generateOrder}
    >
      <input
        type='text'
        name='name'
        placeholder='Ingrese Nombre'
        value={dataForm.name}
        onChange={handleChange}
      /><br />
      <input
        type='text'
        name='phone'
        placeholder='Ingrese Teléfono'
        value={dataForm.phone}
        onChange={handleChange}
      /><br />
      <input
        type='email'
        name='email'
        placeholder='Ingrese Email'
        value={dataForm.email}
        onChange={handleChange}
      /><br />
      <input
        type='email'
        name='email2'
        placeholder='Confirme Email'
        value={dataForm.email2}
        onChange={handleChange}
      /><br />

      <button className="btn btn-outline-primary" onClick={generateOrder()} >Finalizar Compra</button>
    </form>
  )

}
export default User 