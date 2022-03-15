import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"



const products = [{ id: 1, name: 'GeForce RTX 3080 Ti', price: 100, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXEVV80.jpg', stock: 10 },
{ id: 2, name: 'ACER MONITOR',  price: 200, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXACM46.jpg', stock: 5 },
{ id: 3, name: 'APPLE TECLADO EXTENDIDO PARA MAC MQ052E/A', price: 100, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXAPM03.jpg', stock: 4 },
{ id: 4, name: 'ASROCK PLACA A320M-HDV R4.0', price: 100, url:'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXHR4.jpg', stock: 20 },
{ id: 5, name: 'KLIPX CAMARAS WEB KWC-500', price: 450, url: 'https://www.banifox.com/imagenes/img_contenido/productos/a/BFXLOC15.jpg', stock: 2 }
]

const gfetch = new Promise((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => resolve(products), 3000)

  } else {
    reject('400 error')
  }

})


function ItemListContainer({ saludo }) {

  const [bool, setBool] = useState(true)
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    gfetch //simulacion de llamado a una api

      .then((resp) => setProds(resp))
      .catch((err) => console.log(err)) // capturamos todos los errores con el catch
      .finally(() => setLoading(false))//ej loading

  }, [])

  console.log(prods)
  return (

    <>
      <button onClick={() => setBool(!bool)} >click </button>
      <div>{saludo}</div>
     
      { loading ? <h2>Loading...</h2> : <ItemList products={prods}/>}

    </>
  )



}
export default ItemListContainer