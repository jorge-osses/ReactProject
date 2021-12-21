import React from 'react';
import { useEffect, useState } from "react";
import {getProductById} from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import Spin from '../Spin/Spin'
import { db } from '../../services/firebase/firebase';
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {paramId} = useParams()
    console.log(paramId)

    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            setProduct(product)
        }).catch((error) => {
            console.log('Error searching item', error)
        }).finally(() => {
            setLoading(false)
        })
        
        return (() => {
            setProduct()
        })
    },[paramId])

    return (
        <div>
            {loading ? <Spin /> : <ItemDetail item={product} /> } 
        </div>
    )
}
export default ItemDetailContainer;