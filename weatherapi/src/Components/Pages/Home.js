import Forecast from '../Forecast/Forecast';
import './Home.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather Application</h1>
      </header>
      <main>
        <Forecast />
      </main>
    </div>
  );
}

export default App;
