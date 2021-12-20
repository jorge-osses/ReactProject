import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'
import Container from 'react-bootstrap/Container'
import CartContext from "../../context/CartContext";
import { useState, useContext } from "react";

const Cart = () =>{
    const {Item} = useContext(CartContext)
    const { totalSum } = useContext(CartContext)    


    return (
        <Container className='CartProducts' >
            {Item.map(product => <ItemCart key={product.id} product={product} />)}
            <div className='divCartProducts'>TOTAL A PAGAR: USD {totalSum(Item)}</div>
        </Container>
    )
}
export default Cart