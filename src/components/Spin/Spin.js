import React from "react";
import Spinner from "react-bootstrap/Spinner";
import './Spin.css'

const Spin = () => (
    <div className="divParent">
        <div className="divChild">
            <Spinner animation="grow" size="lg" variant="danger" />
            <Spinner animation="grow" size="lg" variant="danger" />
            <Spinner animation="grow" size="lg" variant="danger" />
            <Spinner animation="grow" size="lg" variant="danger" />
        </div>
    </div>
)
export default Spin;
