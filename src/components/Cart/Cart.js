import React from "react";
import Spinner from "react-bootstrap/Spinner";
import './Cart.css'

const Cart = () => (
    <div className="divParent">
        <div className="divChild">
            <Spinner animation="grow" size="lg" variant="danger" />
            <Spinner animation="grow" size="lg" variant="danger" />
            <Spinner animation="grow" size="lg" variant="danger" />
            <Spinner animation="grow" size="lg" variant="danger" />
        </div>
    </div>
)
export default Cart;
