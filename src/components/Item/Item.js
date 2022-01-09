import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'
import { LinkContainer } from 'react-router-bootstrap'


const Item = ({ product }) => {
    
    return (
            <div className='cardContainer'>
                <Card className='cardItem' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.pictureUrl} style={{ height: '50%' }} />
                    <Card.Body className="d-flex flex-column justify-content-between" style={{ height: '50%' }}>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.category}</Card.Text>
                        <Card.Text><small>U$D</small> {product.price}</Card.Text>
                        <LinkContainer to={`/detail/${product.id}`}>
                            <Button variant="danger">Ver detalles</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </div>
    )
}
export default Item;



