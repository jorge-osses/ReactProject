import React, { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/UserContext';
import { getFirebase } from '../../services/firebase/productServices';
import ItemsDashBoard from './ItemsDashBoard/ItemsDashBoard';
import Spin from '../Spin/Spin';
import { LinkContainer } from 'react-router-bootstrap';

const DashBoardContainer = () => {
    const { values } = useContext(UserContext);
    const [listProduct, setListProduct] = useState([]);
    const [list, setList] = useState(false);

    useEffect(() => {
        getFirebase('orders')
            .then((res) => {
                setListProduct(res.filter((item) => item.buyer.email === values.email));
                if (res.length === 0) {
                    setList(false);
                } else {
                    setList(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [values.email]);

    return (
        <Container>
            {values.email !== '' ? (
                <div>
                    {list ? (
                        <div>
                            <h1 className=" m-3">Tu Lista de Compras</h1>
                            <ItemsDashBoard products={listProduct} />
                        </div>
                    ) : (
                        <Spin />
                    )}
                    <LinkContainer to="/">
                        <Button className="m-3" variant="danger">Volver a la tienda</Button>
                    </LinkContainer>
                </div>
            ) : (
                <div>
                    <h1 className="m-3">No compraste nada aún</h1>
                    <LinkContainer to="/">
                        <Button className="m-3" variant='primary'>Volver a la tienda</Button>
                    </LinkContainer>
                </div>
            )}
        </Container>
    );
};

export default DashBoardContainer;
