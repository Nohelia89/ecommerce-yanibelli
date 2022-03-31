import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import ItemList from "../components/ItemList/ItemList"
//import { gFetch } from "../Utils/gFetch.js"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"





function ItemListContainer() {

  //const [bool, setBool] = useState(true)
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()
  
  // useEffect(() => {


  //   gFetch //simulacion de llamado a una api

  //     .then(resp => category ? setProds(resp.filter(prod => prod.category === category)) : setProds(resp))
  //     .catch(err => console.log(err)) // capturamos todos los errores con el catch
  //     .finally(() => setLoading(false))//ej loading






  // }, [category])


  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
      .then(resp => setProds(resp.map({ docs: resp.id, ...resp.data() })))

   // { category && setProds(prod.filter(prod => prod.category === category) } ESTA CONDICIONAL NO ME SALE,
   //PRIMERO GUARDE TODO CON SETPRODS LO QUE ME TRAJE, Y AHORA LO QUIERO GUARDAR EN CASO DE 
   //QUE EXISTA CATEGORIA CON EL FILTER, PERO IMPOSIBLE




  }, [category])
  return (

    <>



      {loading ? <h2>Loading...</h2> : <CardGroup><ItemList products={prods} /></CardGroup>}

    </>
  )



}
export default ItemListContainer