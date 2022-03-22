
import {  Card } from "react-bootstrap"

function ItemDetail({ prod }) {
    
     const { id, name, category,price, url, } = prod
     console.log(id, name, price)



    return (
  
      <>
  
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={url}/>
  <Card.Body>
    <Card.Title>ItShop!</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Details</Card.Subtitle>
    <Card.Text>
     Producto: {name} Precio : US$ {price}
    </Card.Text>
  
  </Card.Body>
</Card>
  
      </>
    )
  
  
  
  }
  export default ItemDetail

