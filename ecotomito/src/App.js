import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NaviBar';
import './components/ItemListContainer/ItemListContainer.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  

  return (
    <div className="App itemListContainer" >
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
