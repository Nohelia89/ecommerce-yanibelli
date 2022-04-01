import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import ItemList from "../components/ItemList/ItemList"
import { gFetch } from "../Utils/gFetch.js"
import { useParams } from "react-router-dom"
//import { collection, getDocs, getFirestore } from "firebase/firestore"





function ItemListContainer() {

  //const [bool, setBool] = useState(true)
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {


    gFetch //simulacion de llamado a una api

      .then(resp => category ? setProds(resp.filter(prod => prod.category === category)) : setProds(resp))
      .catch(err => console.log(err)) // capturamos todos los errores con el catch
      .finally(() => setLoading(false))//ej loading






  }, [category])


//   useEffect(() => {
//     const db = getFirestore()
//     const queryCollection = collection(db, 'items')
//     getDocs(queryCollection)
//     .then(resp => category ? setProds(resp.map.filter(prod => prod.category === category)) : setProds(resp.docs.map({ id: resp.id, ...resp.data })))
//     //  .then(resp => setProds(resp.docs.map({ id: resp.id, ...resp.data() })))
//       .catch(err => console.log(err)) // capturamos todos los errores con el catch
//       .finally(() => setLoading(false))//ej loading

//  //   { category ? setProds(resp.map.filter(prod => prod.category === category)): setProds(resp.docs.map({ id: resp.id, ...resp.data() })))} 
   




//   }, [category])
  return (

    <>



      {loading ? <h2>Loading...</h2> : <CardGroup><ItemList products={prods} /></CardGroup>}

    </>
  )



}
export default ItemListContainer