import React, { useState } from 'react'
import CartWidget from './CartWidget'
import { Dropdown } from 'primereact/dropdown'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import './Navbar.css'

const Navbar = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { name: 'Ficción', code: 'FIC' },
        { name: 'No Ficción', code: 'NFIC' },
        { name: 'Literatura Infantil', code: 'INF' }
    ];

    return (
        <nav className="navbar">
            <div className="store-name">
                <h1>Mi Librería</h1>
            </div>
            <div className="nav-controls">
                <div className="dropdown-container">
                    <Dropdown
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.value)}
                        options={categories}
                        optionLabel="name"
                        placeholder="Categorías de Libros"
                        className="w-full md:w-14rem"
                    />
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar
