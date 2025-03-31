import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Item.css'

const Item = () => {
    return (
        <Card className="item-card">
            <div className="item-image">
                <img src="https://via.placeholder.com/200x300" alt="Libro" />
            </div>
            <div className="item-content">
                <h2 className="item-title">Libro A</h2>
                <p className="item-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
                <div className="item-footer">
                    <span className="item-price">$29.99</span>
                    <Button label="Detalles" severity="secondary" raised />
                </div>
            </div>
        </Card>
    )
}

export default Item
