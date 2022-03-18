

import { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import {gFetch} from "../Utils/gFetch.js"



function ItemDetailContainer() {

    //const [bool, setBool] = useState(true)
    const [descs, setProd] = useState({})
    const [loading, setLoading] = useState(true)
    


    useEffect(() => {
        gFetch //simulacion de llamado a una api

            .then(resp => setProd(resp.find (prod => prod.id === 1)))
            .catch((err) => console.log(err)) // capturamos todos los errores con el catch
            .finally(() => setLoading(false))//ej loading
           
    }, [])


    return (
        <>
  {loading ? <h2>Loading...</h2> : <ItemDetail prod={descs} />} 
   
        </>
    )
}

export default ItemDetailContainer