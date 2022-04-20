

import { createContext, useContext, useState } from "react"


const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)



function CartContextProvider({ children }) {


    const [cartList, setCartList] = useState([])
    const [userName, setUserName] = useState()
    const [userLastName, setUserLastName] = useState()
    const [userEmail, setUserEmail] = useState()


    const addToCart = (item) => {

        const found = cartList.find(prod => prod.id === item.id);
        if (found) {
            found.quantity += item.quantity
        }
        else {
            setCartList([...cartList, item])
        }

    }


    const clear = () => {
        setCartList([])
    }

    const loadUser = (userName, userLastName, userEmail) => {
        setUserName(userName)
        setUserLastName(userLastName)
        setUserEmail(userEmail)


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
                userName,
                userLastName,
                userEmail,
                addToCart,
                clear,
                removeItem,
                totalItems,
                totalPrice,
                loadUser

            }}>
                {children}

            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider