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
        <Card className='d-flex flex-row' style={{width: '100%', height: '10rem' }}>
            <LinkContainer to={`/detail/${product.id}`} style={{ width: '10rem'}}>
                <Image variant="left" src={product.pictureUrl} roundedCircle style={{cursor: 'pointer',}}/>
            </LinkContainer>
            <Card.Body className='d-flex flex-column'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Color: {product.color}</Card.Text>
                <Button variant="secondary" size='sm' style={{width:'8rem', margin:'0 auto'}} onClick={removeIt}>Eliminar</Button>
            </Card.Body>
            {/* <ItemCount getInitial={product.quantity} stock={product.stock}/> */}
            <Card.Text className='p-3 d-flex flex-row align-items-center'><small>U$D{' '} </small>{' '} {product.price*product.quantity}</Card.Text>
        </Card>    
    )
}
export default ItemCart;
