import Item from "../Item/Item";
import '../ItemList/ItemList.css'


const ItemsList = ( {product} ) => {
    return (
        <div>
          <div className='listItem'>
              {product.map(product => <Item key={product.id} product={product} />)}
          </div>
        </div>
    )
}
export default ItemsList