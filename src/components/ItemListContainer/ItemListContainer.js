import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import {getProducts, getProductByCategory} from '../../products'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';




const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        ( async () => {
            
            if (categoryId !== undefined){
                const list = await getProductByCategory(categoryId)
                setProducts(list)
            } else {
                const list = await getProducts()
                setProducts(list)
            }
        }) ()
    },[categoryId])
    return (


    <Container className='itemListContainer'>
        <ItemList product={products}/>
    </Container>
)}
export default ItemListContainer