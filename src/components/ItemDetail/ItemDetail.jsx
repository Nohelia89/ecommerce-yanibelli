
import { Card } from "react-bootstrap"

//import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({ prod }) {

  const { name, price, url } = prod


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
          <ItemCount stock={prod.stock} initial={1} prod={prod} />
          <div>





          </div>
        </Card.Body>
      </Card>

    </>
  )



}
export default ItemDetail

