import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap'



const ItemCart = ({ product }) => {
    
    return (
        <Card className='d-flex flex-row' style={{width: '100%', height: '10rem' }}>
            <LinkContainer to={`/detail/${product.id}`} style={{ width: '10rem'}}>
                <Image variant="left" src={product.pictureUrl} roundedCircle/>
            </LinkContainer>
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Color: {product.color}</Card.Text>
                
                <Button variant="light" size='sm' style={{width:'8rem', margin:'0 auto'}}>Eliminar</Button>
                
            </Card.Body>
            <Card.Text className='t-center'><small>U$D</small> {product.price*product.quantity}</Card.Text>
        </Card>    
    )
}
export default ItemCart;
