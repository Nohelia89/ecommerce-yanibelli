import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';



function Cart() {


  const { cartList, clear, removeItem, totalPrice } = useCartContext()



  return (
    <div>

      <Table striped bordered hover variant="light" style={{ padding: 10 }}>

        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        {cartList.map(prod => <tbody key={prod.id} >
          <tr>
            <td>{prod.quantity}</td>
            <td>{prod.name}</td>
            <td>US${prod.price}</td>
            <td>     <Button variant="dark" onClick={() => removeItem(prod.id)}>X</Button></td>
          </tr>

        </tbody>)}

        {cartList.length > 0 ?


          <tbody >

            <td><h6>Total de su compra:</h6></td>
            <td>US${totalPrice()}</td>



          </tbody>
          : null}
      </Table>




      {cartList.length ?

        <>



          <div style={{ margin: 250 }}>
            <div   >


            </div>
            <div style={{ margin: 0 }} >
              <Button style={{ margin: 10 }} variant="dark" onClick={clear}>Vaciar Carrito</Button>

              <Link to='/User'>
                <Button style={{ margin: 10 }} variant="dark"  >Confirmar Compra</Button>
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