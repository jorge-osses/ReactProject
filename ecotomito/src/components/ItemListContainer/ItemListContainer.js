import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../itemCount/ItemCount';


const msg = (valor) => {
    console.log(`Se agrega el producto seleccionado la cantidad de: ${valor}`)
  };

const ItemListContainer = ({text}) => (
    <Container>
        <Row>
            <Col>
                <div>
                    <h1>{text}</h1>
                    <p>Pañales Ecológicos</p>
                </div>
            </Col>
        </Row>
        <ItemCount getInitial={1} getStock={15} onAdd={(count)=> msg(count)} />
    </Container>
)
export default ItemListContainer