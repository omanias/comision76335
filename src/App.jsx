import React from 'react'
import Navbar from './components/Navbar'
import { PrimeReactProvider } from 'primereact/api';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
