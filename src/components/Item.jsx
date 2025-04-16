import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <Card className="item-card">
            <div className="item-image">
                <img src={product.image || "https://via.placeholder.com/200x300"} alt={product.title} />
            </div>
            <div className="item-content">
                <h2 className="item-title">{product.title}</h2>
                <p className="item-description">{product.description}</p>
                <div className="item-footer">
                    <span className="item-price">{product.price}</span>
                    <span className="item-stock">Stock: {product.stock}</span>
                    <span className="item-category">{product.category}</span>
                    <Link to={`/item/${product.id}`}>
                        <Button label="Detalles" severity="secondary" raised className="p-button-rounded" />
                    </Link>
                </div>
            </div>
        </Card>
    )
}

export default Item
