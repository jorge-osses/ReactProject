import { useEffect, useState } from "react";
import {getItem} from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemList/ItemList.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const detail = getItem()

        detail.then((itemDetail) => {
            setProduct(itemDetail)
        })
    })
    return (
        <div className='ListItem'>
            <ItemDetail item={product} />
        </div>
    )
}
export default ItemDetailContainer;