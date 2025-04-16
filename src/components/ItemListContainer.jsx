import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../services/productService'
import { ProgressSpinner } from 'primereact/progressspinner'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { category } = useParams();

    useEffect(() => {
        getProducts()
            .then(products => {
                if (category) {
                    const filteredProducts = products.filter(product =>
                        product.category.toLowerCase() === category.toLowerCase()
                    );
                    setProducts(filteredProducts);
                } else {
                    setProducts(products);
                }
                setLoading(false);
            })
            .catch(error => {
                setError('Error al cargar los productos. Por favor, intente más tarde.');
                setLoading(false);
            });
    }, [category]);

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
