import Item from "../Item/Item";
import './ItemList.css'

const ItemsList = ( {product} ) => {
    return (
        <div>
          <ul className='listItem'>
              {product.map(product => <Item key={product.id} product={product} />)}
          </ul>
        </div>
    )
}
export default ItemsList