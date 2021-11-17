import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jorge Osses
        </p>
      </header>
    </div>
  );
}

export default App;
