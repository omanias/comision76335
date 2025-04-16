import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    if (!product) {
        return null;
    }

    return (
        <Card className="item-detail-card">
            <div className="item-detail-content">
                <div className="item-detail-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="item-detail-info">
                    <h1 className="item-detail-title">{product.title}</h1>
                    <p className="item-detail-description">{product.description}</p>
                    <div className="item-detail-price">${product.price}</div>
                    <div className="item-detail-actions">
                        <ItemCount />
                        <Button
                            label="Agregar al carrito"
                            severity="success"
                            raised
                            className="p-button-rounded"
                        />
                        <Link to="..">
                            <Button
                                label="Volver"
                                severity="secondary"
                                outlined
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ItemDetail
