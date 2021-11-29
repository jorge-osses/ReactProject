import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './cartWidget.css';

   const CartWidget = ({number}) => (
        <button className="ms-auto buttonCart">
            <FontAwesomeIcon icon={faShoppingCart} style={{
                color:'black',
                fontSize:'1.5em',
                cursor:'pointer',
                padding:'2'
            }}/>
            <p style={{margin:'auto', marginLeft:'10px', padding:'10'}}>{number}</p>
        </button>
        
    )   


export default CartWidget;