import { useState } from 'react'
import { Button } from 'primereact/button';
import './ItemCount.css'

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div className="item-count-container">
            <div className="counter-buttons">
                <Button
                    icon="pi pi-minus"
                    severity="info"
                    rounded
                    text
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter <= 0}
                />
                <span className="counter-value">{counter}</span>
                <Button
                    icon="pi pi-plus"
                    severity="info"
                    rounded
                    text
                    onClick={() => setCounter(counter + 1)}
                />
            </div>
        </div>
    )
}

export default ItemCount
