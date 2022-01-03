import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";
import {LinkContainer} from 'react-router-bootstrap';
import { collection, addDoc, doc, getDoc, writeBatch, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import NotificationContext from "../../context/NotificationContext"
import { useNavigate } from 'react-router-dom';

const Cart = () =>{
    const { setNotification } = useContext(NotificationContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email:'',
        address: '',
        comment: '',
    })
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    setValidated(true);
  };
    const batch = writeBatch(db)
    const outOfStock = []
    const navigate = useNavigate()

    const llenarFormulario = (e) => {
        const { name, value } = e.target;
        setContact({
          ...contact,
          [name]: value,
        });
      };


    const {Item, totalSum, clear} = useContext(CartContext)
    const order = (e) => {
        e.preventDefault();

        setProcessingOrder(true)

        const objOrder = {
            buyer: contact.name,
            items: Item,
            total: totalSum(Item),
            phone: contact.phone,
            email: contact.email,
            address: contact.address,
            comment: contact.comment,
            date: Timestamp.fromDate(new Date())
        }
        objOrder.items.forEach((item) => {
            getDoc(doc(db, 'items', item.id)).then((docSnapshot) => {
                if (docSnapshot.data().stock >= item.quantity) {
                    batch.update(doc(db, 'items', docSnapshot.id), { 
                        stock: docSnapshot.data().stock - item.quantity 
                    })
                } else {
                    outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
                batch.commit().then( () => {
                    setNotification('succes', `Su orden es: ${id}`)
                })
            }).catch((err) => {
                setNotification('error', 'Error de ejecucion de la orden' + err)
            }).finally(() => {
                setTimeout(() => {
                    navigate('/')
                    clear()
                },3000)
                setProcessingOrder(false)
            } )
        }

    }

    if (processingOrder) {
        return (<h1>Estamos procesando su pedido</h1>)
    }
    


    return (
        <Container className='CartProducts' >
            {Item.map(product => <ItemCart key={product.id} product={product} />)}
            {Item.length === 0 ? <div className='divCartProducts'>
                <h2>EL CARRITO ESTA VACIO</h2>
                <LinkContainer to={'/'}>
                    <Button variant='success'>Volver</Button>
                </LinkContainer>
                </div> : <div className='divCartProducts'><h2>Total con IVA (21%): USD {totalSum(Item)}</h2><Button variant='danger' onClick={clear}>Eliminar Carrito</Button>
                {!processingOrder ? (
                   <Form className="p-4" noValidate validated={validated} onSubmit={handleSubmit}>
                   <Form.Group className="mb-3" controlId="formBasicText">
                     <Form.Control required type="text" name="name" placeholder="Name" onChange={llenarFormulario} />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Control required type="email" name="email" placeholder="Enter email" onChange={llenarFormulario} />
                     <Form.Control.Feedback type="invalid">Please choose a valid email.</Form.Control.Feedback>
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicText">
                     <Form.Control required type="text" name="address" placeholder="Address" onChange={llenarFormulario} />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicNumber">
                     <Form.Control required type="number" name="phone" placeholder="Phone" onChange={llenarFormulario} />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicText">
                     <Form.Control type="textarea" name="comment" placeholder="Comment" onChange={llenarFormulario} />
                   </Form.Group>
                  
                   <Button variant="primary" type="submit" onClick={order}>
                     Confirmar
                   </Button>
                 </Form>
                ): <h1>Se redirigirá al Inicio</h1> }
                </div>}
        </Container>
    )
}
export default Cart