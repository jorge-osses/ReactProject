import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../itemCount/ItemCount';
import { useEffect, useState } from "react";
import {getProducts} from '../../products'
import './ItemListContainer.css'



const msg = (valor) => {
    console.log(`Se agrega el producto seleccionado la cantidad de: ${valor}`)
};


const ItemListContainer = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const list = getProducts()

        list.then((itemslist) => {
            setProducts(itemslist)
        })
    })
    return (


    <Container className='itemListContainer'>
        <ItemCount getInitial={1} stock={20} onAdd={(count)=> msg(count)} />
        <ItemList product={products}/>
    </Container>
)}
export default ItemListContainer