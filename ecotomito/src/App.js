import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NaviBar';

function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
      <header className="App-header">
        <ItemListContainer text="¡Bienvenidos a Ecotomito!" />
      </header>
    </div>
  );
}

export default App;
