import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import {getProducts, getProductByCategory} from '../../products'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import Spin from '../Spin/Spin'
import { db } from '../../services/firebase/firebase';
import { collection, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        if(!categoryId){
            setLoading(true)
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                console.log(querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('category', '==', categoryId))).then((querySnapshot) => {
                console.log(querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error)
            }).finally(() => {
                setLoading(false)
            })
        }

        return (() => {
            setProducts([])
        })
    },[categoryId])
    return (


    <Container fluid className='itemListContainer'>
        {loading ? <Spin /> : <ItemList product={products}/>}
    </Container>
)}
export default ItemListContainer