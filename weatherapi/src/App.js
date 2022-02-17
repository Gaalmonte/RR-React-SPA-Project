import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather Application</h1>
      </header>
        <main>
          <Forecast />
        </main>
        <footer>
          Made by German Almonte
        </footer>
    </div>
  );
}

export default App;
