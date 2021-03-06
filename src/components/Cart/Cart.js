import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import {LinkContainer} from 'react-router-bootstrap';

const Cart = () =>{
    const { Item, totalSum, clear } = useContext(CartContext)

    return (
        <Container className='CartProducts' >
            {Item.map(product => <ItemCart key={product.id} product={product} />)}
            {Item.length === 0 ? <div className='divCartProducts'>
                <h2>EL CARRITO ESTA VACIO</h2>
                <LinkContainer to={'/'}>
                    <Button variant='success'>Volver</Button>
                </LinkContainer>
                </div> : <div className='divCartProducts'><h2>Total: USD {totalSum(Item)}</h2>
                <Button variant='danger' onClick={clear}>Eliminar Carrito</Button>{' '}
                <LinkContainer to={'/Checkout'}>
                <Button variant='success'>Comprar</Button>
                </LinkContainer>
                
                </div>}
        </Container>
    )
}
export default Cart