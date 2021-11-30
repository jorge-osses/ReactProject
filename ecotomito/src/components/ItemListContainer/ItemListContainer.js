import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../itemCount/ItemCount';
import { useEffect, useState } from "react";
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    const handleClick = () => {
        
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => {
            return response.json()
        }).then(res => {
            setProducts(res.results.slice(0,100))
        })
    }
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleClick}>Search</button>
            </div>
            <Container>
                <ItemList className='ItemListContainer' product={products} />
            </Container>
        </div>
    )

}
export default ItemListContainer
