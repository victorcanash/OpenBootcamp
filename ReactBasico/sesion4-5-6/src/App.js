import logo from './logo.svg';
import './App.css';
// import { ExampleClockComponent } from './components/example-clock';
import { ClockComponent } from './components/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ExampleClockComponent></ExampleClockComponent> */}
        <ClockComponent></ClockComponent>
      </header>
    </div>
  );
}

export default App;
