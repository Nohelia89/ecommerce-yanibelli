import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import ItemList from "../components/ItemList/ItemList"
import {gFetch} from "../Utils/gFetch.js"
import {useParams} from "react-router-dom"





function ItemListContainer() {

  //const [bool, setBool] = useState(true)
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const {category} = useParams()


  useEffect(() => {
    if (category)
    {
      gFetch //simulacion de llamado a una api

    .then(resp => setProds(resp.filter(prod=>prod.categoria ===category)))
    .catch(err => console.log(err)) // capturamos todos los errores con el catch
    .finally(() => setLoading(false))//ej loading
    }
else
{ 
  gFetch //simulacion de llamado a una api

.then((resp) => setProds(resp))
.catch((err) => console.log(err)) // capturamos todos los errores con el catch
.finally(() => setLoading(false))//ej loading
}




  }, [category])

  console.log(prods)
  return (

    <>
      
      
     
      { loading ? <h2>Loading...</h2> : <CardGroup><ItemList products={prods}/></CardGroup>}

    </>
  )



}
export default ItemListContainer