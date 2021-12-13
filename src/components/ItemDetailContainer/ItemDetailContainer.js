import React from 'react';
import { useEffect, useState } from "react";
import {getProductById} from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

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
            <ItemDetail item={product} />
        </div>
    )
}
export default ItemDetailContainer;