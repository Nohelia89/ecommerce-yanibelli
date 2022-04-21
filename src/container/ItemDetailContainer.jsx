

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { getDoc, getFirestore, doc } from 'firebase/firestore'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

function ItemDetailContainer() {


    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)
    const { detailId } = useParams()
    const Back= ()=> {

        return (
            <>
            <h2> El producto no existe </h2>
              <Link to='/' >
              <Button variant="dark" style={{ backgroundColor: "#000000"}} >Volver</Button>
              </Link>
              </>
        )
      }
  

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'items', detailId)
        getDoc(queryDoc)
        getDoc(queryDoc)
        .then(resp => {
          if (resp.data() === undefined){
            <Back />
          }else{
            setProd({id: resp.id, ...resp.data()})
          } 
        })
            .catch((err) => console.log(err)) // capturamos todos los errores con el catch
            .finally(() => setLoading(false))//ej loading


    }, [detailId])

    return (
        <>
             { loading ? <h4>Loading...</h4> : (prod.id === undefined ? <Back /> : <ItemDetail prod = {prod} /> )}

        </>
    )
}

export default ItemDetailContainer