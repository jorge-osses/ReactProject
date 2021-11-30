// import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NaviBar';
import './components/ItemListContainer/ItemListContainer.css'



function App() {
  

  return (
    <div className="App itemListContainer">
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
