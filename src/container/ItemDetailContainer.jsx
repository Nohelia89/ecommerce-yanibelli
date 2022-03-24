

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { gFetch } from "../Utils/gFetch.js"



function ItemDetailContainer() {

    //const [bool, setBool] = useState(true)
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)

    const { detailId } = useParams()

    useEffect(() => {
        gFetch //simulacion de llamado a una api

            .then(resp => setProd(resp.find(prod => prod.id === parseInt(detailId))))
            .catch((err) => console.log(err)) // capturamos todos los errores con el catch
            .finally(() => setLoading(false))//ej loading

    }, [])


    return (
        <>
            {loading ? <h2>Loading...</h2> : <ItemDetail prod={prod} />}

        </>
    )
}

export default ItemDetailContainer