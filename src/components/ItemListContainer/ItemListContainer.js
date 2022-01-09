import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import { getFirebase } from '../../services/firebase/productServices';
import { useEffect, useState } from "react";
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import Spin from '../Spin/Spin'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        getFirebase('items', categoryId)
        .then((res) => {
            setProducts(res);
            if(res.length === 0){
                setLoading(true);
            } else {
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    },[categoryId])
    return (
        <Container fluid className='itemListContainer'>
            {loading ? <Spin /> : <ItemList product={products}/>}
        </Container>
    )
}
export default ItemListContainer