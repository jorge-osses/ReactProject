import Container from "react-bootstrap/esm/Container"
import Card from "react-bootstrap/Card"

const ItemDetail = ({item}) => {
    return (
        <Container>
            <Card className='cardItem' style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={item.pictureUrl} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>Close Pop-In Pañal de Tela Reutilizable, Multicolor (Red Panda), 3.18-16 kg</Card.Text>
                        <Card.Text>Color:Multicolor (Red Panda)</Card.Text>
                        <Card.Text>Acerca de este producto: Tamaño ajustable gracias a los corchetes de la parte delantera hacen que sea unitalla. Se adapta al crecimiento del bebé desde 3.18 kg - 16 kg. Cintura elástica suave y fácil cierre de aplica para que los cambios sean rápidos, en un paso. Refuerzo doble antiescapes para proteger las fugas del bebé de cualquier tamaño o edad. Absorbente removible y refuerzo para una absorción variable y un secado más rápido. Fácil de cuidar sin remojar, simplemente lave con un lavado de 60 grados.</Card.Text>
                        <Card.Text>Precio: U$D {item.price}</Card.Text>
                        <Card.Text>Stock: {item.stock}</Card.Text>
                        
                    </Card.Body>
                </Card>
        </Container>
    )
}
export default ItemDetail;