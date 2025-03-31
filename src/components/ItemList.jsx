import React from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail'
const ItemList = ({ products }) => {
    console.log(products)
    return (
        <div>
            <Item />
            <ItemDetail />
        </div>
    )
}

export default ItemList
