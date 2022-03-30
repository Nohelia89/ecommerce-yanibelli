

import { createContext, useContext, useState } from "react"


const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)




function CartContextProvider({ children }) {


    const [cartList, setCartList] = useState([])



    const addToCart = (item) => {

        const found = cartList.find(prod => prod.id === item.id);
        if (found) {
            found.cantidad += item.cantidad
        }
        else {
            setCartList([...cartList, item])
        }

    }


    const clear = () => {
        setCartList([])
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))


    }
    return (
        <>
            <CartContext.Provider value={{
                cartList,
                addToCart,
                clear,
                removeItem

            }}>
                {children}

            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider