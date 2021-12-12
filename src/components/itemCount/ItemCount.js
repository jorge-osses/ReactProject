import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './itemCount.css';
import { Button } from 'react-bootstrap';

const ItemCount = ({getInitial, stock, onAdd}) => {
  const [count, setCount] = useState(getInitial);
  const validate = () => {
    if (stock>0) {
      onAdd(count)
    }else {
      return
    }
  }
  
  const increment = () => {
    if (count >= 1 && count < stock){
      setCount(count + 1);
    }
  }
  const decrement = () => {
    if (count > 1){
      setCount(count - 1);
    }
  }
  
  return (
    <div className="itemCount">
      <div className="countContainer">
        <button  onClick={decrement}><FontAwesomeIcon icon={faMinus} /></button>
        <div>{count}</div>
        <button onClick={increment}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      <Button variant='danger' className="addCartButton" onClick={validate}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount

