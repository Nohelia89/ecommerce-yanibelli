
import { useContext } from "react";
//import Context from "../../Context/CartContext";
import Item from "../Item/Item";


function ItemList({ products }) {
//const obj = useContext(Context)

    return (
        <>
            {products.map(prod => <Item key={prod.id} prod={prod} />)}
        </>
    )
}
export default ItemList;
