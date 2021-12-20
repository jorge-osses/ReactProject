import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount  from '../itemCount/ItemCount'
import { useState, useContext } from "react"
import { LinkContainer } from "react-router-bootstrap"
import CartContext from '../../context/CartContext'
import NotificationContext from "../../context/NotificationContext"


const ItemDetail = ({item}) => {
    const [count, setCount] = useState(0);
    const { addItem } = useContext(CartContext)
    const { addItemById } = useContext(CartContext)
    const { isInCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const addToCart = (n) => {
        setCount(count + n)
        setNotification('success',`Se agregó al carrito: ${n} unidades`)
        itemAdd(n)
    }
    const itemAdd = (count) => {
        if(isInCart(item.id)){
            addItemById(item.id, count, item.stock)
        } else {
            addItem(item, count)
        }
    }

    return (
        <Container fluid className='d-flex justify-content-center'>
            <Card className='cardItem d-flex flex-row justify-content-between' style={{ width: '98%' }}>
                <Card.Body className='p-2'  style={{ width: '50%' }}>
                <Card.Img variant="top" src={item?.pictureUrl} style={{ width: '90%' }}/>
                </Card.Body>
                <Card.Body className='p-4 d-flex flex-column align-items-between' style={{ width: '50%', borderLeft: '1px solid grey' }}>
                    <Card.Title className='p-6 mb-4'>{item?.title}</Card.Title>
                    <Card.Text>Color: {item?.color}</Card.Text>
                    <Card.Text>Acerca de este producto: {item?.description}</Card.Text>
                    <Card.Text className='pt-5'><b>Precio: U$D {item?.price}</b></Card.Text>
                    {count === 0 ? <ItemCount getInitial={1} stock={item?.stock} onAdd={addToCart}/> : <LinkContainer to={'/cart'} style={{width: '300px', margin: '20px auto'}}><Button variant='danger'>Ir al carrito</Button></LinkContainer>}
                    <Card.Footer>{item?.stock} productos disponibles</Card.Footer>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ItemDetail;