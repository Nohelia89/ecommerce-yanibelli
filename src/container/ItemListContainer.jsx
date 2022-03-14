import { useEffect, useState } from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

const productos = [{ id: 1, name: 'GeForce RTX 3080 Ti', price: 100, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXEVV80.jpg', stock: 10 },
{ id: 2, name: 'ACER MONITOR',  price: 200, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXACM46.jpg', stock: 5 },
{ id: 3, name: 'APPLE TECLADO EXTENDIDO PARA MAC MQ052E/A', price: 100, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAPM03.jpg', stock: 4 },
{ id: 4, name: 'ASROCK PLACA A320M-HDV R4.0', price: 100, url:'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXHR4.jpg', stock: 20 },
{ id: 5, name: 'KLIPX CAMARAS WEB KWC-500', price: 450, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXLOC15.jpg', stock: 2 }
]

const gfetch = new Promise((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => resolve(productos), 3000)

  } else {
    reject('400 error')
  }

})


function ItemListContainer({ saludo }) {

  const [bool, setBool] = useState(true)
  const [prods, setProds] = useState([])


  useEffect(() => {
    gfetch

      .then((resp) => setProds(resp))
      .catch((err) => console.log(err)) // capturamos todos los errores con el catch
      .finally(() => console.log("se ejecuta siempre y por ultimo"))//ej loading

  }, [])

  console.log(prods)
  return (

    <>
      <button onClick={() => setBool(!bool)} >click </button>
      <div>{saludo}</div>

      {prods.map(p => <li key={p.id}>{p.name}</li>)}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> 
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

    </>
  )



}
export default ItemListContainer