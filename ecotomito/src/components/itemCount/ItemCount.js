import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


const ItemCount = () => {
  const [count, setCount] = useState(1);
  const stock = 15;

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
  const onAdd = () => {
    console.log(count)
  }
  return (
    <div className="container center">
      <div><h3>Producto</h3></div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <button onClick={decrement}><FontAwesomeIcon icon={faMinus} /></button>
        <div>{count}</div>
        <button onClick={increment}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

