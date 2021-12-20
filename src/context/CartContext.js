import React, { useState, useContext } from 'react';
import NotificationContext from "../context/NotificationContext"


const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [Item, setItem] = useState([])
    const { setNotification } = useContext(NotificationContext)

    const addItem = (item, quantity) => {
        const product = {
            name: item.title,
            id: item.id,
            price: item.price,
            quantity: quantity,
            color: item.color,
            pictureUrl: item.pictureUrl,
        }
        setItem([...Item, product])        
    }
    const totalSum = (array) => {
        let count = 0;
        array.forEach(item => count += item.price*item.quantity)
        return count
    }
    const addItemById = (itemId, count, stock) => {
        if(isInCart(itemId)) {
            let prod = Item.find((el) => el.id  === itemId)
            const sum = (it1, it2) => {return it1 + it2}
            if(sum(prod.quantity, count) <= stock){
                prod.quantity += count;
                setNotification('success',`Se agregó al carrito: ${count} unidades`)
            } else {
                setNotification('error', `No hay mas unidades del producto`)
            }

        }
    }

    const countItems = () => {
        let count = 0
        Item.forEach(prod => {
            count += prod.quantity;
        });
        console.log(count)
        return count;
    }
    countItems()

    const removeItem = (itemId) => {
        setItem(Item.filter(item => item.id === itemId))
    }
    const clear = () => {
        setItem([])
    }
    const isInCart = (id) => {
        const result = Item.some(item => item.id === id)
        console.log(result)
        return result
    }
    console.log(Item)


    
 
    return(
        <CartContext.Provider value={{Item, addItem, removeItem, clear, isInCart, addItemById, countItems, totalSum}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
