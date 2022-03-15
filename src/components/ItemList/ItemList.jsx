
import Item from "../Item/Item";


function ItemList({products}) {

    
    return (
    <>
{products.map(prod => <div key={prod.id}><Item prod={prod}/></div>)}
        </>
)
}
export default ItemList;
