
import Item from "../Item/Item";


function ItemList({ products }) {
//const obj = useContext(ContextApp)
//console.log(obj+"aca esta")

    return (
        <>
            {products.map(prod => <Item key={prod.id} prod={prod} />)}
        </>
    )
}
export default ItemList;
