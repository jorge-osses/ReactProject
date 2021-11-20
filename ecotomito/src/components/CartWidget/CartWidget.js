import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

   const CartWidget = (number) => (
        <div className="ms-auto" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <FontAwesomeIcon icon={faShoppingCart} style={{
                color:'yellow',
                fontSize:'1.5em',
                cursor:'pointer',
            }}/>
            <p style={{margin:'auto', marginLeft:'10px'}}>{1}</p>
        </div>
    )   


export default CartWidget;