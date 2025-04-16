import React, { useState } from 'react'
import CartWidget from './CartWidget'
import { Dropdown } from 'primereact/dropdown'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { name: 'Todos', code: 'TODOS' },
        { name: 'Ficción', code: 'FIC' },
        { name: 'No Ficción', code: 'NFIC' },
        { name: 'Literatura Infantil', code: 'INF' }
    ];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.value);
    };

    return (
        <nav className="navbar">
            <div className="store-name">
                <Link to={"/"}>
                    <h1>Mi Librería</h1>
                </Link>
            </div>
            <div className="nav-controls">
                <div className="dropdown-container">
                    <Dropdown
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        options={categories}
                        optionLabel="name"
                        placeholder="Categorías de Libros"
                        className="w-full md:w-14rem"
                    />
                    {selectedCategory && selectedCategory.code !== 'TODOS' ? (
                        <Link to={`/category/${selectedCategory.name}`} className="category-link" />
                    ) : (
                        <Link to="/" className="category-link" />
                    )}
                </div>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
