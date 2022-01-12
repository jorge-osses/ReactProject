import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import Spin from '../Spin/Spin'
import { getProductById } from '../../services/firebase/productServices';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {paramId} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById('items', paramId)
            .then((res) => {
                setProduct(res)
                if(res.stock > 0){
                } else {
                    return(<h1>El producto no tiene stock</h1>) 
                }
                if (res.pictureUrl){
                } else {
                    return(<h1>No existe</h1>)}
            })
            .catch((error) => {
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