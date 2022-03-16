//import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import ItemList from "../components/ItemList/ItemList"




function ItemListContainer({ products }) {
  // console.log({prods})
  return (

    <>

      <CardGroup><ItemList products={products} /></CardGroup>

    </>
  )



}
export default ItemListContainer