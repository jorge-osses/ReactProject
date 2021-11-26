import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './itemCount.css';

const ItemCount = ({getInitial, getStock, onAdd}) => {
  const [count, setCount] = useState(getInitial);
  const [stock] = useState(getStock);
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
      <div><h3>Producto</h3></div>
      <div className="countContainer">
        <button  onClick={decrement}><FontAwesomeIcon icon={faMinus} /></button>
        <div>{count}</div>
        <button onClick={increment}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      <button className="addCartButton" onClick={validate}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

