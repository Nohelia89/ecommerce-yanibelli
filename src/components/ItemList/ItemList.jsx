
import Item from "../Item/Item";


function ItemList({products}) {

    
    return (
    <>
{products.map(prod => <Item prod={prod}/>)}
        </>
)
}
export default ItemList;
