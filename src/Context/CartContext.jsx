

import { createContext, useContext, useState } from "react"



const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)



function CartContextProvider({ children }) {


    const [cartList, setCartList] = useState([])


    const addToCart = (item) => {

        const found = cartList.find(prod => prod.id === item.id);
        if (found) {
            found.quantity += item.quantity
            const cartUpdate = [...cartList]
            setCartList(cartUpdate)

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


    const totalItems = () => {

        return cartList.reduce((prevValue, prod) => prevValue += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((prevValue, prod) => prevValue += (prod.quantity * prod.price), 0)

    }
    return (
        <>
            <CartContext.Provider value={{
                cartList,

                addToCart,
                clear,
                removeItem,
                totalItems,
                totalPrice,


            }}>
                {children}

            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider