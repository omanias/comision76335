import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ItemCount from './ItemCount';
import libro from '../assets/descarga.png';
import './ItemDetail.css'

const ItemDetail = () => {
    return (
        <Card className="item-detail-card">
            <div className="item-detail-content">
                <div className="item-detail-image">
                    <img src={libro} alt="Libro A" />
                </div>
                <div className="item-detail-info">
                    <h2 className="item-detail-title">Libro A</h2>
                    <p className="item-detail-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                    <div className="item-detail-price">$100</div>
                    <div className="item-detail-actions">
                        <ItemCount />
                        <Button label="Agregar al carrito" severity="success" raised />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ItemDetail
