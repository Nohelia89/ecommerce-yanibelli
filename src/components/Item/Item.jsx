import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom";

import StockCount from "../StockCount/StockCount";

function Item({ prod }) {



  return (

    <div>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.url} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> US$ {prod.price}</ListGroupItem>

        </ListGroup>
        <Card.Body>
          <StockCount stock={prod.stock} initial={1} />
        </Card.Body>
        <Link to={`detail/${prod.id}`}>
          <Card.Body>

            <Button variant="primary" >Details</Button>

          </Card.Body>
        </Link>
      </Card>

    </div>

  )

}
export default Item;
