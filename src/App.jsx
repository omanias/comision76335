import React from 'react'
import Navbar from './components/Navbar'
import { PrimeReactProvider } from 'primereact/api';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Componente1 from './components/Componente1';

const App = () => {
  return (
    <PrimeReactProvider>
      <div>
        <Navbar />
        <ItemListContainer />
        <Componente1 />
      </div>
    </PrimeReactProvider>
  )
}

export default App
