import "./App.css";
import BitcoinTracker from "./component/BitcoinTracker";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BitcoinTracker />
      </header>
    </div>
  );
}

export default App;
