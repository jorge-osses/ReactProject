import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/Card"


const ItemDetail = ({item}) => {
    return (
        <Container className='d-flex justify-content-center'>
            <Card className='cardItem d-flex flex-direction-row' style={{ width: '40rem' }}>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Close Pop-In Pañal de Tela Reutilizable, Multicolor (Red Panda), 3.18-16 kg</Card.Text>
                    <Card.Text>Color:Multicolor (Red Panda)</Card.Text>
                    <Card.Text>Acerca de este producto: {item.description}</Card.Text>
                    <Card.Text>Precio: U$D {item.price}</Card.Text>
                    <Card.Text>Stock: {item.stock}</Card.Text>
                    
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ItemDetail;