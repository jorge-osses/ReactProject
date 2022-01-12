import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { getProductStock, outOfStockProduct, timeNow } from '../../services/firebase/productServices';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import NotificationContext from "../../context/NotificationContext";
import './ContactForm.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';


const ContactForm = () => {
  const { clear, totalSum, Item } = useContext(CartContext);
  const { updateEmail } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext)

  const [valores, setValores] = useState({ name: '', lastName: '', phone: '', email: '' });
  const [proccessingOrder, setProccessingOrder] = useState(false)


  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const navigate = useNavigate();

  const fillForm = (e) => {
    const { name, value } = e.target;
    setValores({
        ...valores,
        [name]: value,
    });
  };

  const onKeyDownPhone = (e) => {
    if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 13 || (e.keyCode >= 48 && e.keyCode <= 57)) {
    } else {
        e.preventDefault();
    }
  };
  
  const validateForm = (e) => {
    e.preventDefault();

    if (!valores.name) {
        setErrorName(true);
    } else {
        setErrorName(false);
    }
    if (!valores.lastName) {
        setErrorLastName(true);
    } else {
        setErrorLastName(false);
    }
    if (!valores.email) {
        setErrorEmail(true);
    } else {
        setErrorEmail(false);
    }
    if (!valores.phone) {
        setErrorPhone(true);
    } else {
        setErrorPhone(false);
    }

    if (valores.name && valores.lastName && valores.email && valores.phone) {
        checkout();
    }
  };

  const checkout = () => {
    const buyout = {
      buyer: {
        nombre: valores.name,
        apellido: valores.lastName,
        email: valores.email,
        phone: valores.phone,
      },
      items: Item,
      date: timeNow(),
      total: totalSum(Item),
    };

    let productStock = getProductStock(buyout);

    outOfStockProduct(buyout, productStock.batch, productStock.outOfStock)
      .then((res) => {
        setNotification('succes', `Su orden fue creada: ${res}`)
      })
      .catch((err) => {
        setNotification('error', `Error ejecutando la orden: ${err}`)
      })
      .finally(() => {
        updateEmail(buyout.buyer.email);
        setTimeout(() => {
          clear();
          navigate('/Dashboard');
        },3000);
        setProccessingOrder(true);
      })

  }
  
  return (
    <Container>
      {!proccessingOrder ? (
        <Form className="p-4" noValidate onSubmit={validateForm}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control required type="text" name="name" placeholder="Nombre" onChange={fillForm} />
          {errorName && <small className="error">El nombre es requerido</small>}
        </Form.Group><Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control required type="text" name="lastName" placeholder="Apellido" onChange={fillForm} />
          {errorLastName && <small className="error">El apellido es requerido</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control required type="email" name="email" placeholder="Email" onChange={fillForm} />
          {errorEmail && <small className="error">El email es requerido</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Control required type="tel" name="phone" placeholder="Teléfono" onKeyDown={onKeyDownPhone} onChange={fillForm} />
          {errorPhone && <small className="error">El teléfono es requerido</small>}
        </Form.Group>     
        <Button variant="primary" type="submit">
          Confirmar compra
        </Button>
        </Form>
      ) : <h1 className="tx-center">Redireccionando al Dashboard...</h1>}  
    </Container>
  )
}
export default ContactForm