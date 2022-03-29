

import { createContext } from "react"



function Context() {

    const ContextApp = createContext("hola");
    const prods = [prods, setProds] = useState(products)


    return (
        <>
            <ContextApp.Provider value={{
                prods
            }}>
                <ItemListContainer prods={prods} />
            </ContextApp.Provider>
        </>
    )
}
export default Context;
