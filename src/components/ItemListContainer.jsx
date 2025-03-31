import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const products = [
        { title: "Libro A", description: "Description Libro A", image: "book image", price: 500, stock: 3 },
        { title: "Libro B", description: "Description Libro B", image: "book image", price: 500, stock: 3 },
        { title: "Libro C", description: "Description Libro C", image: "book image", price: 500, stock: 3 }
    ]

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
