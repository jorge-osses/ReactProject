import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'

const Item = ({ product }) => {
    return (
            <div className='cardContainer'>
                <Card className='cardItem' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.pictureUrl} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Categoría: {product.category}</Card.Text>
                        <Card.Text>Precio: U$D {product.price}</Card.Text>
                        <Card.Text>Stock: {product.stock}</Card.Text>
                        <Button variant="primary">Ver detalles</Button>
                    </Card.Body>
                </Card>
            </div>
    )
}
export default Item;



