import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const ItemsD = ({ product }) => {
    return (
        <Container className="m-4">
            <hr />
            <h1>ID de Compra: {product.id}</h1>
            <h2>{product.buyer.email}</h2>
            <p>Productos:</p>
            <Container className="d-flex flex-row flex-wrap justify-content-center m-4">
            {product.items.length > 0 &&
                product.items.map((item) => {
                    return (
                        <Card
                        bg="warning"
                        border='primary'
                        key={item.id}
                        text='black'
                        style={{ width: '18rem', boxShadow:'10px 10px 10px grey' }}
                        className="m-2"
                        >
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>U$D{' '}{item.price}</Card.Text>
                            <Card.Text>x{item.quantity}</Card.Text>
                          </Card.Body>
                        </Card>
                    );
                })}
            </Container>
            <h3>Total: U$D{' '}{product.total}</h3>
        </Container>
    );
};

export default ItemsD;