import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'
import { LinkContainer } from 'react-router-bootstrap'


const Item = ({ product }) => {
    
    return (
            <div className='cardContainer'>
                <Card className='cardItem' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.pictureUrl} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Categoría: {product.category}</Card.Text>
                        <Card.Text><small>Precio: U$D</small> {product.price}</Card.Text>
                        <Card.Text>Stock: {product.stock}</Card.Text>
                        <LinkContainer to={`/detail/${product.id}`}>
                        <Button variant="danger">Ver detalles</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </div>
    )
}
export default Item;



