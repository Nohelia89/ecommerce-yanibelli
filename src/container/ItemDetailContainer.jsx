

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { getDoc, getFirestore, doc } from 'firebase/firestore'


function ItemDetailContainer() {


    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)

    const { detailId } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'items', detailId)
        getDoc(queryDoc)
            .then(resp => setProd({ id: resp.id, ...resp.data() }))
            .catch((err) => console.log(err)) // capturamos todos los errores con el catch
            .finally(() => setLoading(false))//ej loading


    }, [detailId])

    return (
        <>
            {loading ? <h2>Loading...</h2> : <ItemDetail prod={prod} />}

        </>
    )
}

export default ItemDetailContainer