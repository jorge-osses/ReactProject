import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = ({text}) => (
    <Container>
        <Row>
            <Col>
                <div style={{color: 'white'}}>
                    <h1>{text}</h1>
                    <p>Pañales Ecológicos</p>
                </div>
            </Col>
        </Row>
    </Container>
)
export default ItemListContainer