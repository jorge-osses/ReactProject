import React from 'react';
import { useEffect, useState } from "react";
import {getProductById} from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import Spin from '../Spin/Spin'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {paramId} = useParams()
    console.log(paramId)

    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        })
        
        return (() => {
            setProduct()
        })
    },[paramId])

    return (
        <div>
            {product.length === 0 ? <Spin /> : <ItemDetail item={product} /> } 
        </div>
    )
}
export default ItemDetailContainer;