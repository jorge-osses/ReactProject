import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/ItemListContainer/ItemListContainer.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App itemListContainer" >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />            
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />            
          <Route exact path="/detail/:paramId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
