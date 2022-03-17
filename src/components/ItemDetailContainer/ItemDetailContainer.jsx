
import {  Card } from "react-bootstrap"

function ItemDetailContainer({ desc }) {
    // console.log({prods})
    return (
  
      <>
  
  <Card className="bg-dark text-white">

  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
      {desc.id}
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
  
      </>
    )
  
  
  
  }
  export default ItemDetailContainer