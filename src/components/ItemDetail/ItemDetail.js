import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/Card"


const ItemDetail = ({item}) => {
    return (
        <Container className='d-flex justify-content-center'>
            <Card className='cardItem d-flex flex-direction-row' style={{ width: '30rem' }}>
                <Card.Img variant="top" src={item?.pictureUrl} />
                <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>Color:Multicolor</Card.Text>
                    <Card.Text>Acerca de este producto: {item?.description}</Card.Text>
                    <Card.Text>Precio: U$D {item?.price}</Card.Text>
                    <Card.Text>Stock: {item?.stock}</Card.Text>
                    
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ItemDetail;