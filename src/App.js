import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/ItemListContainer/ItemListContainer.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext'
import Notification from './components/Notification/Notification';
import { NotificationContextProvider } from './context/NotificationContext'
import Cart from "./components/Cart/Cart"
import ContactForm from './components/ContactForm/ContactForm';
import DashBoardContainer from './components/DashBoard/DashBoardContainer';
import { UserContext } from './context/UserContext';


function App() {
  return (
    <div className="App itemListContainer" >
      <UserContext>
        <NotificationContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Notification />
              <Routes>
                <Route exact path="/" element={<ItemListContainer/>} />            
                <Route exact path="/Cart" element={<Cart />} />
                <Route exact path="/Checkout" element={<ContactForm />} />
                <Route exact path="/Dashboard" element={<DashBoardContainer />} />
                <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />            
                <Route exact path="/detail/:paramId" element={<ItemDetailContainer />} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationContextProvider>
      </ UserContext>
    </div>
  );
}

export default App;
