import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'
import { useCallback } from 'react'

const Item = ({ product }) => {
    return (
            <div className='cardContainer'>
                <div className='cardItem' style={{ width: '18rem' }}>
                    <img src={product.thumbnail} />
                    <ul className='cardContent'>
                        <li className='cardTitle'>{product.title}</li>
                        {/* <li><b>Categoría:</b> {product.category}</li> */}
                        <li><b>Precio:</b> $ {product.price}</li>
                        {/* <li><b>Stock:</b> {product.stock}</li> */}
                        <li><button className="cardButton">Ver detalles</button></li>
                    </ul>
                </div>
            </div>
    )
}
export default Item;



