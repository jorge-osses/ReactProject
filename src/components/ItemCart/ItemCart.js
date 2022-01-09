import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap'
import CartContext from "../../context/CartContext";
import { useContext } from "react";


const ItemCart = ({ product }) => {
    const { removeItem } = useContext(CartContext)

    const removeIt = () => {
        removeItem(product.id)
    }
    
    return (
        <Card className='d-flex flex-row justify-content-between' style={{width: '100%', height: '14rem' }}>
            <LinkContainer className="d-flex flex-column align-item-center" to={`/detail/${product.id}`} style={{ width: '20%', height:'100%'}}>
                <Button variant="ligth">
                <Image src={product.pictureUrl} thumbnail />
                </Button>
            </LinkContainer>
            <Card.Body className='d-flex flex-column' style={{ width: '60%'}}>
                <Card.Title className='p-2'>{product.name}</Card.Title>
                <Card.Text>Color: {product.color}</Card.Text>
                
            </Card.Body>
            <Card.Body className='p-2 d-flex flex-column justify-content-center' style={{ width: '20%'}}>
                <Card.Text><small>Cant:{''} </small> {product.quantity}</Card.Text>
                <Card.Text><small>U$D{' '} </small>{' '} {(product.price*product.quantity).toFixed(2)}</Card.Text>
                <Button variant="secondary" size='sm' style={{width:'8rem', margin:'0 auto'}} onClick={removeIt}>Eliminar</Button>
            </Card.Body>
        </Card>    
    )
}
export default ItemCart;
