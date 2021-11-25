// import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NaviBar';




function App() {
  

  return (
    <div className="App">
       <NavBar></NavBar>
      
        <ItemListContainer text="¡Bienvenidos a Ecotomito!" />
      
    </div>
  );
}

export default App;
