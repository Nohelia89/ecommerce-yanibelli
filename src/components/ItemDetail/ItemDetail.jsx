
import {  Card } from "react-bootstrap"

//import { Link } from "react-router-dom"
import StockCount from "../StockCount/StockCount"

function ItemDetail({ prod }) {

  const { id, name, price, url, stock } = prod
  console.log(id, name, price, stock)



  return (

    <>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>ItShop!</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Details</Card.Subtitle>
          <Card.Text>
            Producto: {name} Precio : US$ {price}
          </Card.Text>
          <StockCount stock={prod.stock} initial={1} />
          <div>





          </div>
        </Card.Body>
      </Card>

    </>
  )



}
export default ItemDetail

