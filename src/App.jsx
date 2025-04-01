import React from 'react'
import Navbar from './components/Navbar'
import { PrimeReactProvider } from 'primereact/api';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <PrimeReactProvider>
      <div>
        <Navbar />
        <ItemListContainer />
      </div>
    </PrimeReactProvider>
  )
}

export default App
