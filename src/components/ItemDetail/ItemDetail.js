import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount  from '../itemCount/ItemCount'
import { useState } from "react"
import { LinkContainer } from "react-router-bootstrap"



const ItemDetail = ({item}) => {
    const [count, setCount] = useState(0);

    const addToCart = (n) => {
        setCount(count + n)
        console.log(`Se agregó al carrito: ${n} unidades`)
    }

    return (
        <Container fluid className='d-flex justify-content-center'>
            <Card className='cardItem d-flex flex-row justify-content-between' style={{ width: '98%' }}>
                <Card.Body className='p-2'  style={{ width: '50%' }}>
                <Card.Img variant="top" src={item?.pictureUrl} style={{ width: '90%' }}/>
                </Card.Body>
                <Card.Body className='p-4 d-flex flex-column align-items-between' style={{ width: '50%', borderLeft: '1px solid grey' }}>
                    <Card.Title className='p-6 mb-4'>{item?.title}</Card.Title>
                    <Card.Text>Color:Multicolor</Card.Text>
                    <Card.Text>Acerca de este producto: {item?.description}</Card.Text>
                    <Card.Text>Precio: U$D {item?.price}</Card.Text>
                    <Card.Text>Stock: {item?.stock}</Card.Text>
                    {count === 0 ? <ItemCount getInitial={1} stock={item?.stock} onAdd={addToCart} /> : <LinkContainer to={'/cart'}><Button variant='danger'>Finalizar Compra</Button></LinkContainer>}
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ItemDetail;