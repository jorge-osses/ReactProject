import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap'
import CartContext from "../../context/CartContext";
import { useContext } from "react";
// import ItemCount from "../itemCount/ItemCount"


const ItemCart = ({ product }) => {
    const { removeItem } = useContext(CartContext)

    const removeIt = () => {
        removeItem(product.id)
    }
    
    return (
        <Card className='d-flex flex-row justify-content-between' style={{width: '100%', height: '10rem' }}>
            <LinkContainer className="d-flex flex-column justify-content-center" to={`/detail/${product.id}`} style={{ width: '8rem', height:'8rem'}}>
                <Image variant="left" src={product.pictureUrl} roundedCircle/>
            </LinkContainer>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='p-4'>{product.name}</Card.Title>
                <Card.Text>Color: {product.color}</Card.Text>
                
            </Card.Body>
            <Card.Body className='p-3 d-flex flex-column justify-content-center' style={{ width: '30%'}}>
                <Card.Text><small>Cant:{''} </small> {product.quantity}</Card.Text>
                <Card.Text><small>U$D{' '} </small>{' '} {(product.price*product.quantity).toFixed(2)}</Card.Text>
                <Button variant="secondary" size='sm' style={{width:'8rem', margin:'0 auto'}} onClick={removeIt}>Eliminar</Button>
            </Card.Body>
        </Card>    
    )
}
export default ItemCart;
