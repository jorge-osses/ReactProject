import React from 'react'
import ItemD from './ItemD'
import Container from 'react-bootstrap/Container'

const ItemsDashBoard = ({products}) => {
    return (
        <Container>
            {products.map(product => {
                return <ItemD key={product.id} product={product}></ItemD>
            })}
        </Container>
    )
}

export default ItemsDashBoard
