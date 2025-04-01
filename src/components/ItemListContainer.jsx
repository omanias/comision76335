import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../services/productService'
import { ProgressSpinner } from 'primereact/progressspinner'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products);
                setLoading(false);
            })
            .catch(error => {
                setError('Error al cargar los productos. Por favor, intente más tarde.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-content-center align-items-center" style={{ height: '400px' }}>
                <ProgressSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-content-center align-items-center" style={{ height: '400px' }}>
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
