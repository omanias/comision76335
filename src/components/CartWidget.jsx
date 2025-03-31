import React from 'react'
import { Badge } from 'primereact/badge'
import 'primeicons/primeicons.css'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="pi pi-shopping-cart p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                <Badge value="0" severity="danger"></Badge>
            </i>
        </div>
    )
}

export default CartWidget
