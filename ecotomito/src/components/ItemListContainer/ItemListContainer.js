import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../itemCount/ItemCount';

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
        <ItemCount/>
    </Container>
)
export default ItemListContainer